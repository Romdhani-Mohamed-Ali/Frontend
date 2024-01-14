/* eslint-disable react/no-unknown-property */
import axios from "axios";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const Listarticles = () => {
  let navigate = useNavigate();

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getarticles();
  }, []);

  const getarticles = async () => {
    await axios
      .get("https://ecommerce-mern-azure.vercel.app/api/articles/")
      .then((res) => {
        setArticles(res.data);
      })
      .catch((er) => {
        console.log(er);
      });
  };
  const handleDelete = async (id) => {
    if (window.confirm("etes vous sure de vouloir supprimer ?"))
      await axios.delete(
        `https://ecommerce-mern-azure.vercel.app/api/articles/${id}`
      );
    getarticles();
  };
  const handleEdit = (article) => {
    navigate(`/article/edit/${article._id}`);
  };

  return (
    <div>
      <h1>liste des articles</h1>
      <div>
        <nav className='navbar navbar-expand-lg navbar-dark'>
          <div className='container-fluid'>
            <Link className='btn btn-success' to='/articles/add'>
              Ajouter article
            </Link>
          </div>
        </nav>
      </div>

      <table className='table table-stripped'>
        <thead>
          <tr>
            <th>Image</th>
            <th>Référence</th>
            <th>Désignation</th>
            <th>Quanitity</th>
            <th>Prix</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((art, index) => (
            <tr key={index}>
              <td>
                <img src={art.imageart} width={80} height={80} />
              </td>
              <td>{art.reference}</td>
              <td>{art.designation}</td>
              <td>{art.qtestock}</td>
              <td>{art.prix}</td>
              <td>
                <Button variant='primary' onClick={() => handleEdit(art)}>
                  <i class='fa-solid fa-pen'></i>
                </Button>
              </td>

              <td>
                <Button
                  className='btn btn-danger mx-2'
                  onClick={() => handleDelete(art._id)}
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

export default Listarticles;
