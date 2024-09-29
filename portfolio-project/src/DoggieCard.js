

function DoggieCard(props) {
    return (   
        <div className="bg-light border p-4 m-2">
          <h4>{props.dog.name}</h4>
          <p>{props.dog.breed}</p>
          <p>{props.dog.weight}</p>
          <p>{props.dog.category}</p>
        </div>
    )
}

export default DoggieCard;