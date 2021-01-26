import React, {useEffect} from 'react';

import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading";
 import Post from "../../components/post";


const PostList = ({match: {params}})=>{
    console.log(params);
    const apiUrl = `users/${params.id}/posts`
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

    useEffect(()=>{
        doFetch()
    },[doFetch])
    console.log(response);
    return(
        <div>
            {isLoading && <Loading/>}
            {error && <p>error</p>}
            <h1>PostList</h1>
            {
                 response && response.map((post) =><Post key={post.id} post={post}/>)
            }
        </div>
    )


}

export default PostList;
