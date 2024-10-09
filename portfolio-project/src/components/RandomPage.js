export default function RandomPage({ dogsList }) {

const randomDog = dogsList[ Math.floor(Math.random() * dogsList.length) ]
    return (
        <div>
            <h5>Here is one of our doggies...</h5>
            <h2 className="display-1">{ randomDog.name }</h2>
        </div>
    )
}