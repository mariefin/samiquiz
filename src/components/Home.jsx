import { Link } from 'react-router-dom';
import '../index.css';
import Col from 'react-bootstrap/Col';
function Home() {

  /* <Link to="/vearbat" className="btn btn-primary me-2 mb-2" state={{type:'parillis'}}>Parilliset verbit</Link>
  <Link to="/vearbat" className="btn btn-primary me-2 mb-2" state={{vearba:'leat'}}>Olla-verbi</Link>*/

    return (
      <>
        <Col>
            <h2>Buresboahtin / Tervetuloa</h2>
            <p>Sivuston tarkoituksena on auttaa pohjoissaamen kielen taivutusten harjoittelussa</p>
            <Link to="/vearbat" className="btn btn-primary me-2 mb-2">Vearbat/Verbit</Link>
            <Link to="/nomenat" className="btn btn-primary me-2 mb-2">Nomenat/Nomiinit</Link>
        </Col>
      </>
    )
  }
  
  export default Home
  