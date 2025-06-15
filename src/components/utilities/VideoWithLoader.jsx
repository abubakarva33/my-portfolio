import { useState } from "react";
import ReactPlayer from "react-player";

function VideoWithLoader({ video, img }) {
  const [loading, setLoading] = useState(true);

  return (
    <div className="video-wrapper" style={{ position: "relative", width: "100%", height: "100%" }}>
      {video ? (
        <>
          {loading && (
            <div className="video-skeleton">
              <div className="pulse" />
            </div>
          )}

          <ReactPlayer
            url={video}
            width="100%"
            height="100%"
            loop
            playing
            muted
            controls
            onReady={() => setLoading(false)}
            style={{ display: loading ? "none" : "block" }}
          />
        </>
      ) : (
        <img src={img} alt="" className="serviceEachImg rounded" />
      )}
    </div>
  );
}

export default VideoWithLoader;
