import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Image } from 'react-bootstrap';
//import BannerImage from '../../public/Landing.jpg';
import CustomButton from './CustomButton';


function Banner(){
    const placeholder = 'https://reactjs.org/logo-og.png'

    return(
        <>
            <style type='text/css'>
                {`
                    .contain{
                        height: 100vh;
                        padding-top: 10vh;
                        color:  #3E5B62;
                    }

                    .imageContainer{
                        height: 100vh;
                        background-color: green
                    }

                    .image{
                        max-width: 100%;
                        height: auto
                    }



                `}
            </style>

            <section id='home'>
                <Container>
                    <Row className='justify-content-center'>
                        <Col lg={5} className='contain d-flex align-items-center'>
                            <Col> 
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
                                
                            </Col>
                                      
                        </Col>
                        <Col lg={7}className='imageContainer'>
                            Need to get an image in here somehow
                            <Image
                                src='../../public/Landing.jpg'
                                fluid
                                className='d-block mx-lg-auto'
                                loading='lazy'
                            />
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Banner;