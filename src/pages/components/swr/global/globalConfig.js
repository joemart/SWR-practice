import useSWR, {SWRConfig, useSWRConfig} from "swr"
import {usePosts, useComments, useAlbulms, usePhotos} from "../_hooks/hooks"

function Calls () {

    const config = useSWRConfig()
    console.log(config)
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
            fetcher: (resource) => fetch(resource ).then(res => res.json()),
            dedupingInterval: 100
        }}>
            <SWRConfig value={parent => ({
                refreshInterval: 3000,
                dedupingInterval: parent.dedupingInterval *4
        })}>

            <Calls></Calls>
            </SWRConfig>
        </SWRConfig>
    )
}