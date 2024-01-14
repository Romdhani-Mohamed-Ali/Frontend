import axios from "axios";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const Insertscategorie = () => {
  let navigate = useNavigate();
  const [nomscategorie, setNomscategorie] = useState();
  const [imagescat, setIimagescat] = useState();
  const [categorieID, setCategorieID] = useState();
  const [scategories, setScategories] = useState();

  useEffect(() => {
    getcategories();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");
    const scategorie = {
      nomscategorie: nomscategorie,
      imagescat: imagescat,
      categorieID: categorieID
    };

    console.log(scategorie);
    await axios.post(
      "https://ecommerce-mern-azure.vercel.app/api/scategories/add",
      scategorie
    );
    navigate("/scategories");
  };

  const getcategories = async () => {
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
          <h4 align='center'>Ajout Scategories</h4>
          <div className='form mt-3'>
            <Form className='border p-3'>
              <Row className='mb-3'>
                <Form.Group className='col-md-6 '>
                  <Form.Label>
                    nom scategorie<span className='req-tag'>*</span>
                  </Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='nom'
                    value={nomscategorie}
                    onChange={(e) => setNomscategorie(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md='6'>
                  <Form.Label>Image</Form.Label>
                  <Form.Control
                    type='text'
                    placeholder='Image'
                    value={imagescat}
                    onChange={(e) => setIimagescat(e.target.value)}
                  />
                </Form.Group>
                <Form.Group as={Col} md='12'>
                  <Form.Label>Catégorie</Form.Label>
                  <Form.Control
                    as='select'
                    type='select'
                    value={categorieID}
                    onChange={(e) => setCategorieID(e.target.value)}
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

export default Insertscategorie;
