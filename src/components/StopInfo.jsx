import { useContext, useState, useEffect } from "react"
import { Button } from "react-bootstrap"
import BusBuddyDataContext from "../contexts/BusBuddyDataContext"
import StopModal from "./StopModal"

export default function StopInfo(props) {

    const { favoritedStopIds, favoriteStop, unfavoriteStop } = useContext(BusBuddyDataContext)
    const [showInfo, setShowInfo] = useState(false)
    const [note, setNote] = useState("")

    const isFavorited = favoritedStopIds.includes(props.id)

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("stopNotes")) || {}
        if (savedNotes[props.id]) {
            setNote(savedNotes[props.id])
        }
    }, [props.id])

    useEffect(() => {
        const savedNotes = JSON.parse(localStorage.getItem("stopNotes")) || {}
        savedNotes[props.id] = note
        localStorage.setItem("stopNotes", JSON.stringify(savedNotes))
    }, [note, props.id])

    return (
        <div>
            <img
                src={"https://badgerherald.com/wp-content/uploads/2025/03/brt_001.jpg"}
                alt={`a picture of ${props.name}`}
                height="auto"
                width="100%"
            />

            <h1>{props.name}</h1>

            <Button onClick={() => setShowInfo(true)}>
                Show Info
            </Button>

            {isFavorited ? (
                <Button onClick={() => unfavoriteStop(props.id, props.name)} variant="danger">
                    Unfavorite
                </Button>
            ) : (
                <Button onClick={() => favoriteStop(props.id, props.name)} variant="success">
                    Favorite
                </Button>
            )}

            <StopModal
                show={showInfo}
                handleClose={() => setShowInfo(false)}
                name={props.name}
                buses={props.buses}
                note={note}
                setNote={setNote}
            />
        </div>
    )
}