import { useState, useEffect } from "react"
import { useLocation } from "react-router-dom" 
import { getDetails } from "../../service/sw-api"
import { Link } from "react-router-dom"

const StarshipsDetails = () => {
  const [ starshipDetails, setStarshipDetails] = useState({})
  const location = useLocation()

  useEffect(() => {
    const fetchDetails = async () => {
      const starshipData = await getDetails(location.state.starship.url)
      setStarshipDetails(starshipData)

    }
    fetchDetails()
  }, [location.state.starship.url])
  
  return(
    <>
    <h2>Starship Details</h2>
    
    <h2>Name: {starshipDetails.name}</h2>
    <h2>Model: {starshipDetails.model}</h2>

    </>

    )
} 

export default StarshipsDetails

