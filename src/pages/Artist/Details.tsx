import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Artist } from "spotify-types";
import styled from "styled-components";
import noImage from "../../assets/no-image.png";
import { Image } from "../../components/Image";
import { useAppContext } from "../../helpers/AppContext";
import Card from "../../style/card";

const Wrapper = styled.div`
  padding: 20px;
`;
export default function Details() {
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
      console.log("ch123", data);
      setArtistInfo(data);
    };

    token && getArtist();
  }, [token]);

  return (
    <Wrapper>
      <Card>
        <Image
          src={artistInfo?.images[0].url || noImage}
          alt={`${artistInfo?.name} image`}
          width={`500px`}
          height={`500px`}
        />
        <h1>{`${artistInfo?.name} is an ${artistInfo?.type}, ranking the ${artistInfo?.popularity} in popularity, and has ${artistInfo?.followers.total} follower`}</h1>
      </Card>
    </Wrapper>
  );
}
