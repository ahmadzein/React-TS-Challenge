import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import AppContext from "./helpers/AppContext";
import Details from "./pages/Artist/Details";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import GlobalStyle from "./style/globalStyles";

//converted App to Function
const App = () => {
  return (
    <AppContext>
      <>
        <GlobalStyle />
        <base href="/"></base>
        <Router>
          <Header />

          <main>
            <section>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/artist/details/:id"} element={<Details />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </section>
          </main>
        </Router>
      </>
    </AppContext>
  );
};

export default App;
