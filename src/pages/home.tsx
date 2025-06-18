import { Link } from "react-router-dom";
import Footer from "../component/footer";

export default function Home() {
    return (
        <>
            <div className="w-full h-screen flex justify-center items-center">
                <Link to={'/note'} className="flex flex-col items-center">
                    <h1 className="text-8xl">Notea</h1>
                    <h2 className="text-2xl text-gray-400">Do you have an <span className="italic">idea</span>?</h2>
                </Link>
            </div>

            <Footer />
        </>
    )
}