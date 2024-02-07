import { Card, Col } from "react-bootstrap";
import React from "react";

interface Props {
  user: {
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
    };
  };
}

const User: React.FC<Props> = ({ user }) => {
  return (
    <>
      <Col xxs="6" xs="4" lg="3" className="user-col">
        <Card className="user-card">
          <div>
            <h5>{user.name}</h5>
            <p>
                <b>Username:</b> {user.username} <br/>
                <b>Email:</b> {user.email}
            </p>
          </div>
          <div className="user-address">
            <p>
                <b>Street:</b> {user.address.street} <br/>
                <b>Suite:</b> {user.address.suite} <br/>
                <b>City:</b> {user.address.city} <br/>
                <b>Zipcode:</b> {user.address.zipcode}
            </p>
          </div>
        </Card>
      </Col>
    </>
  );
};

export default User;
