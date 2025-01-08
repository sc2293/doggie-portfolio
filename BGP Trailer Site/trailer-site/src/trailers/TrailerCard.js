function TrailerCard(props) {
    return (
    <div className="bg-light border p-4 m-2">
        <h4>{props.trailer.name}</h4>
        <p>{props.trailer.category}</p>
    </div>
    )
}

export default TrailerCard;