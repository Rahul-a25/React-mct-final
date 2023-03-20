import React, { useEffect,useState } from 'react'
import { action4 } from '../component/redux/action/action';
import { useDispatch ,useSelector} from 'react-redux';

const Eitem = () => {
    const dispatch=useDispatch()
    const [Item,setItem]=useState([])
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/category/electronics")
          .then((res) => res.json())
          .then((data) => setItem(data));
          dispatch(action4(data))
      }, []);
  return (
    <div>
          {/* {
            Item.map((e)=>(
                <div className="liwala">
                    <ul>
                        <h1>rahul arora</h1>
                        <li>{e.tittle}</li>
                        <li>{e.tittle}</li>
                        <li>{e.tittle}</li>
                        <li>{e.tittle}</li>
                        <li>{e.tittle}</li>
                        <li>{e.tittle}</li>
                    </ul>
                </div>
            ))
          } */}
          <h1>rahul aroae</h1>
    </div>
  )
}

export default Eitem
