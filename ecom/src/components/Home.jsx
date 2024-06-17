import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../Feature/CartCountSlice'
import { addProduct } from '../Feature/CartSlice'

const Home = () => {
    const dispatch = useDispatch()
    // const select=useSelector((state)=>state.count.value)
    const [products, setProducts] = useState([])
    useEffect(() => {
        axios.get('http://fakestoreapi.com/products/')
            .then((res) => setProducts(res.data))
    })
    const handle = (prod) => {

      

        dispatch(addProduct(prod))

        dispatch(increment(prod))




    }
    return (
        <>
            <h1>Welcome to my store!</h1>

            <div className='card' >


                {products.map((item) => (
                    <div className='card1' >

                        <>
                            <img src={item.image} alt="" className='image' /> <br />
                            <li key={item.id} className='txt' >{item.title}</li> <br />
                            <li className='txt'>Price: {item.price}</li> <br /> <br />
                            <button className='cartbtn' onClick={() => handle(item)} >Add to cart</button>
                        </>
                    </div>


                ))}
            </div>
        </>
    )
}

export default Home
