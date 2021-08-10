import { types } from "../types/types";

const estadoInicial = {
    notas: [],
    notaActiva: null
}



export const notasReducer = (state = estadoInicial, action) => {

    switch (action.type) {
        
        case types.notesActive:
            return {
                ...state,
                notaActiva: {
                    ...action.payload
                }
            }
        
        case  types.notesAddNew:
            return {
                ...state,
                notas: [ action.payload, ...state.notas ]
            }

        case types.notesLoad:
            return {
                ...state,
                notas: [ ...action.payload ]
            }
    
        case types.notesUpdated:
            return {
                ...state,
                notas: state.notas.map(
                    note => note.id === action.payload.id
                        ? action.payload.note
                        : note
                )
            }

        case types.notesDelete:
            return {
                ...state,
                notaActiva: null,
                notas: state.notas.filter( note => note.id !== action.payload )
            } 

        case types.notesLogoutCleaning:
            return {
                ...state,
                notaActiva: null,
                notas: []
            }

        default:
            return state
    }
}