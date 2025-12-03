import React, { useEffect, useState } from "react";
imprt axios from 'axios'

function Home() {
    const [users, setUsers] = useState([])
     async function main() {
   const {data} = await axios.get("https://jsonplaceholder.typicode.com/users"))
   setUsers(data)
        }

    useEffect(() => {
       fetchUsers();
    }, [])
    return <h1>{users[0]?.name}</h1>;

}
export default Home;