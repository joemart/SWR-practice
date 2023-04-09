import useSWR from "swr"

export default () =>{

    const fetcher = (...args) => fetch(...args).then(x=>x.json())
    const {data, error } = useSWR("https://v2.jokeapi.dev/joke/any", fetcher)

}