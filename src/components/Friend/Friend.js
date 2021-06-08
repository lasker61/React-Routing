import React from 'react';
import { Link } from 'react-router-dom';

const Friend = (props) => {
    const {name,email,id}=props.friend;
    const friendStyle={
        margin :'20px',
        border :"1px solid grey",
        borderRadius:'25px',
        padding:'5px'

    }
    return (
        <div style={friendStyle}>
            <h4>Name:{name}</h4>
            <h5>Email:{email}</h5>
            <Link to={`/friendDetail/${id}`}>Show details</Link>
        </div>
    );
};

export default Friend;