import { Fragment } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
import Homepage from "./pages/Homepage";
import MovieDetailsPage from "./pages/MovieDetailsPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Fragment>
      <Routes>
        <Route element={<Main></Main>}>
          <Route
            path="/"
            element={
              <>
                <Banner></Banner>
                <Homepage></Homepage>
              </>
            }
          ></Route>
          <Route path="/movies" element={<MoviePage></MoviePage>}></Route>
          <Route
            path="/movies/:movieId"
            element={<MovieDetailsPage></MovieDetailsPage>}
          ></Route>
        </Route>
      </Routes>
    </Fragment>
  );
}

export default App;
