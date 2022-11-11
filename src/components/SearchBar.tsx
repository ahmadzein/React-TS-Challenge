import axios from "axios";
import * as React from "react";
import { useNavigate, generatePath } from "react-router-dom";
import { Artist } from "spotify-types";
import styled from "styled-components";
import { useAppContext, useAppContextUpdater } from "../helpers/AppContext";

export interface SearchBarProps {}
const SearchInput = styled.input`
  background: #eee;
  padding: 10px;
  border-radius: 10px 0 0 10px;
  border: 0 none;
  width: 360px;
`;
const Form = styled.form`
  box-shadow: 0 0 3px grey;
  border-radius: 10px;
`;
const Button = styled.button`
  border-radius: 0 10px 10px 0;
`;
export default function SearchBar(props: SearchBarProps) {
  const token = useAppContext()?.token;
  const updateResults = useAppContextUpdater()?.updateSearchResults;

  const [searchKey, setSearchKey] = React.useState("");

  const navigate = useNavigate();

  const routeChange = ({ url, id }: { url: string; id: string }) => {
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

    updateResults && updateResults(data.artists.items);
    routeChange({ url: "/", id: "" });
  };
  return (
    <Form onSubmit={searchArtists}>
      <SearchInput
        disabled={!token}
        type="text"
        onChange={(e: { target: { value: React.SetStateAction<string> } }) =>
          setSearchKey(e.target.value)
        }
        placeholder={!token ? "please login to search" : "search"}
      />
      <Button disabled={!token} type={"submit"}>
        Search
      </Button>
    </Form>
  );
}
