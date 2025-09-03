import { useContext, useState, useCallback } from 'react';
import { AppContext } from '../context/contextsCreation';
import { useParams, Link } from 'react-router-dom';

export default function DetailsPage() {
    const { results, key } = useContext(AppContext);
    const { id } = useParams();
    const game = results?.find(g => g.id === Number(id));
    const [trailers, setTrailers] = useState([]);
    const [showTrailer, setShowTrailer] = useState(false);
    const [index, setIndex] = useState(0);
    const [noTrailersMsg, setNoTrailersMsg] = useState('');

    console.log('title', results);
    console.log('game', game);
    

      //Getting trailers using gameId
     
        const handleFetchTrailers = useCallback( async () => {
            if (!game) {
                return (
                    <div className='layout-container'>
                        <p>Loading game details...</p>
                    </div>
                )
            }
          try {
            
            const res = await fetch(
              `https://api.rawg.io/api/games/${game.id}/movies?${key}`
            );
            const data = await res.json();
            console.log('DATA', data)
            console.log("trailers data", data.results[index], index);
            // console.log("trailers data", data.results.map(res => res.data));
            setTrailers(data.results);
            if (trailers.length === 0) {
                 setNoTrailersMsg('Sorry no trailers available for this game')
            } else {
                setShowTrailer(true);
            }
          } catch (err) {
            console.error("Error trying to fetch game trailers:", err);
          }
        }, [ key, game, index, trailers])
        
    

    return (
      <div className="layout-container">
        <h1 className="details-title">TITLE:{game.id}</h1>
        <Link to="/results-page">results list</Link>
        <button
          type="button"
          className="trailers-btn"
          onClick={handleFetchTrailers}>
          Watch trailers
        </button>
        {noTrailersMsg && <p className="no-trailers-msg">{noTrailersMsg}</p>}
        {/* {trailers.map(mov => (
            <>
            <h3 className='trailer-name'>{mov.name}</h3>
          <video controls width="640" key={mov.id}>
            <source src={mov.data["480"]} type="video/mp4" />
            Sorry, you browser doesn't support embedded videos.
          </video>
          </>
        ))} */}
        {showTrailer && (
          <>
            <h3 className="trailer-title">{trailers[index]?.name}</h3>
            <video controls width="640" key={trailers[index]?.id}>
              {/* <source src={trailers[index]?.data["max"]} type='video/mp4' /> */}
              <source src={trailers[index]?.data["480"]} type="video/mp4" />
            </video>
            <button
              type="button"
              className="next-btn"
              onClick={() => setIndex(index + 1)}>
              next
            </button>
            <button
              type="button"
              className="prev-btn"
              onClick={() => setIndex(index - 1)}>
              previous
            </button>
          </>
        )}
      </div>
    );
}