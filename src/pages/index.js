import {myFetch} from "../../hooks/useSWR"



export default function Home() {

  const {data, error, isLoading} = myFetch()  
  // console.log(myFetch())

  if(error) return <div>Error</div>
  if(isLoading) return <>Loading</>
  

  return (
    <>
    {data.setup ? <> {data.setup} {data.deliver} </> : data.joke}
    {/* {!error ? isLoading ? "Loading" : <> {data.setup ? <>{data.setup} <div>{data.delivery}</div> </> : data.joke} </> : "Error!"} */}

    </>
  )
} 
