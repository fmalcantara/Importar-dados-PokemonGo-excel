import express from "express"
import { PokemonController } from "../controller/PokemonController";
import { PokemonDatabase } from "../data/PokemonDatabase";
import { PokemonBusiness } from "../business/PokemonBusiness";

export const pokemonRouter = express.Router()

const pokemonDatabase= new PokemonDatabase()
const pokemonBusiness = new PokemonBusiness(pokemonDatabase)
const pokemonController = new PokemonController(pokemonBusiness)

pokemonRouter.get('/allpokemon',(req,res) => pokemonController.getAllPokemon (req,res))
pokemonRouter.get('/:name',(req,res) => pokemonController.getPokemonByName(req,res))
pokemonRouter.get('/types/:type',(req,res) => pokemonController.getPokemonByType(req,res))
pokemonRouter.get('/2type/pokemon',(req,res) => pokemonController.getPokemonTwoTypes(req,res))
pokemonRouter.get('/count',(req,res) => pokemonController.countAllPokemons(req,res))

