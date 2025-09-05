{
  /* Trailer player */
}
{
  showTrailer && (
    <div className="w-full max-w-3xl flex flex-col items-center gap-4">
      <h3 className="text-xl font-semibold text-yellow-400">
        {trailers[index]?.name}
      </h3>
      <video
        controls
        width="100%"
        key={trailers[index]?.id}
        className="rounded-lg shadow-lg border border-gray-700">
        <source src={trailers[index]?.data["480"]} type="video/mp4" />
      </video>

      <div className="flex gap-4 mt-4">
        <button
          type="button"
          onClick={() => setIndex(Math.max(0, index - 1))}
          disabled={index === 0}
          className={`px-5 py-2 rounded-lg font-semibold transition ${
            index === 0
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
          }`}>
          ⬅️ Previous
        </button>
        <button
          type="button"
          onClick={() => setIndex(index + 1)}
          disabled={index === trailers.length - 1}
          className={`px-5 py-2 rounded-lg font-semibold transition ${
            index === trailers.length - 1
              ? "bg-gray-600 text-gray-400 cursor-not-allowed"
              : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500"
          }`}>
          Next ➡️
        </button>
      </div>
    </div>
  );
}

{
  /*Fallback YouTube trailer*/
}
{
  youTube && !showTrailer && (
    <div className="mt-8 w-full max-w-3xl">
      <GameTrailer gameTitle={game.name} />
    </div>
  );
}
<GameDetails gameId={game.id} />;
{
  /* Button to fetch trailers */
}
<button
  type="button"
  onClick={handleFetchTrailers}
  className="mb-6 px-6 py-2 rounded-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 transition-colors duration-300">
  🎬 Watch trailers
</button>;
