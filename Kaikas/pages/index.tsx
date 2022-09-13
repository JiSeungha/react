import type { GetServerSideProps, NextPage } from "next";
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from "react";
import LoginLists from "../components/LoginLists";

const Home: NextPage = () => {
  const [isLogin, setIsLogin] = useState("");
  const [loginList, setLoginList] = useState<any[]>([]);
  const router = useRouter()

  useEffect(() => {
    if (localStorage.getItem("list") === null || localStorage.getItem("list") === "[]") {
      console.log("No Storage Data");
    } else {
      const listArrays = JSON.parse(localStorage.getItem("list"));
      if(Array.isArray(listArrays) && listArrays[0] !== null && listArrays.length !== 0) {
        setLoginList(listArrays);
      }
    }
  },[])
  
  useEffect(() => {
    if(!router.isReady) return;
    else if(typeof(window.klaytn) == undefined) return;
    else {
      localStorage.setItem("Logined", "NOT_LOGINED")
      const check = async () => {
        const wallet = await window.klaytn?.enable();
        if(wallet == undefined){
        } else{
          setIsLogin(wallet[0]);
          localStorage.setItem("Logined", wallet[0])
        }
      }      
    check();
    }
  },[router.isReady])

  const login = async() => {
    const wallet = await window.klaytn.enable();
    if(wallet == undefined){
      alert("UNDEFINED");
      localStorage.setItem("Logined", "NOT_LOGINED")
    } else if( wallet[0] !== null){
      alert("already logined : " + wallet[0]);
      setIsLogin(String(wallet[0]));
      localStorage.setItem("Logined", wallet[0])
      additem();
    }
  }
   
  const onClick = () => {
    if(!window.klaytn){
      alert("Install kaikas");
      return(
        <Link href="https://chrome.google.com/webstore/detail/kaikas/jblndlipeogpafnldhgmapagcccfchpi">
          <a>Install Kaikas</a>
        </Link>
      )
    } else{
      login();
    }
  }

  const additem = () => {
    const newList = loginList.concat({
      id: JSON.stringify(localStorage.getItem("Logined")), 
      name: "-",
      intro: "-",
    });
    const noDupList = newList.filter((v, i) => 
      newList.findIndex(x => x.name === v.name) === i);
    setLoginList(noDupList);
    let datas = "";
    noDupList.map((item) => {
        datas += JSON.stringify(item) + ",";
    });
    console.log(noDupList)
    if (datas !== null && datas !== "null,") localStorage.setItem("list", "[" + datas.slice(0, -1) + "]");
  }

  const toMyPage = () => {
    if(isLogin !== null){
      router.push({
        pathname: '/my',
    });
    } else{
      alert("Not Logined");
      router.push("/");
    }
  }
  
  return (
    <div className={"container mx-auto px-4 py-8"}>      
      <a>
        <button onClick = {onClick}>
          LOGIN
        </button>
      </a>
      <div>
        <button onClick = {toMyPage}>
          Mypage
        </button>
      </div>
      <div className="py-2">
        <LoginLists
          loginList={loginList}
          setLoginList={setLoginList}
        />
      </div>
    </div>
  );
};

export default Home;
