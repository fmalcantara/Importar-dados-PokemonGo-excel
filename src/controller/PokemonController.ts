import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { IdDTO, InputDTO } from "../model/pokemon";

export class PokemonController {
    constructor(
      private pokemonBusiness: PokemonBusiness
    ){}


  public getAllPokemon = async(req: Request, res:Response) =>{
      try {
        const numberPage: number = req.body.page;
        const result = await this.pokemonBusiness.getAllPokemons(numberPage)
        res.status(200).send(result)
      } 
      catch (error:any) {
        res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
      }
  }
  
  public getPokemonByName= async(req: Request, res:Response) =>{
    try {
      const name: string = req.params.name
      const result = await this.pokemonBusiness.getPokemonByName(name)
      res.status(200).send(result)
    } 
    catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage) 
    }  
  }

  public getPokemonByType = async(req: Request, res: Response)=>{
    try {
    const type: string = req.params.type
    const result = await this.pokemonBusiness.getPokemonByType(type)
    res.status(200).send(result)
    } 
    catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
    }
  }

  public getPokemonTwoTypes = async(req: Request, res: Response) =>{
    try {
      const input: InputDTO = {
        type1: req.body.type1,
        type2: req.body.type2
      }
      const result = await this.pokemonBusiness.getPokemonTwoTypes(input)
      res.status(200).send(result)
    } 
    catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)  
    }
  }

  public countAllPokemons=async(req: Request, res: Response):Promise<void>=>{
    try {
      const result = await this.pokemonBusiness.countAllPokemons()
      res.status(200).send(result)
    } 

    catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)  
    }
  }

  public deletePokemon=async(req: Request, res:Response)=>{
    try {
      const id: number= Number(req.params.id)
      
      await this.pokemonBusiness.deletePokemon(id)
      res.status(200).send({message: "Pokemon Deleted !"})        


    } catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)  
      
    }
  }

}