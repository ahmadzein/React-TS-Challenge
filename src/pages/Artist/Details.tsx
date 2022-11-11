import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artist } from "spotify-types";
import { useAppContext } from "../../AppContext";

export interface InformationProps {}

export default function Details(props: InformationProps) {
  const token = useAppContext()?.token;
  console.log("ch123 token detailes", token);
  const params = useParams();
  const [artistInfo, setArtistInfo] = useState<Artist>();

  useEffect(() => {
    const getArtist = async () => {
      console.log("ch123 token detailes", token);
      const { data } = await axios.get(
        `https://api.spotify.com/v1/artists/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("ch123", data);
      setArtistInfo(data);
    };

    token && getArtist();
  }, [token]);

  return <div>{artistInfo?.name}</div>;
}
