import type { AppProps } from "next/app"
import "../styles/globals.css"

import { wrapper } from "@/lib"

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />
}

export default wrapper.withRedux(App)
