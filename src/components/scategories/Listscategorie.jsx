import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Listscategorie = () => {
  let navigate = useNavigate();
  const [scategorie, setScategorie] = useState([]);

  useEffect(() => {
    getScategories();
  }, []);

  const getScategories = async () => {
    await axios
      .get("https://ecommerce-mern-azure.vercel.app/api/scategories/")
      .then((res) => {
        setScategorie(res.data);
        console.log("ddddd", res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const handleDelete = async (id) => {
    if (window.confirm("etes vous sure de vouloir supprimer ?"))
      await axios.delete(
        `https://ecommerce-mern-azure.vercel.app/api/scategories/${id}`
      );
    getScategories();
  };
  const handleEdit = (scat) => {
    navigate(`/scategories/edit/${scat._id}`);
  };

  return (
    <div>
      <h1>liste des Scategories</h1>
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark'>
          <div className='container-fluid'>
            <Link className='btn btn-success' to='/scategories/add'>
              Ajouter Scategorie
            </Link>
          </div>
        </nav>
      </div>
      <div>
        <div>
          <table className='table table-stripped'>
            <thead>
              <tr>
                <th>Image</th>
                <th>scategorieID</th>
                <th>nom</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {scategorie.map((scat, index) => (
                <tr key={index}>
                  <td>
                    <img
                      src={scat.imagescategorie}
                      width={80}
                      height={80}
                      alt={`Image ${index}`}
                    />
                  </td>
                  <td>{scat.categorieID}</td>
                  <td>{scat.nomscategorie}</td>
                  <td>
                    <Button variant='primary' onClick={() => handleEdit(scat)}>
                      <i className='fa-solid fa-pen'></i>
                    </Button>
                    <Button
                      className='btn btn-danger mx-2'
                      onClick={() => handleDelete(scat._id)}
                    >
                      <i className='fa-solid fa-trash'></i>
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Listscategorie;
