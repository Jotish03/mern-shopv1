import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'

import Product from '../components/Product'
import axios from 'axios'

const HomeScreen = () => {
  const [products,setProduct] = useState([])

  useEffect(()=>{
    const fetchData = async () =>{
      try {
        const response = await axios.get('/api/products')
        setProduct(response.data);
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }
  
  ,[])
  return (
    <>
    <h1>Latest Products</h1>
    <Row>
        {products.map((eproduct)=>(
            <Col key={eproduct._id} sm={12} md={12} lg={4} xl={3} >
            <Product eproduct={eproduct} />
            </Col>
        ))}
    </Row>
    </>
  )
}

export default HomeScreen