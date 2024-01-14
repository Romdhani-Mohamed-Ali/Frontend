import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
const Cardarticle = ({ article }) => {
  return (
    <div className='container'>
      <div className='row'>
        <div
          className='col-md-6 offset-md-3 border rounded p-4 mt-4
shadow'
        >
          <h2 className='text-center m-4'>Détails Article</h2>
          <Card sx={{ maxWidth: "auto", margin: 1 }}>
            <Card.Img
              variant='top'
              src={article.imageart}
              width={100}
              height={200}
            />
            <Card.Body>
              <Card.Title>
                <b>Référence : </b>
                {article.reference}
              </Card.Title>
              <Card.Text>{article.designation}</Card.Text>
              <Card.Text>
                <b>Prix: {article.prix} DT</b>
              </Card.Text>
              <Link className='btn btn-primary my-2' to={"/articles"}>
                Retour
              </Link>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};
export default Cardarticle;
