import work from '../../assets/work.png'
import work2 from '../../assets/work-2.png'
import work3 from '../../assets/work-3.png'
import work5 from '../../assets/work-5.png'
import work6 from '../../assets/work-6.png'
import { Col, Container, Row } from 'react-bootstrap';
const Work = () => {
    return (
        <div className='p-5'>
            <h4 className='text-center mt-5'>HOW IT WORKS</h4>

            <div className="d-md-flex">
          
            <div className='p-5 w-md-50'>
            <h3 className='text-info fw-bold mb-3'>Create your free candidate profile</h3>
            <p className='mt-5 fw-lighter'>Answer a few questions about yourself - it takes less than 5 minutes</p>
             <p className='mt-4 fw-lighter fst-italic'>‍🏅 What is your biggest achievement?</p>
             <p className='mt-3 fw-lighter fst-italic'>‍👑️ What does your ideal opportunity look like?</p>
            </div>

            <div className='px-5 mt-5 w-md-50'>
            <img className='w-100' src={work} alt="" />
            </div>
          
          
           
           
           
            </div>
            <div className="d-md-flex">
          
           

            <div className='px-5 mt-5 w-md-50'>
            <img className='w-100' src={work2} alt="" />
            </div>
          
            <div className='p-5 w-md-50'>
            <h3 className='text-info fw-bold mb-3'>Sit back while companies compete to hire you</h3>
            <p className='mt-5 fw-lighter'>Don’t waste your time reaching out to companies or dealing with recruiters.</p>
             <p className='mt-4 fw-lighter fst-italic'>‍💨 We fast-track your profile to hiring managers.</p>
             <p className='mt-3 fw-lighter fst-italic'>🙆‍♂️ Get multiple interview requests with upfront salary offers within days.</p>
            </div>
           
           
           
            </div>

            <Container>

                <Row className='p-md-5'>

                <Col className='w-md-50'  xs={12} sm={6} md={6}>
                <h3 className='text-info fw-bold mt-3'>Salary & Role transparency</h3>
                <p className='mt-3'>Interview requests from companies mention salary and role details upfront - before you decide to accept or decline them.</p>
                </Col>

                <Col className='md-w-50' xs={12} sm={6} md={6}>
                <img className='w-100' src={work3} alt="" />
                </Col>

               

                </Row>




            </Container>
         
         
         
            <Container>

                <Row className='p-md-5'>

                <Col className='md-w-50' xs={12} sm={6} md={6}>
                <img className='w-100 px-5' src={work5} alt="" />
                </Col>

                <Col className='w-md-50'  xs={12} sm={6} md={6}>
                <h3 className='text-info fw-bold mt-3'>A dedicated talent advocate</h3>
                <p className='mt-3'>Your Talent Advocate will guide you through the entire process. From polishing your profile, providing interview tips to helping negotiate offers!</p>
                </Col>

               

               

                </Row>




            </Container>
     
     
     
            <Container>

                <Row className='p-md-5'>

               

                <Col className='w-md-50'  xs={12} sm={6} md={6}>
                <h3 className='text-info fw-bold mt-3'>Current and past employers can’t see your profile</h3>
                <p className='mt-3 fw-lighter mt-4'>By default, we hide your profile from any employers that you list as your current and past employer.</p>
              
              <p className='fst-italic mt-4'>‍🕵 Privacy Assured</p>
              
                </Col>

                <Col className='md-w-50' xs={12} sm={6} md={6}>
                <img className='w-100' src={work6} alt="" />
                </Col>

               

                </Row>




            </Container>


            
            
        </div>
    );
};

export default Work;