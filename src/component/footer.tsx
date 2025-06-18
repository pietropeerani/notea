import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="fixed left-0 bottom-4 w-full flex justify-center">
            <Link to={'/about'} className="hover:underline">About</Link>
        </div>
    )
}