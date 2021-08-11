import './App.css';
import { useState } from 'react';
import { Container, Row, Col, Button, Card, CardTitle, CardBody, CardText, ButtonGroup } from 'reactstrap';


const App = () => {
  const [sodaCount, setSodaCount] = useState(10);
  const [hasQuarter, setHasQuarter] = useState(false);
  const [message, setMessage] = useState();

  const [purchaseList, setPurchaseList] = useState([]);



  const handleSodaRequest = (e) => {
    let sodaList = [...purchaseList];
    let newCount = sodaCount;
    if (hasQuarter === true) {
      sodaList.push(e.target.innerText)
    }
    setPurchaseList(sodaList)
    setHasQuarter(false)
    newCount--;
    setSodaCount(newCount)
    console.log(sodaCount)
  }




  return (
    <Container className="border rounded border-primary w-75">

      <ButtonGroup className="d-flex">
        <Button onClick={handleSodaRequest} className="col-12 btn-success m-2 p-2">Coca-Cola</Button>
        <Button onClick={handleSodaRequest} className="col-12 btn-success m-2 p-2">Diet Coke</Button>
      </ButtonGroup>

      <ButtonGroup className="d-flex">
        <Button onClick={handleSodaRequest} className="col-12 btn-success m-2 p-2">Dr. Pepper</Button>
        <Button onClick={handleSodaRequest} className="col-12 btn-success m-2 p-2">Sprite</Button>
      </ButtonGroup>

      <ButtonGroup className="d-flex">
        <Button onClick={handleSodaRequest} className="col-12 btn-success m-2 p-2">Fanta</Button>
        <Button onClick={handleSodaRequest} className="col-12 btn-success m-2 p-2">Ginger Ale</Button>
      </ButtonGroup>



      <ButtonGroup className="d-flex m-2">
        <Button className="btn-info" onClick={() => setHasQuarter(true)}>Insert Coin</Button>
        <Button className="btn-danger" onClick={() => setHasQuarter(false)}>Return Coin</Button>
      </ButtonGroup>

      <Row>
        <Col>
          <Card className="m-2">
            <CardTitle>Message Center</CardTitle>
            <CardBody></CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="m-2">
            <CardTitle>Purchase List</CardTitle>
            <CardBody>{purchaseList.map(thing => <div>{thing}</div>)}</CardBody>
          </Card>
        </Col>

      </Row>
      {hasQuarter === false && <Card className="m-2"><CardText className="text-center m-2">Please insert a quarter into the machine...</CardText></Card>}

    </Container>
  )
}

export default App;