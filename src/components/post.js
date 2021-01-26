import React from 'react'
import {NavLink, Redirect} from "react-router-dom";


const Post = ({post: {title, id}}) => {

    return (
        <div className=''>
            <div className=''>
                {title}
            </div>
        </div>
    )
}

export default Post;
