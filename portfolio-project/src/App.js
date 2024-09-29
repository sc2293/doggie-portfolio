import DoggieCard from "./DoggieCard"

const dogsList = [
  {
    id: 0,
    name: "Marshie",
    breed: "Maltese",
    weight: "9 lbs",
    category: "Small Dog"
  },
  {
    id: 1,
    name: "Caramel",
    breed: "Golden Retriever",
    weight: "61 lbs",
    category: "Big Dog"
  },
  {
    id: 2,
    name: "Swizzy",
    breed: "Husky",
    weight: "43 lbs",
    category: "Big Dog"
  },
  {
    id: 3,
    name: "Pooshie",
    breed: "Poodle",
    weight: "18 lbs",
    category: "Medium Dog"
  },
]

function App() {
  return (
    <div>
      <h1>Oh My Dog</h1>
      { dogsList.map( dg => <DoggieCard dog={dg} /> ) }
    </div>
  );
}

export default App;
