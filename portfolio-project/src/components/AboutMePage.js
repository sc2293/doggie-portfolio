import { useParams} from "react-router-dom"

export default function AboutMePage({ dogsList }) {
    let { dogId } = useParams()
    dogId = parseInt(dogId)

    const dog = dogsList.find(dg => dg.id === dogId)

    if(!dog) {
        return <h2>Doggie not found</h2>
    }
    
    return (
        <div>
            <h3>{ dog.name }</h3>
            <p>{ dog.breed }</p>
            <p>{ dog.weight }</p>
            <p>{ dog.category }</p>
        </div>
    )
}