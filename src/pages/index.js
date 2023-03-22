import {myFetch} from "../../hooks/useSWR"

export default function Home() {

  const {data, error, isLoading} = myFetch()  
  console.log(myFetch())

  return (
    <>
    
    {!error ? isLoading ? "Loading" : <> {data.setup ? <>{data.setup} <div>{data.delivery}</div> </> : data.joke} </> : "Error!"}

    </>
  )
}
