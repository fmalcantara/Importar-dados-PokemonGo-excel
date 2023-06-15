import { InputDTO } from "../model/pokemon"

export interface PokemonRepository {
  getAllPokemon (page: number):Promise<number[]>
  getPokemonByName(name: string):Promise<string[]>
  getPokemonByType(type: string):Promise<string[]>  
  getPokemonTwoTypes (input: InputDTO):Promise<string[]>
  countAllPokemons():Promise<any>
  deletePokemon (id: number):Promise<number>
  }
  

