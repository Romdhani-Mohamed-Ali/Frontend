import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const Editcategorie = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [categorie, setcategorie] = useState({
    nomcategorie: "",
    imagecategorie: ""
  });

  useEffect(() => {
    loadcategorie();
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.put(
      `https://ecommerce-mern-azure.vercel.app/api/categories/${id}`,
      categorie
    );
    navigate("/categories");
  };

  const loadcategorie = async () => {
    const result = await axios.get(
      `https://ecommerce-mern-azure.vercel.app/api/categories/${id}`
    );
    setcategorie(result.data);
  };

  const onInputChange = (e) => {
    setcategorie({ ...categorie, [e.target.name]: e.target.value });
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h4 align='center'>Ajout Article</h4>
          <div className='form mt-3'>
            <Form className='border p-3' onSubmit={(e) => onSubmit(e)}>
              <Row className='mb-3'>
                <Form.Group className='col-md-6'>
                  <Form.Label>
                    Nom de la catégorie<span className='req-tag'>*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type='text'
                    value={categorie.nomcategorie}
                    onChange={(e) => onInputChange(e)}
                    placeholder='Nom de la catégorie'
                    name='nomcategorie'
                  />
                </Form.Group>
                <Form.Group as={Col} md='6'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Image'
                    value={categorie.imagecategorie}
                    name='imagecategorie' // Corrected name attribute
                    onChange={(e) => onInputChange(e)}
                  />
                </Form.Group>
              </Row>
              <button type='submit' className='btn btn-outline-primary'>
                Submit
              </button>
              <Link className='btn btn-outline-danger mx-2' to='/categories'>
                Cancel
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editcategorie;
