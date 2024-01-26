import { Link } from 'react-router-dom';
import '../index.css';
import Col from 'react-bootstrap/Col';
function Home() {

    return (
      <>
        <Col>
            <h2>Buresboahtin</h2>
            <p>Dat lea sátniprográmma</p>
            <Link to="/test" className="btn btn-primary">Test</Link>
        </Col>
      </>
    )
  }
  
  export default Home
  