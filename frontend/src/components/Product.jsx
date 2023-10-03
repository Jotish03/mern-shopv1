import React from 'react'
import {Card} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Rating from './Rating'

const Product = ({eproduct}) => {
  return (
    <Card className='my-3 p-3 rounded'>
        <Link to={`/product/${eproduct._id}`}>
            <Card.Img src={eproduct.image} variant="top" />
                
       

        </Link>
   <Card.Body>
   <Link to={`/product/${eproduct._id}`}>
        <Card.Title as="div"><strong>{eproduct.name}</strong></Card.Title>
</Link>
<Card.Text as='div'>
    <Rating value={eproduct.rating} text={`${eproduct.numReviews} reviews`} />
</Card.Text>
        <Card.Text as="h3">

            {eproduct.price}
        </Card.Text>
        </Card.Body>
    </Card>
  )
}

export default Product