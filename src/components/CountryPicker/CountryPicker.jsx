import React, { useState, useEffect } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { fetchCountries } from '../../api/index.api'

const CountryPicker = ({handleCountryChange}) => {

    const [countries, setCountries] = useState([])

    useEffect( () => {
        const fetch = async () => {
            setCountries(await fetchCountries())
        }
        fetch()
    }, [])

    return (
        <div>
            <FormControl className={styles.formControl}>
                <NativeSelect defaultValue="" onChange={(e) => handleCountryChange(e.target.value)}>
                    <option value="">Global</option>
                    {countries.map( (country, i) => <option key={i} value={country}>{country}</option>)}
                </NativeSelect>
            </FormControl>
        </div>
    )
}

export default CountryPicker
