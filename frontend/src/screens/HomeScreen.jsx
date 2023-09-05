import React from 'react'
import { Row,Col } from 'react-bootstrap'
import products from '../products'
import Product from '../components/Product'

const HomeScreen = () => {
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