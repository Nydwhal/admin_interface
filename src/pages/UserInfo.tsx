import React, { FunctionComponent, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import User from "../models/user";
import UserService from "../services/user-service";
import Loading from "./Loading";

const UserInfo: FunctionComponent = () => {
  const { id } = useParams() as { id: string };
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    UserService.getUser(id).then((user) => setUser(user));
  }, [id]);

  return (
    <div>
      <div className='row'>
        <div className='col s12 m8 offset-m2'>
          <h2 className='header center'>User</h2>
          {user ? (
            <div className='card hoverable'>
              <div className='center card-image'>
                <i className='large material-icons'>account_box</i>
              </div>
              <div className='card-stacked'>
                <div className='card-content'>
                  <table className='bordered striped'>
                    <tbody>
                      <tr>
                        <td>User id</td>
                        <td>
                          <strong>{user.id}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Email</td>
                        <td>
                          <strong>{user.email}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Mot de passe</td>
                        <td>
                          <strong>{user.password}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Solde du compte</td>
                        <td>
                          <strong>{user.amount}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Date de création</td>
                        <td>
                          <strong>{user.created_at}</strong>
                        </td>
                      </tr>
                      <tr>
                        <td>Dernière modification effectuée</td>
                        <td>
                          <strong>{user.updated_at}</strong>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className='card-action'>
                  <Link to='/users'>Back</Link>
                  <Link className='' to={`/edit-user/${user.id}`}>
                    {user.id === 1 ? null : (
                      <Link to={`/users`}>
                        <i
                          className='material-icons right'
                          onClick={() => {
                            UserService.deleteUser(user.id.toString());
                          }}
                        >
                          delete
                        </i>
                      </Link>
                    )}
                    <i className='material-icons right'>mode_edit</i>
                  </Link>
                </div>
              </div>
            </div>
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
