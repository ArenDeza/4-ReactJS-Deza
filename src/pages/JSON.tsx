import Header from "../components/Header";
import User from "../components/User";
import { Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import Axios from "axios"

export default function JSON() {
    const [users, setUsers] = useState([]);
    
    // interface for determination of types
    interface User {
        name: string;
        username: string;
        email: string;
        address: {
            street: string;
            suite: string;
            city: string;
            zipcode: string;
        };
    }

    // fetching data from API
    useEffect(() => {
        const userApi = "https://jsonplaceholder.typicode.com/users"
        Axios.get(userApi).then((res) => {
            setUsers(res.data);
        })
    },[])

    return (
        <>
        <Header/>
        <h1 className="user-information-h"> . . . USER INFORMATION . . .</h1>
        <Row>
            {/* posts a column for each entry in the json */}
        {users.length > 0 ? users.map((user:User) => <User 
        user={user}/>) : ('Loading ...')}
        </Row>
        
        </>
    )
}