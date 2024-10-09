import { useState } from 'react'
import DoggieCard from './components/DoggieCard'

function HomePage({ dogsList }) {
    const [categoryFilter, setCategoryFilter] = useState("All")

    let filteredDogs 
    if(categoryFilter === "All") {
      filteredDogs = dogsList
    }
    else {
      filteredDogs = dogsList.filter(dog => dog.category === categoryFilter)
    }

    return (
        <div>
            <div>
                <button className="btn btn-primary me-3" style={{ backgroundColor: 'purple' }} onClick={() => setCategoryFilter("All")}>All</button>
                <button className="btn btn-primary me-3" style={{ backgroundColor: 'magenta' }} onClick={() => setCategoryFilter("Small Dog")}>Small Dog</button>
                <button className="btn btn-primary me-3" style={{ backgroundColor: 'red' }} onClick={() => setCategoryFilter("Medium Dog")}>Medium Dog</button>
                <button className="btn btn-primary" style={{ backgroundColor: 'maroon' }} onClick={() => setCategoryFilter("Big Dog")}>Big Dog</button>
            </div>
            {filteredDogs.map( dg => <DoggieCard dog={dg} /> ) }
        </div>
    );
};

export default HomePage;