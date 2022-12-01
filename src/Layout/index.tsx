import React from "react"
import Link from "next/link"

type Props = {
  children: React.ReactNode
}

const Layout = ({ children }: Props): JSX.Element => {
  return (
    <>
      <header>
        <nav>
          <ul className="flex gap-x-2 px-4 py-2 justify-center">
            <li className="px-1 hover:bg-slate-400 hover:rounded-sm">
              <Link href="/">Homepage</Link>
            </li>
            <li className="px-1 hover:bg-slate-400 hover:rounded-sm">
              <Link href="/pokemon/bulbasaur">Bulbasar dynamic</Link>
            </li>
            <li className="px-1 hover:bg-slate-400 hover:rounded-sm">
              <Link href="/pokemon/ssr/bulbasaur">Bulbasar SSR</Link>
            </li>
            <li className="px-1 hover:bg-slate-400 hover:rounded-sm">
              <Link href="/pokemon/ssg/bulbasaur">Bulbasar SSG</Link>
            </li>
            <li className="px-1 hover:bg-slate-400 hover:rounded-sm">
              <Link href="/pokemon/beedrill">Beedrill dynamic</Link>{" "}
            </li>
            <li className="px-1 hover:bg-slate-400 hover:rounded-sm">
              <Link href="/pokemon/ssr/beedrill">Beedrill SSR</Link>
            </li>
            <li className="px-1 hover:bg-slate-400 hover:rounded-sm">
              <Link href="/pokemon/ssg/beedrill"> Beedrill fallback SSG</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container mx-auto px-4 pt-4">{children}</main>
    </>
  )
}

export default Layout
