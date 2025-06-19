import Editor from "../component/editor";
import TypingSound from "../component/typing-sound";

export default function Note() {
    return (
        <>
            <div className="max-w-6xl mx-auto text-xl">
                <TypingSound /> 
                <Editor />
            </div>
        </>
    )
}