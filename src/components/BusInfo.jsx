import { useContext, useState } from "react"
import { Button } from "react-bootstrap"
import BusBuddyDataContext from "../contexts/BusBuddyDataContext"

export default function BusInfo(props) {

    const { favoritedBusIds, favorite, unfavorite } = useContext(BusBuddyDataContext)
    const [showInfo, setShowInfo] = useState(false)

    const isFavorited = favoritedBusIds.includes(props.id)

    return (
        <div>
            <img
                src={"https://raw.githubusercontent.com/CS571-S26/hw3-api-static-content/refs/heads/main/tuna.png"}
                alt={`a picture of ${props.name}`}
                height="400px"
                width="400px"
            />

            <h3>{props.name}</h3>

            {showInfo && (
                <ul>
                    {props.stops.map((stop, index) => (
                        <li key={index}>{stop}</li>
                    ))}
                </ul>
            )}

            <Button onClick={() => setShowInfo(!showInfo)}>
                {showInfo ? "Hide Info" : "Show Info"}
            </Button>

            {isFavorited ? (
                <Button onClick={() => unfavorite(props.id, props.name)} variant="danger">
                    Unfavorite
                </Button>
            ) : (
                <Button onClick={() => favorite(props.id, props.name)} variant="success">
                    Favorite
                </Button>
            )}
        </div>
    )
}