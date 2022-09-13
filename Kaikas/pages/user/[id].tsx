import type { NextPage } from "next";
import { useRouter } from 'next/router'
import { useEffect, useState } from "react";

const userPage: NextPage = () => {
  const [isSame, setSame] = useState(false);
  const [user, setUser] = useState({});
  const router = useRouter()
  const { id } = router.query
  
  useEffect(()=> {
    if(!router.isReady) return;
    const check = async () => {
      const wallet = await window.klaytn.enable();
      const queryId = router.query;
      if(String(wallet[0]) == String(queryId.id)){
        setSame(true);
        {router.push("/my")}
      } else {
        if (localStorage.getItem("list") === null || localStorage.getItem("list") === "[]") {
          console.log("No Storage Data");
        } else {
          const listArrays = JSON.parse(localStorage.getItem("list"));
          listArrays.map(( users, idx ) =>{
            if(users.id === String(queryId.id) || users.id.slice(1,-1) === String(queryId.id)) setUser(users);
          })
        }
      }
    }
    check();
  },[router.isReady]);

  return (
    <div>
      {isSame ?
      <div> redirecting... </div>:
        <div>
          <p>ID : {id} </p>
          <p>Name : {user.name}</p>
          <p>Details : {user.intro}</p>
        </div>
      }
    </div>
  );

};

export default userPage;
