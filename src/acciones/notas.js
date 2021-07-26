import { db } from "../firebase/firebase-config";
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
    }
}

export const activarNota = (id, nota) => ({
    type: types.notesActive,
    payload: {
        id,
        ...nota
    }
});

// export const addNewNote = ( id, note ) => ({
//     type: types.notesAddNew,
//     payload: {
//         id, ...note
//     }
// })

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

        // dispatch( refreshNote( note.id, noteToFirestore ) );
        // Swal.fire('Saved', note.title, 'success');
    }
}

// export const refreshNote = ( id, note ) => ({
//     type: types.notesUpdated,
//     payload: {
//         id,
//         note: {
//             id,
//             ...note
//         }
//     }
// });


// export const startUploading = ( file ) => {
//     return async( dispatch, getState ) => {

//         const { active:activeNote } = getState().notes;

//         Swal.fire({
//             title: 'Uploading...',
//             text: 'Please wait...',
//             allowOutsideClick: false,
//             onBeforeOpen: () => {
//                 Swal.showLoading();
//             }
//         });

//         const fileUrl = await fileUpload( file );
//         activeNote.url = fileUrl;

//         dispatch( startSaveNote( activeNote ) )
        

//         Swal.close();
//     }
// }


// export const startDeleting = ( id ) => {
//     return async( dispatch, getState ) => {
         
//         const uid = getState().auth.uid;
//         await db.doc(`${ uid }/journal/notes/${ id }`).delete();

//         dispatch( deleteNote(id) );

//     }
// }

// export const deleteNote = (id) => ({
//     type: types.notesDelete,
//     payload: id
// });


// export const noteLogout = () => ({
//     type: types.notesLogoutCleaning
// });
