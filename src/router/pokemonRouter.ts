import express from "express"
import { PokemonController } from "../controller/PokemonController";

const pokemonController = new PokemonController();

export const pokemonRouter = express.Router()

pokemonRouter.get('/allpokemon',pokemonController.getAllPokemon)
pokemonRouter.get('/:name',pokemonController.getPokemonByName)
pokemonRouter.get('/types/:type',pokemonController.getPokemonByType)
pokemonRouter.get('/2type/pokemon',pokemonController.getPokemonTwoTypes)
pokemonRouter.get('/count',pokemonController.countAllPokemons)

