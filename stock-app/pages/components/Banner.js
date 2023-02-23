import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Banner(){

    return(
        <>
            <style type='text/css'>
                {`
                    .contain{
                        height: 100vh;
                        padding-top: 10vh;
                        background-color: pink;
                    }
                `}
            </style>

            <Container >
                <Row>
                    <Col md={5} className='contain'>
                        Intro Copy
                    </Col>
                    <Col md={7} className='contain'>
                        Intro Image
                    </Col>
                </Row>
            </Container>
        </>
    )
}

export default Banner;