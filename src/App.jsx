/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "@fortawesome/fontawesome-free/css/all.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";

import {
  Editarticles,
  Editcategorie,
  Editscategorie,
  Insertarticles,
  Insertcategorie,
  Insertscategorie,
  Listarticles,
  Listarticlescard,
  Listcategorie,
  Listscategories,
  ViewCategorie,
  ViewScategorie,
  Viewarticles
} from "./components";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div>
      <Router>
        <Menu />
        <Routes>
          {/**route de admin */}
          <Route path='/articles' exact element={<Listarticles />} />
          <Route path='/articles/add' element={<Insertarticles />} />
          <Route path='/article/edit/:id' element={<Editarticles />} />
          <Route path='/article/view/:id' element={<Viewarticles />} />
          <Route path='/categories' exact element={<Listcategorie />} />
          <Route path='/categories/add' element={<Insertcategorie />} />
          <Route path='/categories/edit/:id' element={<Editcategorie />} />
          <Route path='/categories/view/:id' element={<ViewCategorie />} />
          <Route path='/scategories' exact element={<Listscategories />} />
          <Route path='/scategories/add' element={<Insertscategorie />} />
          <Route path='/scategories/edit/:id' element={<Editscategorie />} />
          <Route path='/scategories/view/:id' element={<ViewScategorie />} />

          {/**route de client */}
          <Route path='/' element={<Listarticlescard />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
