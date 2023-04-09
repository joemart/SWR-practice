import useSWR from "swr"

const fetcher = url => fetch(url).then(x=>x.json())
// export const usePosts = ()=> useSWR("https://jsonplaceholder.typicode.com/posts",fetcher)
export const usePosts = () => useSWR("https://jsonplaceholder.typicode.com/posts")
export const useComments = () => useSWR("https://jsonplaceholder.typicode.com/comments")
export const useAlbulms = () => useSWR("https://jsonplaceholder.typicode.com/albums")
export const usePhotos = () => useSWR("https://jsonplaceholder.typicode.com/photos")