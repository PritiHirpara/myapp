import { useRef } from "react";

const UseRef_VideoPlayerEx = () => {
  const videoRef = useRef();

  const handlePlay = () => videoRef.current.play();
  const handlePause = () => videoRef.current.pause();

  return (
    <>
      <h2>Video Control Example</h2>

      <video ref={videoRef} width="300" src="https://www.w3schools.com/html/mov_bbb.mp4">
        {/* <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" /> */}
      </video>
      <br />
      <button onClick={handlePlay}>Play</button>
      <button onClick={handlePause}>Pause</button>
    </>
  );
};

export default UseRef_VideoPlayerEx;
