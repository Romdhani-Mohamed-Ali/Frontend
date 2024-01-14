import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Insertcategorie = () => {
  let navigate = useNavigate();
  const [nomcategorie, setNomcategorie] = useState();
  const [imagecategorie, setImagecategorie] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const categorie = {
      nomcategorie: nomcategorie,
      imagecategorie: imagecategorie
    };

    await axios.post(
      "https://ecommerce-mern-azure.vercel.app/api/categories/add",
      categorie
    );
    navigate("/categories");
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
          <h4 align='center'>Ajout Article</h4>
          <div className='form mt-3'>
            <Form className='border p-3'>
              <Row className='mb-2'>
                <Form.Group as={Col} md='6'>
                  <Form.Label>Référence *</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Référence'
                    value={nomcategorie}
                    onChange={(e) => setNomcategorie(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md='6'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Image'
                    value={imagecategorie}
                    onChange={(e) => setImagecategorie(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Button onClick={(e) => handleSubmit(e)} variant='success'>
                {/* <i class='fa-solid fa-floppy-disk'></i>  */}
                Submit
              </Button>{" "}
              <Button variant='danger' onClick={() => navigate("/articles")}>
                Cancel
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insertcategorie;
