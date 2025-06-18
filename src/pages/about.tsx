export default function About() {
    return (
        <div className="flex min-h-screen w-full flex-col justify-center items-center">
            <h1 className="text-8xl my-1">About</h1>
            <h2 className="text-2xl text-gray-400">Last update: June, 2025</h2>

            <div className="max-w-4xl mt-10 text-xl">
                This site allows you to write and store notes on your device in a distraction-free environment.
                Notes are auto-saved in your computer so they are private and only accessible by you.
                Notea is tracking free: no analytics scripts, no ads, just IndexedDB to store the notes.
            </div>
        </div>
    )
}