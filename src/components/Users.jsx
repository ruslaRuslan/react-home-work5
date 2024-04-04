import axios from "axios";
import { useEffect, useState } from "react";

const Users = () => {
    const [countryData, setCountryData] = useState(null)
    const [countryName, setCountryName] = useState("")
    const [error, setError] = useState(null)

    const fetchData = async () => {
        try {
            const response = await axios.get(`https://restcountries.com/v3.1/name/${countryName}`)
            setCountryData(response.data[0])
        } catch (error) {
            setError(error.message)
        }
    };

    useEffect(() => {
        if (countryName) {
            fetchData()
        }
    }, [countryName]);

    const handleInputChange = (event) => {
        setCountryName(event.target.value)
    }

    return (
        <>
            <input type="text" placeholder="country name" value={countryName} onChange={handleInputChange} />
            {error && <p>Error:{error}</p>}
            {countryData && (
                <div>
                    <h2>{countryData.name.common}</h2>
                    <p>Capital: {countryData.capital}</p>
                    <p>Population: {countryData.population}</p>
                    <p>Region: {countryData.region}</p>
                    {/*basqa bolgeleri bura yerlesdire bilersiz*/}
                </div>
            )
            }

        </>
    )
}

export default Users;