import {useEffect, useState} from "react";
import {getuseraxios} from "../../servis/users.servis";
import User from "../user/User";

export default function Users() {

 let [users,setUsers]= useState([])

  useEffect(()=>{
    getuseraxios().then(({data}) => setUsers([...data]));

  },[])

  return (
    <div>
      {
        users.map((itemUsers) => <User key={itemUsers.id}  itemUser={itemUsers}/>)
        }

    </div>
  );
}