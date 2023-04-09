import { useState } from "react"
import useSWR, { useSWRConfig } from "swr"


export default () =>{

    // const {mutate} = useSWRConfig()
    const [comments, setComments] = useState([])
    const comment = "This is my comment"

    const fetcher = (...args) => fetch(...args).then(res=>res.json())
    const {data, error, mutate} = useSWR("/api/comments",fetcher, {revalidateOnFocus:false})
    
    const fetchGET = async () =>{
        const temp = await fetch("/api/comments", {
            method:"GET"
        })
        const response = await temp.json()
        setComments(response.data)
    }

    const fetchPOST = async () =>{
        const temp = await fetch("/api/comments",{
            method:"POST",
            body: JSON.stringify({comment}),
            headers: {"Content-Type":"application/json"}
        })
        // mutate("/api/comments")
        mutate({...data, comment})
        
        
    }

    
    return <div>
        <button onClick={fetchGET}>GET data</button>
        <br />
        <button onClick={fetchPOST}>POST Data</button>

        {data && data.data.map((x,i)=><div key={i}>{i+1} - {x.data}</div>)}

    </div>
}