import React, { useState } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router";
import LoadingBar from "react-top-loading-bar";

const App = () => {
  const [progress, setProgress] = useState(0);
  const pageSize = 8;
  const country = "us";
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  const setNewProgress = (newProgress) => {
    setProgress(newProgress);
  }

  return (
    <BrowserRouter>
      <LoadingBar color="#f11946" progress={progress} height={5} />
      <NavBar />
      <Routes>
        <Route
          exact
          path="/"
          element={
            <News
              apiKey={apiKey}
              setProgress={setNewProgress}
              key="general"
              pageSize={pageSize}
              category="general"
              country={country}
            />
          }
        ></Route>
        <Route
          exact
          path="sports"
          element={
            <News
              apiKey={apiKey}
              setProgress={setNewProgress}
              key="sports"
              pageSize={pageSize}
              category="sports"
              country={country}
            />
          }
        ></Route>
        <Route
          exact
          path="science"
          element={
            <News
              apiKey={apiKey}
              setProgress={setNewProgress}
              key="science"
              pageSize={pageSize}
              category="science"
              country={country}
            />
          }
        ></Route>
        <Route
          exact
          path="entertainment"
          element={
            <News
              apiKey={apiKey}
              setProgress={setNewProgress}
              key="entertainment"
              pageSize={pageSize}
              category="entertainment"
              country={country}
            />
          }
        ></Route>
        <Route
          exact
          path="business"
          element={
            <News
              apiKey={apiKey}
              setProgress={setNewProgress}
              key="business"
              pageSize={pageSize}
              category="business"
              country={country}
            />
          }
        ></Route>
        <Route
          exact
          path="technology"
          element={
            <News
              apiKey={apiKey}
              setProgress={setNewProgress}
              key="technology"
              pageSize={pageSize}
              category="technology"
              country={country}
            />
          }
        ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
