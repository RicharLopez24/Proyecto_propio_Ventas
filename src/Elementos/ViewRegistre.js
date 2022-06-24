//import { child, get, set } from 'firebase/database';
import { addDoc, collection, getDocs, query } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import React, { useCallback, useEffect, useState } from 'react'
import { database, db, storage } from '../Firebase/Firebase';
//import File from './File';
import ProductoEdicion from './ProductoEdicion';
import './Registro.css'

function ViewRegistre() {

    const [valor, setValor] = useState('Categoria...')
    const dbProducto = database
    const [archivoUrl, setArchivoUrl] = useState("");

    const archivoPhoto = async (e) => {
        const archivo = e.target.files[0];
        const referencia = ref(storage, 'imagenes/' + archivo.name)

        uploadBytes(referencia, archivo).then((snapshot) => {
            console.log('Uploaded a blob or file!');
            getDownloadURL(referencia)
                .then((url) => {

                    console.log(url)
                    setArchivoUrl(url)

                })
                .catch((error) => {

                    console.log('el error es', error)
                });
        });

    }


    const registro = async (e) => {
        e.preventDefault()

        const producto = e.target.producto.value;
        const codigo = e.target.barras.value;
        const cantidad = e.target.cantidad.value;
        const precio = e.target.precio.value;
        const imagen = e.target.img.value;

        console.log(producto, codigo, cantidad, precio, valor, archivoUrl)

        if (producto === '' ||
            codigo === '' ||
            cantidad === '' ||
            precio === '' ||
            valor === 'Categoria...' ||
            imagen === '') {
            console.log('por favor ingresa los datos')



            alert('por favor ingresa los datos')
            console.log(dbProducto)
        } else {

            try {
                const docRef = addDoc(collection(db, 'Tienda/'), {

                    nombreProdcuto: producto,
                    cantidad: cantidad,
                    precio: precio,
                    codigo: codigo,
                    img: archivoUrl,
                    categoria: valor,
                });
                console.log("Document written with ID: ", (await docRef).id);

                alert('productos registrado')
                window.location = "/stock"
            } catch (e) {
                console.error("Error adding document: ", e);

            }
        }
    }

    const [dataList, setDataList] = useState([]);
    const fetchMyAPI = useCallback(async () => {
        const q = query(collection(db, "Tienda/"));
        const dataList = [];



        //asignamos los valores a data list de useState
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            dataList.push({ ...doc.data() });
        });
        setDataList(dataList);
    }, [])


    useEffect(() => {

        fetchMyAPI()
    }, [fetchMyAPI])
    return (
        <div className='vistas'>
            <div >
                <h2>Nuevos  productos </h2>

                <form className='BoxTextRegister' onSubmit={registro}>

                    <label>
                        Nombre del producto:
                        <input type='text'
                            className='inputs'
                            placeholder="Producto"
                            name="producto"></input>
                    </label>

                    <label>
                        codigo del producto:
                        <input type='text'
                            className='inputs'
                            placeholder="Codigo barras"
                            name="barras"></input>
                    </label>

                    <label>
                        cantidad del producto:
                        <input type='number'
                            className='inputs'
                            placeholder="Cantidad"
                            name="cantidad"></input>
                    </label>

                    <label>
                        precio del producto
                        <input type='number'
                            className='inputs'
                            placeholder="Precio"
                            name="precio"></input>
                    </label>
                    <label>
                        categoria del producto
                        <select onChange={value => setValor(value.target.value)}
                            value={valor}
                            className="select"
                        >
                            <option value='Categoria...' className='option'>Categoria...</option>
                            <option value='Lacteos' className='option'>Lacteos</option>
                            <option value='Refrescos' className='option'>Refrescos</option>
                            <option value='Granel Canino' className='option'>Granel Canino</option>
                            <option value='Granel gato' className='option'>Granel gato</option>
                            <option value='Crema' className='option'>Crema</option>
                            {
                                // TODO: agregar mas opciones para los productosde una tienda
                            }

                        </select>
                    </label>
                    <label>
                        Imagen producto:
                        <input type='file'
                            className='input-img'
                            accept='image/png,.jpg,.jpeg'
                            onChange={archivoPhoto}
                            name='img'
                        ></input>
                    </label>
                    <button className='Color_Button' >
                        Registra producto
                    </button>
                </form>


            </div>
            <div>
                <div>
                    <h1>edicion de productos </h1>
                </div>

                <div className='targetProductos'>

                    {dataList ? dataList.map((cont, index) => //hace mapeo de los datos en cont que sera el contenido
                        <ProductoEdicion cont={cont} key={index} />) : ''}
                </div>
            </div>
        </div>
    )
}

export default ViewRegistre
