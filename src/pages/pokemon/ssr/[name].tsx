import { getPokemonByName, pokemonApi } from "../../../lib/pokemonApi"

import { wrapper } from "../../../lib/store"
import Pokemon from "../[name]"

export default Pokemon

export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async (context) => {
    const name = context.params?.name
    if (typeof name === "string") {
      store.dispatch(getPokemonByName.initiate(name))
    }

    await Promise.all(store.dispatch(pokemonApi.util.getRunningQueriesThunk()))

    return {
      props: {},
    }
  }
)
