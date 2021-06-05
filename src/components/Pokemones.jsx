import React from "react"
import {useDispatch, useSelector} from "react-redux"
import { getPokeAction, nextPokeAction } from "../redux/pokesDucks"


export const Pokemones = () => {

    const dispatch = useDispatch();
    const pokemones = useSelector(store => store.pokemones.array);

    return (
        <div>
            list of pokemons
            <button onClick = {() => dispatch(getPokeAction())}>Get Pokemons</button>
            <button onClick = {() => dispatch(nextPokeAction(20))}>next</button>
        <ul>
            {
                pokemones.map(item => 
                <li key = {item.name}>{item.name}</li>)
            }
        </ul>
        </div>
    )
}


export default Pokemones