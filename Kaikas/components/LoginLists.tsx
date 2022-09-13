import React from "react";

const LoginLists = ({ loginList, setLoginList }) => {
    return (
        <div className="bg-primary-darken text-bold text-black">
            <b className="text-grey-darkest">Login list</b>
            <div className="block">
                {loginList.map((loginUser, index) =>{
                    return (
                        <div key = {index}>
                            <p>----------</p><br/>
                            <p>Id : {loginUser.id}{"\n"}</p><br/>
                            <p>Name : {loginUser.name}{"\n"}</p><br/>
                            <p>Intro : {loginUser.intro}</p><br/>
                        </div>
                    );
                })}
            </div>
        </div>
    );
    };

export default LoginLists;
