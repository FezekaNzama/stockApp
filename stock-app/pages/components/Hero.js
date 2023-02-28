import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CustomButton from './CustomButton';


function Hero(){
    return(
        <>
            <style type='text/css'>
                {`

                    .main-margin{
                        padding-top:10vh;
                    }

                    .background{
                        height: 100vh;
                        color:  #3E5B62;
                        background-image: url(/img/Landing.jpg);
                        background-position: right -15vh bottom 5vh;
                        background-size: 150vh;
                        background-repeat: no-repeat;
                    }

                    .text-col{
                        padding-top: 20vh;
                    }

                    @media (max-width: 992px){
                        .background{
                            background-image: url(Landing.jpg);
                            background-position: bottom;
                            background-size: contain;
                            background-repeat: no-repeat;
                        }
                    }
                
                `}
            </style>

            <section id='Home'>
                <Container fluid className='main-margin'> 
                    <Row className='background'>
                        <Col className='ps-lg-5 ms-lg-5'>
                            <Col lg={4} className='h-100 d-flex text-col bg-white bg-opacity-75'>
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
                            </Col>
                        </Col>
                    </Row>
                </Container>
            </section>
        
        </>
    )
}

export default Hero;