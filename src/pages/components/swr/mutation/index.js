import useSWR, {useSWRConfig} from "swr"


export default () =>{
    
    const {mutate} = useSWRConfig()
    const fetcher = (...args) => fetch(...args).then(res=>res.json())
    const {data, error} = useSWR("/api/comments",fetcher)
    
    const fetchPOST = async () =>{
         await fetcher("/api/comments", {
            method: "POST",
            body: JSON.stringify({data:"This is my comment from Home"}),
            headers: {"Content-Type":"application/json"}
        }).then(()=>{
            mutate("/api/comments")
        })
    }
        return <> <button onClick={fetchPOST}>Post data</button>
    
        {data && data.data.map((x,i)=><div key={i}>{i+1} - {x.data}</div>)}</>
}