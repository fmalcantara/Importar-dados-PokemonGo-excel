import { PokemonDatabase } from "../data/PokemonDatabase"
import { CustomError } from "../error/cusstomError";

const pokemonDatabase = new PokemonDatabase()

export class PokemonBusiness {
  public getAllPokemons = async () => {
    try {
      const result = await pokemonDatabase.getAllPokemon()
      return result
    } catch (error:any) {
      throw new CustomError(400, error.message);
    }
  }
}