import axios from "axios"

// constantes

const dataInicial= {
    array: [],
    offset: 0
}


// type

const GET_POKE_SUCCESS = "GET_POKE_SUCCESS";
const NEXT_POKE_SUCCESS = "NEXT_POKE_SUCCESS";


// reducer

export default function pokesReducer (state = dataInicial, action) {

    switch (action.type) {

        case GET_POKE_SUCCESS:
            return {...state, array: action.payload}

        case NEXT_POKE_SUCCESS:
            return {...state, array: action.payload.array, offset: action.payload.offset}

        default:
            return state
    }
}


// actions

export const getPokeAction = () => async (dispatch, getState) => {

    const {offset} = getState().pokemones;
   
    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`)
        dispatch({
            type: GET_POKE_SUCCESS,
            payload: res.data.results
        })
    } catch (error) {
        console.log(error)
    }
}


export const nextPokeAction = (num) => async (dispatch, getState) => {
    
    const {offset} = getState().pokemones;
    const next = offset + num;

    try {
        const res = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=${next}&limit=20`)
        dispatch({
            type: NEXT_POKE_SUCCESS,
            payload: {
                array: res.data.results,
                offset: next
            }
        })
    } catch (error) {
        console.log(error)
    }
}