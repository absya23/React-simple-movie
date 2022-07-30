import Notfound from "pages/Notfound";
import { Fragment, lazy, Suspense } from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import "swiper/scss";
import Banner from "./components/banner/Banner";
import Main from "./components/layout/Main";
// import Homepage from "./pages/Homepage";
// import MovieDetailsPage from "./pages/MovieDetailsPage";
// import MoviePage from "./pages/MoviePage";
// import MoviePage2 from "./pages/MoviePage2";

// dynamic import
const Homepage = lazy(() => import("./pages/Homepage"));
const MovieDetailsPage = lazy(() => import("./pages/MovieDetailsPage"));
const MoviePage2 = lazy(() => import("./pages/MoviePage2"));

function App() {
  return (
    <Fragment>
      <Suspense fallback={<></>}>
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
            <Route path="/movies" element={<MoviePage2></MoviePage2>}></Route>
            <Route
              path="/movies/:movieId"
              element={<MovieDetailsPage></MovieDetailsPage>}
            ></Route>
            <Route path="*" element={<Notfound></Notfound>}></Route>
          </Route>
        </Routes>
      </Suspense>
    </Fragment>
  );
}

export default App;
