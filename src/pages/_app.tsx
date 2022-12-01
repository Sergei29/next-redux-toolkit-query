import type { AppProps } from "next/app"
import "@/styles/globals.css"

import Layout from "@/Layout"
import { wrapper } from "@/lib"

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default wrapper.withRedux(App)
