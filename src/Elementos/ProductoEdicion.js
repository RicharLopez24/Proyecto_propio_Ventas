import React, { useEffect } from 'react'
import EditIcon from '@mui/icons-material/Edit';

//import './Registro.css'
function ProductoEdicion({ cont }) {

  const prueba = () => {
    console.log('haciendo prueba ')
  }

  useEffect(() => {

    console.log(cont.cantidad)
    console.log(cont.precio)
    console.log(cont.nombreProdcuto)
    console.log(cont.img)

    

  })
  return (
    <div className='targeta-edi'>
      <div className='products-edi' onClick={prueba}>
        <div className='imgProduct-edi'>
          {/*<ImageIcon className='logoProduct' path=''/>*/}
          <img src={cont.img}
            alt=''
            className='logoProduct-edi' />
        </div>

        <div className='databox-edi'>
          <div className='data-edi'>
            {cont.nombreProdcuto}
            <EditIcon className='iconedit' />
          </div>
          <div className='data-edi'>
            {cont.cantidad}
            <EditIcon className='iconedit' />
          </div>
          <div className='data-edi'>
            ${cont.precio}
            <EditIcon className='iconedit' />
          </div>
        </div>



      </div>
    </div>
  )
}

export default ProductoEdicion
