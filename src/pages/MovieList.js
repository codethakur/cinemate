import { useFetch } from "../hooks/useFetch";
import { Card } from "../components";
import { useTitle } from "../hooks/useTitle";



export const MovieList = ({apiPath,title}) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);
  return (
    <main>
      <section className="ma x-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {movies.map((movie, index) => (
            <Card key={index} movie={movie} />
          ))}
        </div>
      </section>
    </main>
  );
};