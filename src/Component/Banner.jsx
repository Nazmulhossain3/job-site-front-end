import { Card, CardGroup } from 'react-bootstrap';
import './banner.css'
import log1 from '../assets/logo1.png'
import log2 from '../assets/logo2.png'
import log3 from '../assets/logo3.png'
const Banner = () => {
    return (
          <div >
            <h1 className="text-center fw-bold mt-5 py-2">Find your next top tech job in 1 week.</h1>
            <p className="  fw-bold text-center"> <mark className="bg-mark">Are you a top 2%</mark> Software Engineer, Product Manager or Data Scientist?
       <br /> Let   leading Indian technology <mark className="bg-mark">companies compete to hire you.</mark></p>

          <div>
 <button type="button" className="btn  btn-outline-primary mx-auto d-flex mt-5">Apply to Join</button>
 <p className='text-center fw-lighter'><small>100% free. It takes only 5 minutes</small></p>
          </div>


        {/* this is cards section */}

        <div>

        <CardGroup className='p-5 gap-4 fw-lighter'>
      <Card>
        <Card.Img variant="top" src={log1} className='w-25 mx-auto d-flex p-2' />
        <Card.Body>
          <p>STEP 1: COMPLETE PROFILE</p>
          <Card.Text>
          Once you are approved, we showcase you to leading Indian technology startups
          </Card.Text>
        </Card.Body>
       
   
      </Card>
      <Card>
        <Card.Img variant="top" src={log2} className='w-25 mx-auto d-flex p-2' />
        <Card.Body>
          <p>STEP 2: RECEIVE JOB OFFERS</p>
          <p>
          Companies start sending interview requests. Talk to only the ones you like.
          </p>
        </Card.Body>
        
   
   
      </Card>
      <Card>
        <Card.Img variant="top" src={log3} className='w-25 mx-auto d-flex p-2' />
        <Card.Body>
          <p>STEP 3: ACCEPT DREAM JOB</p>
          <Card.Text>
          Compare your offers and accept the best one. Hired!
          </Card.Text>
        </Card.Body>
       
      </Card>
    </CardGroup>




        </div>


        </div>
    );
};

export default Banner;