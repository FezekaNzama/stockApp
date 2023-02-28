import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
import CustomButton from './CustomButton';


function Banner(){
    
    return(
        <>
            <style type='text/css'>
                {`
                    .contain{
                        height: 100vh;
                        padding-top: 10vh;
                        color:  #3E5B62;
                        
                    }

                    @media (max-width: 992px) {
                        .contain{
                            background-image: url(Landing.jpg);
                            background-position: center;
                            background-size: contain;
                            background-repeat: no-repeat;
                        }
                    }

                    .overlay{
                        height:100%; 
                    }

                    .inner-container{
                        height:100%;
                    }

                    .image-container{
                        height: 100vh;
                        padding-top: 10vh;         
                    } 

                    .image{
                        max-width: 100%;
                        height: auto
                    }



                `}
            </style>

            <section id='home'>
                <Container fluid>
                    <Row className='justify-content-center'>
                        <Col lg={5} className='contain d-flex'>
                            <Col className='bg-white bg-opacity-75 ps-lg-5 ms-lg-5'> 
                                <div class='h-100 d-flex align-items-center'>
                                    <div>
                                        <h1 class="fw-bold lh-1 mb-3 mx-4 text-lg-start text-center">Page Landing Title</h1>
                                        <p class="mx-4 mb-3 text-lg-start text-center" >
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
                                        incididunt ut labore et dolore magna aliqua. 
                                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea 
                                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum 
                                        dolore eu fugiat nulla pariatur. 
                                        </p>
                                        <div class=" d-flex mx-4 justify-content-lg-start justify-content-center">
                                            <CustomButton
                                                buttonText="SIGN UP NOW"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </Col>
                                      
                        </Col>
                        <Col lg={7}className='image-container d-flex d-none d-lg-block align-items-content'>

                            <Image
                                src='land.png'
                                fluid
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner;