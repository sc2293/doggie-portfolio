import TrailerCard from "./trailers/TrailerCard"

const trailersList = [
  {
    id: 0,
    name: "Trailer Park A",
    rating: null,
    category: "Louisiana"
  },
  {
    id: 1,
    name: "Trailer Park B",
    rating: null,
    category: "Indiana"
  },
  {
    id: 2,
    name: "Trailer Park C",
    rating: null,
    category: "Illinois"
  },
]

function App() {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>MDS Holdings LLC</h1>
      <h2 style={{ textAlign: 'center' }}>Lease Available Trailer Sites Now</h2>
      { trailersList.map( t => <TrailerCard trailer={t} /> ) }
    </div>
  );
}

export default App;
