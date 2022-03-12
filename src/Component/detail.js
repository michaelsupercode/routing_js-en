import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'
import Nav from "./Nav";

const Detail = () => {
    let apiId = useParams('id')
    console.log(apiId.id); //{id: '1'} // 1

    //usf
    const [user, setUser] = useState([]);
    const [address, setAddress] = useState([]);
    // //uef
    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${apiId.id}`)
            .then(response => response.json())
            .then(json => {
                console.log(json)
                setUser(json)
                setAddress(json.address)
            })
    }, []);


    return (
        <>
            <Nav />
            <div>
                <h1>{user.name}</h1>
                <h2>Username: {user.username}</h2>
                <h3>email: {user.email}</h3>
                <h4>Address:</h4>
                <ul>
                    <li>City: {address.city}</li>
                    <li>Street: {address.street}</li>
                    <li>zipcode:  {address.zipcode}</li>
                </ul>
                <img src="https://images.unsplash.com/photo-1611890798517-07b0fcb4a811?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" alt="" />
            </div>
        </>
    )
}

export default Detail;