import useSWR from "swr"

const fetcher = async () =>{
    const URL = "https://v2.jokeapi.dev/joke/any"
    return await fetch(URL).then(res => {
        console.log(res.json())
        return res.json()})
}

export default () =>{
    const {data, error} = useSWR('dashboard', fetcher)
    // {data ? data.map(x => console.log(x)) : "?"}
    // return data.id
    return <>hello</>
}