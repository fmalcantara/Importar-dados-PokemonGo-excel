import { BaseDatabase } from "./baseDatabase";

export class PokemonDatabase extends BaseDatabase{
  private table = 'Pokemon-Go_esse'

  public getAllPokemon = async()=>{
    const result = await PokemonDatabase.connection(this.table)
    .limit(100)
    return result
  }


  public getPokemonByName = async(name: string)=>{
    const result = await PokemonDatabase.connection(this.table)
    .where('Name','like', `%${name}`)
    return result[0]
}


public getPokemonByType = async(type: string)=>{
  const result = await PokemonDatabase.connection(this.table)
  .where({Type_1: type})
  .orWhere({Type_2: type})
  return result
}

public getPokemonTwoTypes = async(type1: string, type2: string)=>{
  const result = await PokemonDatabase.connection(this.table)
  .where({Type_1: type1})
  .orWhere({Type_2: type2})
  return result
}

}