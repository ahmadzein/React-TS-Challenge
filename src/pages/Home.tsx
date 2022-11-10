import { useState } from "react";
import { Artist } from "spotify-types";

import axios from "axios";
import { generatePath, useNavigate } from "react-router-dom";
import SearchGrid from "../components/SearchGrid";
import dummyData from "../dummyData.json"; // To be replaced with your api response data
import { useAppContext } from "../AppContext";
import SearchCard from "../components/SearchCard";

export const Home = () => {
  const [searchKey, setSearchKey] = useState("");
  const [artists, setArtists] = useState<Artist[]>();
  const token = useAppContext()?.token;

  const navigate = useNavigate();

  const routeChange = ({ url, id }: { url: string; id: string }) => {
    console.log("ch123", url, id);
    const path = generatePath(url, { id });
    navigate(path);
  };

  const searchArtists = async (e: any) => {
    e.preventDefault();
    const { data } = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchKey,
        type: "artist",
      },
    });

    setArtists(data.artists.items);
  };

  console.log("ch123 token", token);

  return (
    <>
      <header className="App-header">
        <h1>Spotify React</h1>
        <form onSubmit={searchArtists}>
          <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
          <button type={"submit"}>Search</button>
        </form>
      </header>
      <h1>Space X Ships</h1>

      <div
        className="App"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          rowGap: "10px",
          columnGap: "20px",
        }}
      >
        <SearchCard
          image={dummyData.image}
          title={dummyData.name}
          subtitle={dummyData.home_port}
          body={<ul {dummyData.roles}></ul>}
        />
        {artists && SearchGrid({ artists, onClick: routeChange })}
      </div>
    </>
  );
};

export default Home;
