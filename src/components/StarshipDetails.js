import { Link } from 'react-router-dom'

function StarshipDetails(props) {
    let starship = props.starships[props.starshipId]

    return (
        <div>
            <h3>NAME: {starship.name}</h3>
            <h3>MODEL: {starship.model}</h3>
            <Link to="/">RETURN</Link>
        </div>
    )
}

export default StarshipDetails