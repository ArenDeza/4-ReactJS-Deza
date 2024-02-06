import Header from "../components/Header";
import { Row, Col, Card } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import users from "https://jsonplaceholder.typicode.com/users";

export default function JSON() {
    return (
        <>
        <h1>User Information</h1>
        </>
    )
}

/*
export default function JSON() {

    return (
       <>
       <h1>User Information</h1>

       {
        users && users.map( user: any => {
            return(
                <Col key={ user.id }>
                { user.name }
                
                { user.address && user.address.map( local => {
                    return(
                        <div key={ user.id } >
                            {local.street}
                        </div>
                        
                    )
                }) }
                </Col>
            )
        }) 
       }
       </>
    )
}
*/

