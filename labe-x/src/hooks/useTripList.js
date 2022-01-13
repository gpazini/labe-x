import { useState, useEffect } from "react"
import axios from "axios"
import {BASE_URL_API} from '../constants/URL_API'

export const useTripList = () => {
    const [trips, setTrips] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    const requestList  = () => {
        axios
        .get(`${BASE_URL_API}guilherme-banu/trips`)
        .then((response) => {
            setTrips(response.data.trips)
            setIsLoading(false)
        })
    }
    useEffect(() => {
        setIsLoading(true)
        requestList()

    }, [])

    return {trips, isLoading, requestList}
}

export const useTripListDetail = (id) => {
    const [trips, setTrips] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)

        axios
        .get(`${BASE_URL_API}guilherme-banu/trip/${id}`, 
        {
            headers: {auth:localStorage.getItem('token')}
        })
        .then((response) => {
            setTrips(response.data.trip)
            setIsLoading(false)
        })
    }, [id])

    return {trips, isLoading}
}