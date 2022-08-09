import React, { useState, useEffect } from "react";
const mp3 =
  "https://github.com/matthewbates/About/blob/main/src/components/Audio/Moby_Porcelain_Official_Video_.mp3";

const useAudio = (mp3) => {
  const [audio] = useState(new Audio(mp3));
  const [playing, setPlaying] = useState(false);

  const toggle = () => setPlaying(!playing);

  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);

  useEffect(() => {
    audio.addEventListener("ended", () => setPlaying(false));
    return () => {
      audio.removeEventListener("ended", () => setPlaying(false));
    };
  }, []);

  return [playing, toggle];
};

const Player = ({ mp3 }) => {
  const [playing, toggle] = useAudio(mp3);

  return (
    <div>
      <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    </div>
  );
};

export default Audio;
