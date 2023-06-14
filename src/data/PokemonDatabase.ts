import { InputDTO } from "../model/pokemon";
import { BaseDatabase } from "./BaseDatabase";

export class PokemonDatabase extends BaseDatabase{
  private table = 'Pokemon-Go_esse'

    public getAllPokemon = async(offset: number):Promise<number[]>=>{
      const result = await PokemonDatabase.connection(this.table)
      .offset(offset)
      .limit(30)
      return result
    }


    public getPokemonByName = async(name: string):Promise<string[]>=>{
      const result = await PokemonDatabase.connection(this.table)
      .where('Name','like', `%${name}%`)
      return result
    }


    public getPokemonByType = async(type: string):Promise<string[]>=>{
      const result = await PokemonDatabase.connection(this.table)
      .where('Type_1', 'like',`%${type}%`)
      .orWhere('Type_2', 'like', `%${type}%`)
      return result
    }

    public getPokemonTwoTypes = async(input: InputDTO):Promise<string[]>=>{
      const result = await PokemonDatabase.connection(this.table)
      .where({Type_1: input.type1 , Type_2:input.type2})
      .orWhere({Type_1: input.type2, Type_2:input.type1})
      return result
    }

    public countAllPokemons = async():Promise<any> =>{
      const result = await PokemonDatabase.connection(this.table)
      .count('*',{as: 'At the moment there is a total of:'})
      return result[0]
    }

}