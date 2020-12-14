import { Link } from 'react-router-dom'

function StarshipPage(props) {
    const displayStarships = props.starships.map((starship, index) => {
        return (
            <div>
                <Link key={index} to={starship.path}>{starship.name}</Link>
            </div>
        )
    })

    return (
        <div>
            <h1>Star Ship Page</h1>
            {displayStarships}
        </div>
    )
}

export default StarshipPage