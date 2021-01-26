import {useEffect, useState, useCallback} from "react";

export default (url) => {
    const baseUrl = 'https://jsonplaceholder.typicode.com/'
    const [isLoading, setIsLoading] =  useState(false)
    const [response, setResponse] = useState(null)
    const [error, setError] = useState(null)
    const [options, setOptions] = useState({})



    const doFetch = useCallback((options = {}) => {
        setOptions(options)
        setIsLoading(true)
    },[])


    useEffect(() => {
        const requestOptions = {
            ...options,
        }
         // console.log('requestOptions',requestOptions,baseUrl + url);

        if (!isLoading) {
            return
        }
        fetch(baseUrl + url, requestOptions)
            .then(response => response.json())
            .then(res => {
                 // console.log('success', res);
                setResponse(res)
                setIsLoading(false)
            })
            .catch((err) => {
                // console.log('err', err);
                setIsLoading(false)
                setError( err )
            })
    },[isLoading,url,options])

    return [{isLoading, response, error}, doFetch]
}
