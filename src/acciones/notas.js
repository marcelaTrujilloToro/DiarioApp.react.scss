import Swal from 'sweetalert2'
import { db } from "../firebase/firebase-config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNotas } from "../helpers/loadNotes";
import {types} from '../types/types';

export  const startNewNote= () => {
    return async (dispatch, getState) => {
        
        const {uid} = getState().auth;

        const nuevaNota = {
            titulo: '',
            cuerpo: '',
            fecha: new Date().getTime()
        }

        const doc = await db.collection(`${uid}/diario/notas`).add(nuevaNota);
            
        dispatch(activarNota(doc.id, nuevaNota));
        dispatch(addNewNote(doc.id, nuevaNota));
    }
}

export const activarNota = (id, nota) => ({
    type: types.notesActive,
    payload: {
        id,
        ...nota
    }
});

export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
})

export const iniciarCargaNotas = (uid) => {
    return async(dispatch) => {
        const notas = await loadNotas(uid);
        dispatch(setNotas(notas));
    }
}


export const setNotas = (notas) => ({
    type: types.notesLoad,
    payload: notas
});


export const guardarNota = ( note ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        if ( !note.url ){
            delete note.url;
        }

        const noteToFirestore = { ...note };
        delete noteToFirestore.id;

        await db.doc(`${ uid }/diario/notas/${ note.id }`).update( noteToFirestore );

        dispatch( refreshNote( note.id, noteToFirestore ) );
        Swal.fire('Guardada', note.title, 'success');
    }
}

export const refreshNote = ( id, note ) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});


export const startUploading = ( file ) => {
    return async( dispatch, getState ) => {

        const { notaActiva:activeNote } = getState().notas;

        Swal.fire({
            title: 'Cargando...',
            text: 'Espere por favor...',
            allowOutsideClick: false,
            onBeforeOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload( file );
       
        activeNote.url = fileUrl;

        dispatch( guardarNota( activeNote ) )
        

        Swal.close();
    }
}


export const startDeleting = ( id ) => {
    return async( dispatch, getState ) => {
         
        const uid = getState().auth.uid;
        await db.doc(`${ uid }/diario/notas/${ id }`).delete();

        dispatch( deleteNote(id) );

    }
}

export const deleteNote = (id) => ({
    type: types.notesDelete,
    payload: id
});


export const noteLogout = () => ({
    type: types.notesLogoutCleaning
});


//diario-app-react