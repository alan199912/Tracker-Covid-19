import React, { useState, useEffect } from 'react'

// components
import { Cards, Chart, CountryPicker} from './components/index.components'

// css
import styles from './App.module.css'

// api
import { fetchData } from './api/index.api'

// image
// import coronaImage from './image/image.png'

export default function App() {

    const [data, setData] = useState({})
    const [country, setCountry] = useState('')

    useEffect(  () => {
        const fetchAPI = async () => {
            console.log(data)
            setData(await fetchData())
        }

        fetchAPI()
        handleCountryChange()
    }, [])

    const handleCountryChange = async (Country) => {
        setData(await fetchData(Country))
        setCountry(Country)
    }


    return (
        <div className={styles.container}>
            <Cards data={data}/>
            <CountryPicker handleCountryChange={handleCountryChange}/>
            <Chart data={data} country={country}/>
        </div>
    )
}
