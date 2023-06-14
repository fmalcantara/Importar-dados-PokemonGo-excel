import { InputDTO } from "../model/pokemon"

export interface PokemonRepository {
  getAllPokemon (offset: number):Promise<number[]>
  getPokemonByName(name: string):Promise<string[]>
  getPokemonByType(type: string):Promise<string[]>  
  getPokemonTwoTypes (input: InputDTO):Promise<string[]>
  countAllPokemons():Promise<any>
  }
  

