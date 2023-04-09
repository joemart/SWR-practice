import useSWR from "swr"
import { useState } from "react"

const Page =  ({data,error,loading}) => {


    // const {previous, next} = data

    if (error) return <>ERROR</>
    if (loading) return <> Stay awhile</>

    // return data.then(x=>x.results.map( (item,i)=><div key={i}> {item.name}</div>))

    return <>
    {data && data.results?.map( (item,i)=><div key={i}> {item.name}</div>)}
    </>
}

    

export default () =>{

    const [pageIndex, setPageIndex] = useState(1)
    const SupplementalFunc = temp => setPageIndex(() => temp + pageIndex)

    const fetcher =  (...args) =>   fetch(...args).then(res=>res.json())
    const {data,loading, error} = useSWR(`https://swapi.dev/api/planets?page=${pageIndex}`, fetcher)
 
    return <>
    <h1>Pagination</h1>

    {data && <button onClick={()=>SupplementalFunc(-1)} disabled={!data.previous} >Prev</button>}
    {data && <button onClick={()=>SupplementalFunc(1)} disabled={!data.next}>Next</button>}

    <Page data={data} loading ={loading} error={error} ></Page>
    </>
}