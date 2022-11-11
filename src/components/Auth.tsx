import { useContext, useEffect, useState } from "react";
import AppContext, { useAppContext, useAppContextUpdater } from "../AppContext";

export interface AuthProps {}

export default function Auth(props: AuthProps) {
  const CLIENT_ID = "b77dfbbe4ec744f586f482ae020db72c";
  const REDIRECT_URI = "http://localhost:8080/";
  const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize";
  const RESPONSE_TYPE = "token";
  const updateToken = useAppContextUpdater()?.updateToken;
  const updateresult = useAppContextUpdater()?.updateSearchResults;

  const [token, setToken] = useState<string | undefined>(
    useAppContext()?.token
  );

  useEffect(() => {
    const hash = window.location.hash;
    let token = window.localStorage.getItem("token") || undefined;
    if (!token && hash) {
      token = hash
        ?.substring(1)
        ?.split("&")
        ?.find((elem) => elem.startsWith("access_token"))
        ?.split("=")[1];

      window.location.hash = "";
      token && window.localStorage.setItem("token", token);
    }

    setToken(token);
    updateToken && updateToken(token);
  }, []);
  const logout = () => {
    setToken(undefined);
    updateToken && updateToken(undefined);
    updateresult && updateresult(undefined);
    window.localStorage.removeItem("token");
  };
  return (
    <div>
      {!token ? (
        <a
          href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
        >
          Login to Spotify
        </a>
      ) : (
        <button onClick={logout}>Logout</button>
      )}
    </div>
  );
}
