import axios from "axios";
import { useEffect, useState } from "react";
const url = `https://restcountries.com/v3.1/name/${countryName}`

const Users = () => {
    const [contryData, setCountryData] = useState(null)
    const [countryName, setCountryName] = useState("")
    const [error, setError] = useState(null)

    const fetchData = async () =>{
        try{
            const response = await axios.get(url)
            setCountryData(response.data[0])
        } catch (error){
            setError(error.message)
        }
    };


    return (
        <>


        </>
    )
}

export default Users;