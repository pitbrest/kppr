import { Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { About, Contacts, ErrorPage, News, Services, Commerce, HomePage } from "./pages";
import React from "react";

function App() {
  return (
    <Routes>
      <Route
        path="kppr/"
        element={<Layout />}
      >
        <Route
          index
          element={<HomePage />}
        />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="activities/services"
          element={<Services />}
        />
        <Route
          path="activities/commerce"
          element={<Commerce />}
        />
        <Route
          path="news"
          element={<News />}
        />
        <Route
          path="contacts"
          element={<Contacts />}
        />
        <Route
          path="*"
          element={<ErrorPage />}
        />
      </Route>
    </Routes>
  );
}

export default App;
