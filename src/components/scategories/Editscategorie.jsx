import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Editscategorie = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [scategories, setScategories] = useState([]);
  const [scategorie, setScategorie] = useState({
    nomscategorie: "",
    imagescat: "",
    categorieID: ""
  });

  useEffect(() => {
    loadScategorie();
    getscategories();
  }, []);

  const getscategories = async () => {
    try {
      const res = await axios.get(
        "https://ecommerce-mern-azure.vercel.app/api/scategories"
      );
      setScategories(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://ecommerce-mern-azure.vercel.app/api/scategories/${id}`,
      scategorie
    );
    navigate("/scategories");
  };

  const onInputChange = (e) => {
    setScategorie({ ...scategorie, [e.target.name]: e.target.value });
  };

  const loadScategorie = async () => {
    const result = await axios.get(
      `https://ecommerce-mern-azure.vercel.app/api/scategories/${id}`
    );
    setScategorie(result.data);
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h4 align='center'>Modifier la Catégorie</h4>
          <div className='form mt-3'>
            <Form className='border p-3' onSubmit={(e) => onSubmit(e)}>
              <Row className='mb-3'>
                <Form.Group as={Col} md='6'>
                  <Form.Label>
                    Nom de la catégorie<span className='req-tag'>*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type='text'
                    value={scategorie.nomscategorie}
                    onChange={(e) => onInputChange(e)}
                    placeholder='Nom de la catégorie'
                    name='nomscategorie' // Corrected name attribute
                  />
                </Form.Group>
                <Form.Group as={Col} md='6'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Image'
                    value={scategorie.imagescat}
                    name='imagescat'
                    onChange={(e) => onInputChange(e)}
                  />
                </Form.Group>
                <Form.Group as={Col} md='12'>
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Control
                    as='select'
                    name='categorieID'
                    value={scategorie.categorieID}
                    onChange={(e) => onInputChange(e)}
                  >
                    {scategories.map((scat) => (
                      <option key={scat._id} value={scat._id}>
                        {scat.nomscategorie}
                      </option>
                    ))}
                  </Form.Control>
                </Form.Group>
              </Row>
              <button type='submit' className='btn btn-outline-primary'>
                Enregistrer
              </button>
              <Link className='btn btn-outline-danger mx-2' to='/scategories'>
                Annuler
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editscategorie;
