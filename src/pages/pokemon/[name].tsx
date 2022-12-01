import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
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

      <>
        <h1 className="text-3xl font-bold underline">Pokemon By Name Page</h1>
        <div>
          <article>
            {error ? (
              <>Oh no, there was an error</>
            ) : router.isFallback || isLoading ? (
              <>Loading...</>
            ) : data ? (
              <>
                <h3>{data.species.name}</h3>
                <Image
                  src={data.sprites.front_shiny}
                  alt={data.species.name}
                  width={100}
                  height={100}
                />
              </>
            ) : null}
          </article>
        </div>
      </>
    </>
  )
}

export default PokemonByNamePage
