import useSWR from "swr"

const fetcher = async (myURL) =>{
    // const URL = "https://v2.jokeapi.dev/joke/any"
    return await fetch(myURL).then(res => {
        // console.log(res.json())
        return res.json()})
}

export const myFetch = () =>{
     return useSWR('https://v2.jokeapi.dev/joke/any', fetcher)  //key will be transferred as an argument to "fetcher"  
}