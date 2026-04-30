import { useContext, useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import BusBuddyDataContext from "../contexts/BusBuddyDataContext"
import BusModal from "./BusModal"

export default function BusInfo(props) {

    const { favoritedBusIds, favoriteBus, unfavoriteBus } = useContext(BusBuddyDataContext)
    const [showInfo, setShowInfo] = useState(false)
    const [note, setNote] = useState("")
    const [rating, setRating] = useState(0)

    const isFavorited = favoritedBusIds.includes(props.id)

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("busNotes")) || {}
        if (savedNotes[props.id]) {
            setNote(savedNotes[props.id])
        } else {
            setNote("")
        }

        const savedRatings = JSON.parse(localStorage.getItem("busRatings")) || {}
        setRating(savedRatings[props.id] ?? 0)
    }, [props.id])

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("busNotes")) || {}
        savedNotes[props.id] = note
        localStorage.setItem("busNotes", JSON.stringify(savedNotes))
    }, [note, props.id])

    useEffect(() => {
        const savedRatings = JSON.parse(localStorage.getItem("busRatings")) || {}
        savedRatings[props.id] = rating
        localStorage.setItem("busRatings", JSON.stringify(savedRatings))
    }, [rating, props.id])

    return (
        <div>
            <img
                src={"https://upload.wikimedia.org/wikipedia/commons/4/4c/Madison_August_2022_032_%28Madison_Metro_bus%29.jpg"}
                alt={`a picture of ${props.name}`}
                height="auto"
                width="100%"
            />

            <h1>{props.name}</h1>

            <Button onClick={() => setShowInfo(true)}>
                Show Info
            </Button>

            <p className="mt-2 mb-2">
                {rating > 0 ? `Rating: ${rating} / 5` : "Not rated yet"}
            </p>

            {isFavorited ? (
                <Button onClick={() => unfavoriteBus(props.id, props.name)} variant="danger">
                    Unfavorite
                </Button>
            ) : (
                <Button onClick={() => favoriteBus(props.id, props.name)} variant="success">
                    Favorite
                </Button>
            )}

            <BusModal
                show={showInfo}
                handleClose={() => setShowInfo(false)}
                name={props.name}
                stops={props.stops}
                note={note}
                rating={rating}
                image={props.image}
                link={props.link}
                setNote={setNote}
                setRating={setRating}
            />
        </div>
    )
}