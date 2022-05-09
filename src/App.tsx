import React, { FunctionComponent } from "react";
import { Routes, Route } from "react-router-dom";
import EditUser from "./pages/EditUser";
import UsersPage from "./pages/Users";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound";
import UserInfo from "./pages/UserInfo";
import Login from "./pages/Login";
import NotLogged from "./pages/NotLogged";

const App: FunctionComponent = () => {
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login />} />
        {localStorage.getItem("token") != "" ? (
          <Route path='/' element={<Home />}>
            <Route path='*' element={<PageNotFound />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/edit-user/:id' element={<EditUser />} />
            <Route path='/user-info/:id' element={<UserInfo />} />
          </Route>
        ) : (
          <Route path='*' element={<NotLogged />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
