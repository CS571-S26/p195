import { useContext, useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import BusBuddyDataContext from "../contexts/BusBuddyDataContext"
import BusModal from "./BusModal"

export default function BusInfo(props) {

    const { favoritedBusIds, favoriteBus, unfavoriteBus } = useContext(BusBuddyDataContext)
    const [showInfo, setShowInfo] = useState(false)
    const [note, setNote] = useState("")

    const isFavorited = favoritedBusIds.includes(props.id)

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("busNotes")) || {}
        if (savedNotes[props.id]) {
            setNote(savedNotes[props.id])
        }
    }, [props.id])

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("busNotes")) || {}
        savedNotes[props.id] = note
        localStorage.setItem("busNotes", JSON.stringify(savedNotes))
    }, [note, props.id])

    return (
        <div>
            <img
                src={"https://static.vecteezy.com/system/resources/thumbnails/060/371/279/small_2x/modern-white-coach-bus-parked-in-urban-environment-with-clear-skies-photo.jpeg"}
                alt={`a picture of ${props.name}`}
                height="400px"
                width="275px"
            />

            <h3>{props.name}</h3>

            <Button onClick={() => setShowInfo(true)}>
                Show Info
            </Button>

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
                setNote={setNote}
            />
        </div>
    )
}