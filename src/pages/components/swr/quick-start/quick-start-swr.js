import useSWR from "swr"
import useComments from "../_hooks/hooks"



export default () =>{


    const {data, error} = useComments()

    if(error) return <>Error</>

    return <>
    {data && data.map(x=><div>
        <div>{x.postId}</div>
        <div>{x.id}</div>
        <div>{x.name}</div>
        <div>{x.email}</div>
        <div>{x.body}</div>
        </div>)}
    </>
}