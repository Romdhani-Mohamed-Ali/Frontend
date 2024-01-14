import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Listcategorie = () => {
  let navigate = useNavigate();
  const [categorie, setcategorie] = useState([]);

  useEffect(() => {
    getcategories();
  }, []);

  const getcategories = async () => {
    await axios
      .get("https://ecommerce-mern-azure.vercel.app/api/categories/")
      .then((res) => {
        setcategorie(res.data);
        console.log("ddddd", res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };

  const handleDelete = async (id) => {
    if (window.confirm("etes vous sure de vouloir supprimer ?"))
      await axios.delete(
        `https://ecommerce-mern-azure.vercel.app/api/categories/${id}`
      );
    getcategories();
  };

  const handleEdit = (cat) => {
    navigate(`/categories/edit/${cat._id}`);
  };
  return (
    <div>
      <h1>liste des categories</h1>
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark'>
          <div className='container-fluid'>
            <Link className='btn btn-success' to='/categories/add'>
              Ajouter categorie
            </Link>
          </div>
        </nav>
      </div>
      <table className='table table-stripped'>
        <thead>
          <tr>
            <th>Image</th>
            <th>nomcategorie</th>

            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {categorie.map((cat, index) => (
            <tr key={index}>
              <td>
                <img src={cat.imagecategorie} width={80} height={80} />
              </td>
              <td>{cat.nomcategorie}</td>

              <td>
                <Button variant='primary' onClick={() => handleEdit(cat)}>
                  <i class='fa-solid fa-pen'></i>
                </Button>
              </td>

              <td>
                <Button
                  className='btn btn-danger mx-2'
                  onClick={() => handleDelete(cat._id)}
                >
                  <i class='fa-solid fa-trash'></i>
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Listcategorie;
