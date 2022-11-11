import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artist } from "spotify-types";
import { useAppContext } from "../../helpers/AppContext";

export interface InformationProps {}

export default function Details(props: InformationProps) {
  const token = useAppContext()?.token;
  const params = useParams();
  const [artistInfo, setArtistInfo] = useState<Artist>();

  useEffect(() => {
    const getArtist = async () => {
      const { data } = await axios.get(
        `https://api.spotify.com/v1/artists/${params.id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setArtistInfo(data);
    };

    token && getArtist();
  }, [token]);

  return <div>{artistInfo?.name}</div>;
}
