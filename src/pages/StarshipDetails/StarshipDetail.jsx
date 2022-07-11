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
    <div className="all-starships">
      {starshipDetails.name ?
      <>
        <div>
          <h2>N A M E: {starshipDetails.name}</h2>
          <h2>M O D E L: {starshipDetails.model}</h2>
            <Link to="/" id="return">
              RETURN
            </Link>
        </div>
      </>
      :
      <>
      <p>Loading details ...</p>
      </>
      }
    </div>
    
  

    )
} 

export default StarshipsDetails

