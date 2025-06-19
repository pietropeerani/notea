import { useState, useEffect, useRef } from "react";

const mp3Url = "/public/key.mp3";

export default function TypingSound() {
  const [soundOn, setSoundOn] = useState<boolean>(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent): void => {
      if (!soundOn) return;
      if (/^[a-zA-Z0-9]$/.test(e.key)) {
        if (audioRef.current) {
          audioRef.current.currentTime = 0;
          audioRef.current.play().catch((err) => {
            console.error("Failed to play sound:", err);
          });
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [soundOn]);

  return (
    <span
      style={{ cursor: "pointer", fontSize: "2rem" }}
      onClick={() => setSoundOn((on) => !on)}
      title={soundOn ? "Disable sound" : "Enable sound"}
    >
      {soundOn ? "🔊" : "🔇"}
      <audio ref={audioRef} src={mp3Url} preload="auto" />
    </span>
  );
}
