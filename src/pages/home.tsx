import { Link } from "react-router-dom";

export default function Home() {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <Link to={'/note'} className="flex flex-col items-center">
                    <h1 className="text-8xl">Notea</h1>
                    <h2 className="text-2xl text-gray-400">Do you have an <span className="italic">idea</span>?</h2>
                </Link>
            </div>

            <div className="fixed left-0 bottom-4 w-full flex justify-center">
                <Link to={'/about'} className="hover:underline">About</Link>
            </div>
        </>
    )
}