import {  ref, uploadBytes } from 'firebase/storage';
import React, { useEffect } from 'react'
import { db, storage } from '../Firebase/Firebase';
import { collection, addDoc } from "firebase/firestore";

function File({ cont }) {
    //OBTENIENDO LA IMAGEN
    // const [arc, setArc] = useState('')

    const changeImagen = async (e) => {
        const archivo = e.target.files[0]


        const referencia = ref(storage, 'imagenes/' + archivo.name)
        uploadBytes(referencia, archivo).then((snapshot) => {
            console.log('Uploaded a blob or file!');
        });
        // await archivPath.put(archivo)
        // console.log('archivo cargado...', archivo.name)

        console.log(referencia)
       /* getDownloadURL(referencia)
            .then((url) => {
                // `url` is the download URL for 'images/stars.jpg'

                // This can be downloaded directly:

                const xhr = new XMLHttpRequest();
                xhr.responseType = 'blob';
                xhr.onload = (event) => {
                    const blob = xhr.response;
                };
                xhr.open('GET', url);
                xhr.send();

                // Or inserted into an <img> element
                const img = document.getElementById('myimg');
                console.log('ref', img)
                img.setAttribute('src', url);

            })
            .catch((error) => {
                // Handle any errors
                console.log('el error es:', error)
            });*/
        try {
            const docRef = addDoc(collection(db, "Productos"), {
                producto: cont.producto,
                cantidad: cont.cantidad,
                precio: cont.precio,
            });
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }

    }
    useEffect(() => {

        console.log(db)




    })
    return (
        <div>
            <label>
                Imagen producto:
                <input type='file'
                    className=''
                    id="img"
                    accept='image/png,.jpg,.jpeg'
                    onChange={changeImagen}></input>
            </label>
        </div>
    )
}

export default File