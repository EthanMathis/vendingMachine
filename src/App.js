import './App.css';
import { useState } from 'react';
import { Container, Row, Col, Button, Card, CardTitle, CardBody, CardText, ButtonGroup } from 'reactstrap';
import '../src/styles/main.css';


const App = () => {
  const [sodaCount, setSodaCount] = useState(10);
  const [hasQuarter, setHasQuarter] = useState(false);
  const [message, setMessage] = useState();

  const [purchaseList, setPurchaseList] = useState([]);



  const handleSodaRequest = (e) => {
    let sodaList = [...purchaseList];
    let newCount = sodaCount;
    if (hasQuarter === true && sodaCount > 0) {
      sodaList.push(e.target.innerText)
      newCount--;
      setMessage(`You recieve a ${e.target.innerText}`)
      setPurchaseList(sodaList)
      setHasQuarter(false)
      setSodaCount(newCount)
    } else if (sodaCount <= 0) {
      setMessage("Sorry :( We're all sold out...")
    } else if (hasQuarter === false) {
      setMessage("You didn't give me any money.... How did you think this worked?")
    }
  }




  return (
    <Container className="border rounded border-primary w-75 mt-4" id="main-container">
      <Row>
        <div className="col-xs-2 d-flex justify-content-between">
          <h1 className="m-2">Vending Machine</h1>
          <ButtonGroup vertical size="sm" className="m-2">
            <Button className="btn-info mt-2" onClick={() => setHasQuarter(true)}>Insert Coin</Button>
            <Button className="btn-danger" onClick={() => setHasQuarter(false)}>Return Coin</Button>
          </ButtonGroup>
        </div>
        <div className="col-xs-10">
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
        </div>
      </Row>




      <Row>
        <Col className="mb-2">
          <Card className="m-2" id="card">
            <CardTitle className="text-center">Purchase List</CardTitle>
            <hr />
            <CardBody>{purchaseList.length === 0 ? <><div>No one has bought anything from me today...</div> <br /> <div>Are my prices too high?</div> </> : purchaseList.map(thing => <div>{thing}</div>)}</CardBody>
          </Card>
        </Col>
        <Col>
          <Card className="m-2" id="card">
            <CardTitle className="text-center">Message Center</CardTitle>
            <hr />
            <CardBody>{message} <br /> There are {sodaCount} beverages left.</CardBody>
          </Card>
          {hasQuarter === false && <Card className="m-2" id="card"><CardText className="text-center m-2">Please insert a quarter into the machine...</CardText></Card>}
        </Col>

      </Row>

    </Container>
  )
}

export default App;