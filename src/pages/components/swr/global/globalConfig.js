import useSWR, {SWRConfig} from "swr"
import {usePosts, useComments, useAlbulms, usePhotos} from "./hook/hooks"

function Calls () {
    const {data, error} = usePosts()
    const comments = useComments()
    const albums = useAlbulms()
    
    return <> {data && data.slice(0,3).map(x=><div>{x.id}</div>)}
    {comments.data && comments.data.slice(0,3).map(x=><div>{x.id}</div>)}
    {albums.data && albums.data.slice(0,3).map(x=><div>{x.id}</div>)}
    </>
}

export default ( ) =>{

    return (
        <SWRConfig value={{refreshInterval: 3000,
            fetcher: (resource) => fetch(resource ).then(res => res.json())
        }}>
            <Calls></Calls>
        </SWRConfig>
    )
}