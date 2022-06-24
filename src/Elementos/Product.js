import React, { useEffect, useState } from 'react'
import './Registro.css'

function Product({cont}) {

  const [conta,setSuma] = useState(0)
  const precio = 0
  
  const prueba = () => {
    //console.log('haciendo prueba ')
    

    setSuma(conta + Number(cont.precio))
    //setSuma(conta )
    console.log(conta)
  }

  useEffect(()=>{
    console.log('la suma es:',conta)
  })

  return (
    <div className='targeta'>
      <div className='products' onClick={prueba}>
        <div className='imgProduct'>
          {/*<ImageIcon className='logoProduct' path=''/>*/}
          <img src={cont.img}
          alt=''
          className='logoProduct'/>
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
