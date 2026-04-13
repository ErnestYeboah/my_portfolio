import { useRef } from "react";

type WorkCardProps = {
  title: string;
  video_url: string;
  padding?: string;
  fit?: "object-cover" | "object-contain" | "";
  attributesData: string[];
};

const WorkCard = ({
  title,
  video_url,
  fit,
  padding,
  attributesData,
}: WorkCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  async function playVideo() {
    const video = videoRef.current;
    if (!video) return;

    try {
      await video.play();
    } catch (error) {
      // Ignore the expected rejection when a pending play is interrupted.
      if (error instanceof DOMException && error.name === "AbortError") return;
      console.error("Video playback failed:", error);
    }
  }

  function pauseVideo() {
    const video = videoRef.current;
    if (!video) return;

    video.pause();
    video.currentTime = 0;
  }

  async function toggleVideo() {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      try {
        await video.play();
      } catch (error) {
        if (error instanceof DOMException && error.name === "AbortError")
          return;
        console.error("Video playback failed:", error);
      }
      return;
    }

    pauseVideo();
  }

  return (
    <div
      className={`h-min-[75vh] rounded-2xl shadow ${padding || ""}  bg-white`}
    >
      <video
        ref={videoRef}
        onMouseEnter={playVideo}
        onMouseLeave={pauseVideo}
        onClick={toggleVideo}
        muted
        playsInline
        preload="metadata"
        className={` h-[60vh] w-full ${fit} video  rounded-t-(--radius) `}
        src={video_url || "/videos/store_video.mp4"}
      ></video>
      <div className="p-4">
        <p className="text-2xl mb-4 ">{title || "Amaeton Fashion House"}</p>
        <div className="chips flex gap-2 flex-wrap">
          {attributesData.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
