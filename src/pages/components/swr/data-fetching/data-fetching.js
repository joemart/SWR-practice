import useSWR, {SWRConfig} from "swr"
import {useComments} from "../_hooks/hooks"

const DataFetch = () =>{
    const {data} = useComments()
    return <>{data && data.slice(0,3).map(x=><div>{x.id}</div>)}</>
}

export default () =>{
    
    return <>
    <SWRConfig value={{
        fetcher: (url) => fetch(url).then(x=>x.json())
    }}>
        <DataFetch></DataFetch>
    </SWRConfig>
    </>
}