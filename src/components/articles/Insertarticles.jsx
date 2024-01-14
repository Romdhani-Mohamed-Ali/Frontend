import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Insertarticles = () => {
  let navigate = useNavigate();
  const [reference, setReference] = useState("");
  const [marque, setMarque] = useState("");
  const [designation, setDesignation] = useState("");
  const [prix, setPrix] = useState(0);
  const [qtestock, setQtestock] = useState(0);
  const [imageart, setImageart] = useState("");
  const [scategorieID, setScategorieID] = useState("");
  const [scategories, setScategories] = useState();

  useEffect(() => {
    getscategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const article = {
      reference: reference,
      designation: designation,
      marque: marque,
      prix: prix,
      qtestock: qtestock,
      imageart: imageart,
      scategorieID: scategorieID
    };
    console.log(article);
    await axios.post(
      "https://ecommerce-mern-azure.vercel.app/api/articles/add",
      article
    );
    navigate("/articles");
  };

  const getscategories = async () => {
    try {
      const res = await axios.get(
        "https://ecommerce-mern-azure.vercel.app/api/scategories"
      );
      setScategories(res.data);
      console.log("rfdsds", res.data);
    } catch (error) {
      console.log(error);
    }
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
                    value={reference}
                    onChange={(e) => setReference(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md='6'>
                  <Form.Label>Désignation *</Form.Label>
                  <Form.Control
                    required
                    type='text'
                    placeholder='Désignation'
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className='mb-2'>
                <Form.Group className='col-md-6'>
                  <Form.Label>Marque *</Form.Label>
                  <Form.Control
                    type='text'
                    required
                    placeholder='Marque'
                    value={marque}
                    onChange={(e) => setMarque(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md='6'>
                  <Form.Label>Prix</Form.Label>
                  <Form.Control
                    type='number'
                    placeholder='Prix'
                    value={prix}
                    onChange={(e) => setPrix(e.target.value)}
                  />
                </Form.Group>
              </Row>
              <Row className='mb-3'>
                <Form.Group className='col-md-6 '>
                  <Form.Label>
                    Qté stock<span className='req-tag'>*</span>
                  </Form.Label>
                  <Form.Control
                    required
                    type='number'
                    value={qtestock}
                    onChange={(e) => setQtestock(e.target.value)}
                    placeholder='Qté stock'
                  />
                </Form.Group>
                <Form.Group as={Col} md='6'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Image'
                    value={imageart}
                    onChange={(e) => setImageart(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md='12'>
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Control
                    as='select'
                    type='select'
                    value={scategorieID}
                    onChange={(e) => setScategorieID(e.target.value)}
                  >
                    {scategories ? (
                      <>
                        {scategories.map((scat) => (
                          <option key={scat._id} value={scat.scategorieID}>
                            {scat.nomscategorie}
                          </option>
                        ))}
                      </>
                    ) : (
                      <p>No categories available</p>
                    )}
                  </Form.Control>
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

export default Insertarticles;
