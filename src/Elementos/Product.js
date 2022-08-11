import { addDoc, collection } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../Firebase/Firebase';
import './Registro.css'

function Product({ cont }) {

  
  const prueba = async (produ) => {
    
    try {
      const docRef = addDoc(collection(db, 'Tienda/cart/auxi/1/123'), {

        nombreProdcuto: produ.nombreProdcuto,
        precio: produ.precio,
        img: produ.img,
      });
      console.log("Document written with ID: ", (await docRef).id);

      alert('productos registrado')
      
      //window.location = "/stock"
    } catch (e) {
      console.error("Error adding document: ", e);

    }
    //console.log('haciendo prueba ')
    
    console.log(produ)
    //console.log(idCarrito())
  }
  /*
    useEffect(()=>{
      console.log('la suma es:',conta)
    })*/

  return (
    <div className='targeta'>
      <div className='products'
        onClick={() => prueba(cont)}>
        <div className='imgProduct'>
          {/*<ImageIcon className='logoProduct' path=''/>*/}
          <img src={cont.img}
            alt=''
            className='logoProduct' />
        </div>

        <div className='databox'>
          <div className='data'>
            {cont.nombreProdcuto}
          </div>
          <div className='data'>
            {cont.cantidad}
          </div>
          <div className='data'>
            ${cont.precio}
          </div>
        </div>



      </div>
    </div>
  )
}

export default Product
