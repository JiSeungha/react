import type { GetServerSideProps, NextPage } from "next";
import { useRouter } from 'next/router'
import React, { useState, useEffect } from "react";

const my: NextPage = () => {
    const [user, setUser] = useState({});
    const [inputs, setInputs] = useState("");
    const [inputs2, setInputs2] = useState("");
    const router = useRouter();

    useEffect(()=> {
        if(localStorage.getItem("Logined") == "NOT_LOGINED" || localStorage.getItem("Logined") == null){
            alert("You should login first");
            router.push("/")
        }
        else{
            const listArrays = JSON.parse(localStorage.getItem("list"));
            const loginedUser = listArrays.filter((item) => 
                item.id.slice(1,-1) === String(localStorage.getItem("Logined"))
            )
            setUser(loginedUser[0]);
        }
    },[]);

    const onChange = (e) => {
        setInputs(e.target.value);
    };
    
    const onChange2 = (e) => {
        setInputs2(e.target.value);
    };
    
    const addData = (e) => {
        if (e.key === "Enter") {
            setUser({
                ...user,
                name: e.target.value,
            });
            
            const listArrays = JSON.parse(localStorage.getItem("list"));
            const loginedUser = listArrays.filter((item) => 
                item.id.slice(1,-1) !== String(localStorage.getItem("Logined"))
            )
            const updatedList = loginedUser.concat({
                ...user,
                name: e.target.value,
            });
            let datas = "";
            updatedList.map((item) => {
                datas += JSON.stringify(item) + ",";
            });
            if (datas !== null && datas !== "null,") localStorage.setItem("list", "[" + datas.slice(0, -1) + "]");
            setInputs("");
        }
    };

    const addData2 = (e) => {
        if (e.key === "Enter") {
            setUser({
                ...user,
                intro: e.target.value,
            });
            
            const listArrays = JSON.parse(localStorage.getItem("list"));
            const loginedUser = listArrays.filter((item) => 
                item.id.slice(1,-1) !== String(localStorage.getItem("Logined"))
            )
            const updatedList = loginedUser.concat({
                ...user,
                intro: e.target.value,
            });
            let datas = "";
            updatedList.map((item) => {
                datas += JSON.stringify(item) + ",";
            });
            if (datas !== null && datas !== "null,") localStorage.setItem("list", "[" + datas.slice(0, -1) + "]");
            setInputs2("");
        }
    };

    return (
        <div className="bg-primary-darken text-bold text-black">
            <b className="text-grey-darkest">My Page</b>
            <div className="block">
                <div>
                    <p>----------</p><br/>
                    <p>Id : {user.id}{"\n"}</p><br/>
                    <p>Name : {user.name}{"\n"}</p><br/>
                        
                    <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-black hover:bg-teal"
                        value={inputs}
                        placeholder=" Insert Here ... "
                        onChange={onChange}
                        onKeyPress={addData}
                    />
                    </form>

                    <p>Intro : {user.intro}</p><br/>
                        
                    <form onSubmit={(e) => e.preventDefault()}>
                    <input
                        className="flex-no-shrink p-2 border-2 rounded text-teal border-teal hover:text-black hover:bg-teal"
                        value={inputs2}
                        placeholder=" Insert Here ... "
                        onChange={onChange2}
                        onKeyPress={addData2}
                    />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default my;
