import { Artist } from "spotify-types";
import styled from "styled-components";
import noImage from "../assets/no-image.png";
import LargeMessage from "../style/largeMessage";
import SearchCard from "./SearchCard";

export interface SearchResultsProps {
  artists?: Artist[];
  onClick: Function;
}

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  padding: 20px;
`;
export default function SearchResults(props: SearchResultsProps) {
  return (
    <>
      {props.artists ? (
        props.artists.length === 0 ? (
          <LargeMessage>No Results</LargeMessage>
        ) : (
          <Grid>
            {props.artists.map((artist) => {
              const genres = artist.genres.map((genre: string) => `${genre}`);

              return (
                <SearchCard
                  key={artist.id}
                  image={artist.images[0] ? artist.images[0].url : noImage}
                  title={artist.name}
                  subtitle={`Genres: ${genres}`}
                  body={
                    <>
                      <h1>Popularity:</h1> <h2>{artist.popularity}</h2>
                    </>
                  }
                  onClick={(e: MouseEvent) => {
                    props.onClick({ url: `artist/details/:id`, id: artist.id });
                  }}
                />
              );
            })}
          </Grid>
        )
      ) : (
        <LargeMessage>Let's Search Spotify</LargeMessage>
      )}
    </>
  );
}
