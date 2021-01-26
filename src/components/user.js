import React from 'react'
import {NavLink, Redirect} from "react-router-dom";


const User = ({user: {username, id}}) => {

    return (
        <div className=''>
            <div className=''>
                {username}
                <NavLink to={`/posts/${id}`}>
                    Post
                </NavLink>
            </div>
        </div>
    )
}

export default User;
