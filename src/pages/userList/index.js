import React, {useEffect} from 'react';

import useFetch from "../../hooks/useFetch";
import Loading from "../../components/loading";
import User from "../../components/user";


const UserList = ()=>{
    const apiUrl = `users`
    const [{response, isLoading, error}, doFetch] = useFetch(apiUrl)

    useEffect(()=>{
        doFetch()
    },[doFetch])
    console.log(response);
    return(
        <div>
            {isLoading && <Loading/>}
            {error && <p>error</p>}
            <h1>UserList</h1>
            {
                response && response.map((user) =><User key={user.id} user={user}/>)
            }
        </div>
    )


}

export default UserList;
