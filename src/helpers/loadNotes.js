import { db } from "../firebase/firebase-config"

export const loadNotas = async (uid) => {
    
    const notasSnap = await  db.collection(`${uid}/diario/notas`).get();
    const notas = [];
    
    notasSnap.forEach(snapHijo => {
        notas.push({
            id:snapHijo.id,
            ...snapHijo.data()
        })
    });


    return notas;
}


//react-diario