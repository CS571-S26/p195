import { Link } from "react-router";

export default function BusBuddy404(props) {

    return (
        <div>
            <h1>A 404 Error has occurred.</h1>
            <p>Looks like you're at the wrong stop!</p>
            <p>
                <Link to="/">Click here to navigate back to the start page.</Link>
            </p>
        </div>
    );
}
