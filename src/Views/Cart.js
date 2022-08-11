import { collection, deleteDoc, deleteField, doc, FieldValue, getDocs, query, updateDoc } from 'firebase/firestore';
import React, { useCallback, useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { db } from '../Firebase/Firebase';

function Cart() {
    const fetchMyAPI = useCallback(async () => {
        const q = query(collection(db, 'Tienda/cart/auxi/1/123'));
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


    /**
     * registro de productos para el carrito
     */
    const [cont, setCont] = useState(0)
    const prueba = async () => {
        console.log(db)

        console.log(dataList)
        const collectionRef = collection(db,'Tienda/cart/auxi/1/');
        const query = collectionRef.orderBy('__name__')
        deleteQueryBatch(db, query).catch();

    }



    const [dataList, setDataList] = useState([]);
    useEffect(() => {

        fetchMyAPI()

    }, [fetchMyAPI])
    return (
        <div>
            {dataList ? dataList.map((cont, index) => //hace mapeo de los datos en cont que sera el contenido
                <div>
                    {cont.nombreProdcuto}
                    {cont.precio}
                    cantidad a llevar
                    total

                </div>
            ) : ''}

            <Link to='/ventas' onClick={prueba}> terminar compra</Link>
        </div>
    )
}

export default Cart