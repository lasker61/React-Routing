import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDetail = () => {
    const {id}=useParams();
    const[friend,setFriend]=useState({});
    useEffect(()=>{
        const url=`https://jsonplaceholder.typicode.com/users/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data));
    },[])
    return (
        <div>
            <h1>{friend.name}</h1>
            <p>Email:{friend.email}</p>
            <p>City:{friend.city}</p>
            <p>Website:{friend.website}</p>
            <p>Phone:{friend.phone}</p>
        </div>
    );
};

export default FriendDetail;