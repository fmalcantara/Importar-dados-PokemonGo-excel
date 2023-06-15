import { CustomError } from "../error/cusstomError";
import { InputDTO } from "../model/pokemon";
import { PokemonRepository } from "./PokemonRepository";


export class PokemonBusiness {
    
  constructor(
    private pokemonDatabase: PokemonRepository,
  ){}



  public getAllPokemons = async (numberPage: number) => {
      try {
        if(!numberPage || numberPage <= 0){
          numberPage = 1;
        }
        const size = 30
        const page = size * (Number(numberPage) - 1)
        const result = await this.pokemonDatabase.getAllPokemon(page)
        return result
      } catch (error:any) {
        throw new CustomError(error.statusCode, error.message);
      }
    }

  public getPokemonByName = async(name: string)=>{
      try {
        if(!name){
          throw new Error("Name not found!!"); 
        }

        const result = await this.pokemonDatabase.getPokemonByName(name)
        if(result === undefined){
          throw new Error("This pokemon does not exist!!"); 
        }
        return result

      } catch (error:any) {
        throw new CustomError(error.statusCode, error.message);   
      }
  }

  public getPokemonByType = async(type: string)=>{
      try {
        if(!type){
          throw new Error("This pokemon was not found. You must enter a valid type! "); 
        }

        const result = await this.pokemonDatabase.getPokemonByType(type)
        
        if(result === undefined){
          throw new Error("Non-existent type");
        }

        return result
      } 
      catch (error:any) {
        throw new CustomError(error.statusCode, error.message);
      }
  }

  public getPokemonTwoTypes = async(input: InputDTO) =>{
      try {
        const {type1, type2} = input
        if(!type1){
          throw new Error("Type does not exist, please enter a valid type ");  
        }

        if(!type2){
          throw new Error("Type does not exist, please enter a valid type");  
        }

        const result = await this.pokemonDatabase.getPokemonTwoTypes(input)
        return result
      } 
      catch (error: any) {
        throw new CustomError(error.statusCode, error.message);
      }    
  }


  public countAllPokemons=async():Promise<any>=>{
    try {
      const result = await this.pokemonDatabase.countAllPokemons()
      console.log(result)
      return result
    } 
    catch (error:any) {
      throw new CustomError(error.statusCode, error.message);
      }
    
    
    
    
  }





}