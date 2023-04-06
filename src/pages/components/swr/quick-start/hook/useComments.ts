import useSWR from "swr"

const fetcher = url => fetch(url).then(x=>x.json())
export default () => useSWR("https://jsonplaceholder.typicode.com/comments", fetcher)
