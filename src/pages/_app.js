import { SWRConfig } from "swr"

export default function App({ Component, pageProps }) {
  return (
  <>

  <SWRConfig value={{provider: () => new Map()}}>
    <Component {...pageProps} />
  </SWRConfig>
  
  </>
  )
}
