import { Link } from 'react-router-dom'

function DoggieCard({ dog }) {
    return (   
        <div className="bg-light border p-4 m-2">
          <h4>{dog.name}</h4>
          <p>{dog.breed}</p>
          <p>{dog.weight}</p>
          <p>{dog.category}</p>
          <Link to={"/dogs/" + dog.id}>Details</Link>
        </div>
    )
  }

export default DoggieCard;