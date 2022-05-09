import React, { FunctionComponent } from "react";
import User from "../models/user";
import { Link } from "react-router-dom";

type Props = {
  user: User;
};

const UserCard: FunctionComponent<Props> = ({ user }) => {
  return (
    <div className='card-wrapper'>
      <Link to={`/user-info/${user.id}`}>
        <div className='col s6 m12' key={user.id}>
          <div className='card horizontal hoverable'>
            <div className='col s4 center-align'>
              <p>{user.email}</p>
            </div>
            <div className='col s4 center-align'>
              <p>**********************</p>
            </div>
            <div className='col s4 center-align'>
              <p>{user.amount}</p>
            </div>
            <div className='col s4 center-align'>
              <p>{user.created_at}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default UserCard;
