import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import {data} from "../helpers/data";
import Card from 'react-bootstrap/Card';

const CardContainer = () => {
    console.log(data);
    return(
        <>
        <Form.Control placeholder='Search a player' className='w-50 m-auto' />
        <Container>
            <Row>
                {data.map((player,i) => (
                    <Card>
                    <Card.Img variant="top" src={player.img} />
                    <Card.Footer>
                      <Card.Title>{player.name}</Card.Title>
                    </Card.Footer>                    
                    
                  </Card>
                ) )}
            </Row>
        </Container>
        </>
    )
}
export default CardContainer;