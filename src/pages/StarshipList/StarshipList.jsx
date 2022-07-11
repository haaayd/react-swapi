import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { getStarshipList } from "../../service/sw-api"

const StarshipList = () => {
  const[starships, setStarships] = useState([])
  useEffect(() => {
    const fetchStarshipList = async () => {
      const starshipData = await getStarshipList() 
      setStarships(starshipData.results)
    }
    fetchStarshipList()
  })
  return (

    <div className="ship-container">
      {starships.map(starship => 
        <Link to="/starships" state={{starship}} key={starship.name} id="ship">
            {starship.name}
        </Link>
      
        )}
    </div>
  

  )
}

export default StarshipList