import { Request, Response } from "express";
import { PokemonBusiness } from "../business/PokemonBusiness";
import { CustomError } from "../error/cusstomError";
import { InputDTO } from "../model/pokemon";

const pokemonBusiness = new PokemonBusiness

export class PokemonController {
  
  public getAllPokemon = async(req: Request, res:Response) =>{
      try {
        const page: number = req.body.page;
        const result = await pokemonBusiness.getAllPokemons(page)
        res.status(200).send(result)
      } 
      catch (error:any) {
        res.status(error.statusCode || 400).send(error.message || error.sqlMessage)
      }
  }
  
  public getPokemonByName= async(req: Request, res:Response) =>{
    try {
      const name: string = req.params.name
      const result = await pokemonBusiness.getPokemonByName(name)
      res.status(200).send(result)
    } 
    catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage) 
    }  
  }

  public getPokemonByType = async(req: Request, res: Response)=>{
    try {
    const type: string = req.params.type
    const result = await pokemonBusiness.getPokemonByType(type)
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
      const result = await pokemonBusiness.getPokemonTwoTypes(input)
      res.status(200).send(result)
    } 
    catch (error:any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)  
    }
  }

  public countAllPokemons=async(req: Request, res: Response):Promise<void>=>{
    try {
      const result = await pokemonBusiness.countAllPokemons()
      res.status(200).send(result)
      console.log(result);
      
    } 

    catch (error: any) {
      res.status(error.statusCode || 400).send(error.message || error.sqlMessage)  
    }
  }

}