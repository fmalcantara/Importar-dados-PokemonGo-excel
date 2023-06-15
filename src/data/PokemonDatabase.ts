import { CustomError } from "../error/cusstomError";
import { InputDTO } from "../model/pokemon";
import { BaseDatabase } from "./BaseDatabase";

export class PokemonDatabase extends BaseDatabase implements PokemonDatabase{
  private table = 'Pokemon-Go_esse'

    public getAllPokemon = async(page: number):Promise<number[]>=>{
      try {
        const result = await PokemonDatabase.connection(this.table)
          .offset(page)
          .limit(30)
          return result
      } 
      catch (error:any) {
        throw new CustomError(400, error.message);
      }
    }


    public getPokemonByName = async(name: string):Promise<string[]>=>{
      try {
        const result = await PokemonDatabase.connection(this.table)
          .where('Name','like', `%${name}%`)
           return result
      } 
      catch (error:any) {
        throw new CustomError(400, error.message);
      }
    }


    public getPokemonByType = async(type: string):Promise<string[]>=>{
      try {
          const result = await PokemonDatabase.connection(this.table)
          .where('Type_1', 'like',`%${type}%`)
          .orWhere('Type_2', 'like', `%${type}%`)
          return result
      } 
      catch (error:any) {
        throw new CustomError(400, error.message);
      }
    }

    public getPokemonTwoTypes = async(input: InputDTO):Promise<string[]>=>{
      try {
        const result = await PokemonDatabase.connection(this.table)
          .where({Type_1: input.type1 , Type_2:input.type2})
          .orWhere({Type_1: input.type2, Type_2:input.type1})
          return result
      } 
      catch (error:any) {
        throw new CustomError(400, error.message);
      }
    }

    public countAllPokemons = async():Promise<any> =>{
      try {
        const result = await PokemonDatabase.connection(this.table)
        .count('*',{as: `At the moment there is a total of:` })
        return result[0]
      } 
      catch (error:any) {
        throw new CustomError(400, error.message);  
      } 
    }

    public deletePokemon=async(id: number)=>{
      try {
        const result = await PokemonDatabase.connection(this.table)
        .delete()
        .where({Id: id})
        return result
      } 
      catch (error:any) {
        throw new CustomError(400, error.message);    
      }
    }

    public findPokemonById=async(id: number):Promise<string[]>=>{
      try {
        const result = await PokemonDatabase.connection(this.table)
        .where('Id',id)
        return result
      } catch (error:any) {
        throw new CustomError(400, error.message);    
        
      }
    }

      
  }