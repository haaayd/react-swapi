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
    <>
    <div>
      <h3>Starships!?</h3>
      <div className="ship-container">
        {starships.map(starship => 
          <Link to="/starships" state={{starship}} key={starship.name}>
            {starship.name}
          </Link>
      
          )}
      </div>
    </div>
    </>

  )
}

export default StarshipList