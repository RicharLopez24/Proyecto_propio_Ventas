import React, { useCallback, useEffect, useState } from 'react'
import Product from '../Elementos/Product'
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import SearchIcon from '@mui/icons-material/Search';

import { db } from '../Firebase/Firebase';
import { collection, getDocs, query } from 'firebase/firestore';


function Ventas() {

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

  const [dataList, setDataList] = useState([]);
  useEffect( () => {

    fetchMyAPI()
  }, [fetchMyAPI])

  return (
    <div className='ventas-vista'>

      <div className='ventana'>


        <div className='contador'>
          <div className='shopping'>
            <AddShoppingCartIcon />
            cantidad
            $
          </div>
          <div>
            <button className='Color_Button' >
              vender
            </button>
          </div>

          <div className="search">
            <SearchIcon className='icon' />
            <input type='text'
              placeholder="Search"
              id="search"
              className='search-box'
            >
            </input>
          </div>
        </div>
        <h2>
          productos
        </h2>
        <div >
          <div className='targetProductos'>
            {dataList ? dataList.map((cont, index) => //hace mapeo de los datos en cont que sera el contenido
              <Product cont={cont} key={index} />) : ''}


          </div>
          <div>
            lista de articulos
          </div>

        </div>

      </div>
    </div>
  )
}

export default Ventas