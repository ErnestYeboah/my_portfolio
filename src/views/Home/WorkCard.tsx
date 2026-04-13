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
  return (
    <div
      className={`h-min-[75vh] rounded-2xl shadow ${padding || ""}  bg-white`}
    >
      <video
        muted
        controls
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
