import useSWR from "swr"




export default () =>{
    const fetcher = async () => await fetch(URL).then(res =>  res.json())
    
    const URL = "https://v2.jokeapi.dev/joke/any"
    const {data, error} = useSWR(URL, fetcher)
    

    return <>{data && data.setup} - {data && data.delivery}</>
}