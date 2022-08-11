import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Recommended from "./components/Recommended/Recommended";
import SearchPage from "./components/SearchPage/SearchPage";
import VideoPlayer from "./components/VideoPlayer/VideoPlayer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <div className="app_mainpage">
                  <Sidebar />
                  <Recommended />
                </div>
              </>
            }
          />

          <Route
            path="/search/:searchQuery"
            element={
              <>
                <Header />
                <div className="app_mainpage">
                  <Sidebar />
                  <SearchPage />
                </div>
              </>
            }
          />
          
          <Route
            path="/video/:videoId"
            element={
              <>
                <Header />
                <div className="app_mainpage">
                  <Sidebar />
                  <VideoPlayer />
                </div>
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
