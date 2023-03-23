import {myFetch} from "../../hooks/useSWR"

export async function getStaticProps () {
  // console.log("In get static props")
  return fetch("https://aws.random.cat/meow?ref=apilist.fun").then(x => x.json()).then(res=> {
    console.log(res.file)
    return {props: {data: 1, res:res.file}}
  })
   

}

export default function Home(props) {
  console.log("In home")
  const {data, error, isLoading} = myFetch()  
  // console.log(myFetch())
 
  // console.log(props)
  return (
    <>
    The cat image is generated in Static props.
    <br />
    <img src={props.res} alt="" />
    
    <div>
      The joke is generated with SWR.
      </div>
    {!error ? isLoading ? "Loading" : <> {data.setup ? <>{data.setup} <div>{data.delivery}</div> </> : data.joke} </> : "Error!"}

    
    
    </>
  )
}
