import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { serviceGet } from "../utils/api";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../redux/features/user/slice";
import { MovieDetails as MovieDetailsType } from "../types/movies";

const MovieDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const watchlist = useSelector((state: any) => state.user.watchlist);
  const [isInWatchlist, setIsInWatchlist] = useState<boolean>(false);
  const [movie, setMovie] = useState<MovieDetailsType | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  console.log(isInWatchlist);
  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        const response: any = await serviceGet(`/movies/${id}`);
        const { data } = response;

        setMovie({
          adult: data?.adult ?? false,
          backdropPath: data?.backdrop_path ?? "",
          belongsToCollection: {
            id: data?.belongs_to_collection?.id ?? 0,
            name: data?.belongs_to_collection?.name ?? "",
            posterPath: data?.belongs_to_collection?.poster_path ?? "",
            backdropPath: data?.belongs_to_collection?.backdrop_path ?? "",
          },
          budget: data?.budget ?? 0,
          genres:
            data?.genres?.map((genre: any) => ({
              id: genre?.id ?? 0,
              name: genre?.name ?? "",
            })) ?? [],
          homepage: data?.homepage ?? "",
          id: data?.id ?? 0,
          imdbId: data?.imdb_id ?? "",
          originalLanguage: data?.original_language ?? "",
          originalTitle: data?.original_title ?? "",
          overview: data?.overview ?? "",
          popularity: data?.popularity ?? 0,
          posterPath: data?.poster_path ?? "",
          productionCompanies:
            data?.production_companies?.map((company: any) => ({
              id: company?.id ?? 0,
              logoPath: company?.logo_path ?? "",
              name: company?.name ?? "",
              originCountry: company?.origin_country ?? "",
            })) ?? [],
          productionCountries:
            data?.production_countries?.map((country: any) => ({
              iso31661: country?.iso_3166_1 ?? "",
              name: country?.name ?? "",
            })) ?? [],
          releaseDate: data?.release_date ?? "",
          revenue: data?.revenue ?? 0,
          runtime: data?.runtime ?? 0,
          spokenLanguages:
            data?.spoken_languages?.map((language: any) => ({
              englishName: language?.english_name ?? "",
              iso6391: language?.iso_639_1 ?? "",
              name: language?.name ?? "",
            })) ?? [],
          status: data?.status ?? "",
          tagline: data?.tagline ?? "",
          title: data?.title ?? "",
          video: data?.video ?? false,
          voteAverage: data?.vote_average ?? 0,
          voteCount: data?.vote_count ?? 0,
        });
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovie();
  }, []);

  useEffect(() => {
    if (movie && watchlist) {
      console.log(watchlist);
      setIsInWatchlist(!!watchlist.find((item: any) => item.id == movie.id));
    }
  }, [movie, watchlist]);

  const handleAddToWatchlist = async (movie: MovieDetailsType) => {
    await dispatch(
      addToWatchlist({
        title: movie.title,
        movieId: movie.id,
        releaseDate: movie.releaseDate,
        posterUrl: movie.posterPath,
      })
    );
  };

  const handleRemoveFromWatchlist = async (movieId: number) => {
    await dispatch(removeFromWatchlist(movieId));
  };

  if (!movie) {
    return (
      <div className="flex justify-center items-center h-screen">
        {loading ? (
          <>"Loading..."</>
        ) : (
          <div className="bg-red-500 text-white font-bold p-4 rounded-lg shadow-lg">
            No Data found
          </div>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row p-4 items-center">
      <>
        {" "}
        <div className="md:w-1/3">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.posterPath}`}
            alt={movie.title}
            className="w-full h-auto md:rounded-lg md:shadow-lg"
          />
        </div>
        <div className="md:w-2/3 md:pl-8">
          <div className="mt-4">
            <span className="text-gray-700 font-bold text-2xl title text-center">
              {movie.title}
            </span>
            {isInWatchlist ? (
              <button
                className="float-right bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => handleRemoveFromWatchlist(movie.id)}
              >
                Remove from Watchlist
              </button>
            ) : (
              <button
                className="float-right bg-blue-500 text-white font-bold py-2 px-4 rounded-lg"
                onClick={() => handleAddToWatchlist({ ...movie })}
              >
                Add to Watchlist
              </button>
            )}
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-bold text-lg">
              Release Date:
            </span>
            <span className="text-gray-500 text-lg">{movie.releaseDate}</span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-bold text-lg">Runtime:</span>
            <span className="text-gray-500 text-lg">
              {movie.runtime} minutes
            </span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-bold text-lg">Overview:</span>
            <p className="text-gray-500 text-lg">{movie.overview}</p>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-bold text-lg">
              Production Companies:
            </span>
            <ul className="list-disc list-inside">
              {movie.productionCompanies.map((company) => (
                <li key={company.id} className="text-lg">
                  {company.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-bold text-lg">
              Production Countries:
            </span>
            <ul className="list-disc list-inside">
              {movie.productionCountries.map((country) => (
                <li className="text-lg">{country.name}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-bold text-lg">
              Spoken Languages:
            </span>
            <ul className="list-disc list-inside">
              {movie.spokenLanguages.map((language) => (
                <li className="text-lg">{language.name}</li>
              ))}
            </ul>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-bold text-lg">
              Vote Average:
            </span>
            <span className="text-gray-500 text-lg">{movie.voteAverage}</span>
          </div>
          <div className="mt-4">
            <span className="text-gray-700 font-bold text-lg">Vote Count:</span>
            <span className="text-gray-500 text-lg">{movie.voteCount}</span>
          </div>
        </div>
      </>
    </div>
  );
};

export default MovieDetails;
