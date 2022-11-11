import { generatePath, useNavigate } from "react-router-dom";
import { useAppContext } from "../AppContext";
import SearchResults from "../components/SearchResults";

export const Home = () => {
  const token = useAppContext()?.token;
  const artists = useAppContext()?.searchResults;

  const navigate = useNavigate();

  const routeChange = ({ url, id }: { url: string; id: string }) => {
    console.log("ch123", url, id);
    const path = generatePath(url, { id });
    navigate(path);
  };

  return <SearchResults artists={artists} onClick={routeChange} />;
};

export default Home;
