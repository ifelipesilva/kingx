import { useState, useEffect } from 'react';
import API, {Movie, Cast, Crew, Movies} from '../API';
//helpers
import { isPersistedStage } from '../helpers';

//types
export type MovieState = Movie & 
{
  actors: Cast[], 
  directors: Crew[]
}




export const useMovieFetch = (movieId: number) => {
  const [state, setstate] = useState<MovieState>({} as MovieState);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        setLoading(true);
        setError(false);

        const movie = await API.fetchMovie(movieId);
        const credits = await API.fetchCredits(movieId);
        //get directors only
        const directors = credits.crew.filter(
          (member) => member.job === 'Director'
        );

        setstate({
          ...movie,
          actors: credits.cast,
          directors,
        });

        setLoading(false);
      } catch (error) {
        setError(true);
      }
    };

    const sessionState = isPersistedStage(movieId.toString());

    if (sessionState) {
      setstate(sessionState);
      setLoading(false);
      return;
    }

    fetchMovie();
  }, [movieId]);

  //Write to sessionStorage
  useEffect(() => {
    sessionStorage.setItem(movieId.toString(), JSON.stringify(state));
  }, [movieId, state]);

  return { state, loading, error };
};
