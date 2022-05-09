import React, { FunctionComponent, useState, useEffect } from "react";
import User from "../models/user";
import UserCard from "../components/UserCard";
import UserService from "../services/user-service";
import Loading from "./Loading";

const Users: FunctionComponent = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    UserService.getUsers().then((users) => setUsers(users));
  }, []);

  const [search, setSearch] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div>
      <div className='container'>
        <nav>
          <div className=' card nav-wrapper'>
            <form>
              <div className='input-field teal'>
                <input
                  id='search'
                  type='search'
                  required
                  value={search}
                  onChange={handleSearch}
                />
                <label className='label-icon' htmlFor='search'>
                  <i className='material-icons'>search</i>
                </label>
                <i className='material-icons' onClick={clearSearch}>
                  close
                </i>
              </div>
            </form>
          </div>
        </nav>
        <div className='row'>
          <div className='card teal white-text horizontal s6 m12'>
            <div className='col s4 center-align'>
              <p>Email</p>
            </div>
            <div className='col s4 center-align'>
              <p>Password</p>
            </div>
            <div className='col s4 center-align'>
              <p>Amount</p>
            </div>
            <div className='col s4 center-align'>
              <p>Creation date</p>
            </div>
          </div>
          {users ? (
            users
              .filter((user) => user.email.includes(search))
              .map((user) => <UserCard user={user} />)
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Users;
