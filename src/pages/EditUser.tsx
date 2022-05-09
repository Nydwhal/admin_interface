import { now } from "jquery";
import React, { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import User from "../models/user";
import UserService from "../services/user-service";
import Loading from "./Loading";

const EditUser: FunctionComponent = () => {
  const { id } = useParams() as { id: string };
  const navigate = useNavigate();
  const [user, setUser] = useState<User>();

  useEffect(() => {
    UserService.getUser(id).then((user) => setRealUser(user));
  }, [id]);

  const setRealUser = (user: User) => {
    setEmail(user.email);
    setPassword(user.password);
    setAmount(user.amount);
  };

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [amount, setAmount] = useState<number>(0);

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(Number(event.target.value));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    UserService.editUser(id, email, password, amount).then((user) => {
      navigate(`/user-info/${id}`);
    });
  };

  return (
    <div>
      <div className='row'>
        <div className='col s12 m8 offset-m2'>
          <h2 className='header center'>Modifier</h2>
          <div className='card hoverable'>
            <div className='card-image center'>
              <i className='large material-icons'>account_box</i>
            </div>
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
                        value={email}
                        onChange={(e) => handleEmailChange(e)}
                      />
                    </div>
                    <div className='form-group col s12'>
                      <label htmlFor='last_name'>Mot de passe</label>
                      <input
                        id='password'
                        type='password'
                        className='form-control'
                        value={password}
                        onChange={(e) => handlePasswordChange(e)}
                      />
                    </div>
                    <div className='form-group col s12'>
                      <label htmlFor='amount'>Solde du compte (€)</label>
                      <input
                        id='amount'
                        type='number'
                        className='form-control'
                        value={amount}
                        onChange={(e) => handleAmountChange(e)}
                      />
                    </div>
                    <div
                      style={{ marginTop: "17em" }}
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
    </div>
  );
};

export default EditUser;
