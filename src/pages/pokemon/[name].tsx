import type { NextPage } from "next"
import Head from "next/head"
import { useRouter } from "next/router"
import { useGetPokemonByNameQuery } from "../../lib/pokemonApi"
import { skipToken } from "@reduxjs/toolkit/query"

type PageProps = {}

const PokemonByNamePage: NextPage<PageProps> = ({}) => {
  const router = useRouter()

  const name = router.query.name
  const result = useGetPokemonByNameQuery(
    typeof name === "string" ? name : skipToken,
    {
      // If the page is not yet generated, router.isFallback will be true
      // initially until getStaticProps() finishes running
      skip: router.isFallback,
    }
  )
  const { isLoading, error, data } = result

  return (
    <>
      <Head>
        <title>Page</title>
        <meta name="description" content="Next page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Pokemon By Name Page</h1>
        <div>
          <article>
            {error ? (
              <>Oh no, there was an error</>
            ) : router.isFallback || isLoading ? (
              <>Loading...</>
            ) : data ? (
              <>
                <h3>{data.species.name}</h3>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={data.sprites.front_shiny} alt={data.species.name} />
              </>
            ) : null}
          </article>
        </div>
      </main>
    </>
  )
}

export default PokemonByNamePage
