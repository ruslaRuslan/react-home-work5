import axios from "axios";
import { useEffect, useState } from "react";
const url = "https://restcountries.com/v3.1/name/azerbaijan"

const Users = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        axios.get(url)
            .then(({ data }) => {
                setUsers(data)
            })
    }, [])

    useEffect(() => {
        console.log(users);
    }, [users])

    return (
        <>

            <p>{users?.name?.official}</p>
            <p>{users?.name?.common}</p>

        </>
    )
}

export default Users;