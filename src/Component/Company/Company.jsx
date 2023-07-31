import pic1 from '../../assets/c-1-removebg-preview.png'
import pic2 from '../../assets/c-2-removebg-preview.png'
import pic3 from '../../assets/c-3-removebg-preview.png'
import pic6 from '../../assets/c-6-removebg-preview.png'
import pic7 from '../../assets/c-7-removebg-preview.png'
import pic8 from '../../assets/c-8.png'
import pic9 from '../../assets/c-9.png'
import pic10 from '../../assets/c-10-removebg-preview.png'
import { Col, Container, Row } from 'react-bootstrap'
const Company = () => {
    return (
        <div>

            <h4 className='mt-4 mb-3 text-center'>LEADING COMPANIES BUILD TEAMS ON TOPHIRE</h4>

<Container className='px-5 py-2 mx-auto me-md-5'>
      <Row className=''>
      
        <Col  xs={6} sm={3} md={3}>

          <img src={pic1} className="img-fluid w-75" alt="Photo 1" />
       </Col>

       <Col  xs={6} sm={3} md={3}>
       <img src={pic2} className="img-fluid  w-50" alt="Photo 2" />
       </Col>
     
      
          
       <Col xs={6} sm={3} md={3}> 
       <img src={pic3} className="img-fluid  w-50" alt="Photo 4" />
       </Col>
       <Col  xs={6} sm={3} md={3}>
       <img src={pic10} className="img-fluid w-50" alt="Photo 5" />
       </Col>
          
     </Row>

      <Row>

      <Col  xs={6} sm={3} md={3}>
        <img src={pic6} className="img-fluid  w-50" alt="Photo 6" />
     </Col>
    
      <Col  xs={6} sm={3} md={3}>
      <img src={pic7} className="img-fluid  w-50" alt="Photo 7" />
     </Col>
    
      <Col  xs={6} sm={3} md={3}>
      <img src={pic8} className="img-fluid  w-50" alt="Photo 8" />
     </Col>
      <Col  xs={6} sm={3} md={3}>
      <img src={pic9} className="img-fluid  w-50" alt="Photo 9" />
     </Col>
      
</Row>
    
     
     
     
     
     
     
     
      
    </Container>
            
        </div>
    );
};

export default Company;