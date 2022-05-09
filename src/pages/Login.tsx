import React, { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserService from "../services/user-service";

const Login: FunctionComponent = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  let reponse: object;

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({ email: email, password: password });
    UserService.login(email, password).then((response) => {
      if (response.admin) {
        localStorage.setItem("token", response.access_token);
        setTimeout(setNavigation, 2000);
      } else {
        alert("Login ou mot de passe incorrect");
      }
    });
  };

  const setNavigation = () => {
    navigate("/users");
  };

  return (
    <div className='container'>
      <h1 style={{ marginTop: "20%" }} className='center'>
        Connection
      </h1>
      <div className='row'>
        <div className='card'>
          <div className='card-stacked'>
            <div className='card-content'>
              <div className='row'>
                <form className='col s12' onSubmit={(e) => handleSubmit(e)}>
                  <div className='form-group col s12'>
                    <label htmlFor='email'>Email</label>
                    <input
                      id='email'
                      type='email'
                      className='form-control'
                      onChange={(e) => handleEmailChange(e)}
                    />
                  </div>
                  <div className='form-group col s12'>
                    <label htmlFor='password'>Mot de passe</label>
                    <input
                      id='password'
                      type='password'
                      className='form-control'
                      onChange={(e) => handlePasswordChange(e)}
                    />
                  </div>
                  <div
                    style={{ marginTop: "12em" }}
                    className='card-action center'
                  >
                    <button type='submit' className='btn'>
                      Valider
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
