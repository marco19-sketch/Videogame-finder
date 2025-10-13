import { useContext, useRef, useCallback, useState, useEffect } from 'react';
import { AppContext } from '../context/contextsCreation';
import RelatedRawgVideos from "./RelatedRawgVideos";
import FullScreenBtn from './FullScreenBtn';

export default function RawgVideos() {
    const { trailers, indexA, setIndexA, results } = useContext(AppContext);
    const containerRef = useRef(null);
     const videoRef = useRef(null);
     const [relatedRawgVideos, setRelatedRawgVideos] = useState(false); // other RAWG videos
     const [currentIndex, setCurrentIndex] = useState(0);

     useEffect(() => {
       console.log("currentIndex", currentIndex);
       console.log("trailers data video", trailers[currentIndex]?.data["max"]);
       console.log("relatedVideos", relatedRawgVideos);
     }, [currentIndex, relatedRawgVideos, trailers]);

     const handleOnPlay = useCallback(() => {
       if (videoRef.current) {
         videoRef.current.play();
       }
     }, []);


  return (
    <div className=" bg-gray-900 border border-cyan-500/40 rounded-2xl shadow-xl  max-w-3xl mx-auto">
      <h3 className="text-cyan-400 text-lg font-semibold mb-3 text-center">
        {trailers[indexA]?.name}
      </h3>
      <div ref={containerRef}>  
        <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <video
            ref={videoRef}
            controls
            // autoPlay
            autoPlay={!relatedRawgVideos}
            // muted
            onPause={() => setRelatedRawgVideos(true)}
            onPlay={() => setRelatedRawgVideos(false)}
            poster={trailers[currentIndex]?.preview}
            // poster={trailers[indexA]?.preview}
            width="100%"
            key={trailers[currentIndex]?.id}
            className="w-full h-full">
            {/* className="w-auto h-auto"> */}

            <source
              src={trailers[currentIndex]?.data["max"]}
              type="video/mp4"
            />
          </video>
         
          {relatedRawgVideos && (
            <RelatedRawgVideos
              trailers={trailers}
              indexA={indexA}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
              setIndexA={setIndexA}
              results={results}
              // setOhterVideos={setRelatedRawgVideos}
              setRelatedRawgVideos={setRelatedRawgVideos}
              handleOnPlay={handleOnPlay}
            />
          )}
        </div>
        <div className='hidden md:block'>
        <FullScreenBtn container={containerRef} />
        </div>
      </div>
    </div>
  );
}
