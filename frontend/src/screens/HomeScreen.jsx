
import { Row,Col } from 'react-bootstrap'

import Product from '../components/Product'
import { useGetProductQuery } from '../slices/apiProductSlice'
import Loader from '../components/Loader'
import Message from '../components/Message'


const HomeScreen = () => {
  //fetching using redux

  const { data:products,isLoading,error}=useGetProductQuery()


  return (
    <>
    
{isLoading ? (<Loader/>) : error ? (<Message>{error?.data?.message || error.error}</Message>) : (<>
    <h1>Latest Products</h1>
    <Row>
        {products.map((eproduct)=>(
            <Col key={eproduct._id} sm={12} md={12} lg={4} xl={3} >
            <Product eproduct={eproduct} />
            </Col>
        ))}
    </Row>
</>) }
    </>
  )
}

export default HomeScreen