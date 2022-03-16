import React from 'react';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { render } from "react-dom";
import KinkyTower1 from './routes/KinkyTower1'
import KinkyTower2 from './routes/KinkyTower2'
import Potion from './routes/Potion'
import KinkyTowers1 from './routes/KinkyTowers1'
import TitmouseFlight from './routes/TitmouseFlight'
const rootElement = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="kinkytower-1" element={<KinkyTower1 />} />
        <Route path="titmouse-flight" element={<TitmouseFlight />} />
        <Route path="kinkytower-2" element={<KinkyTower2/>}>
          <Route path=":potionId" element={<Potion />} />
        </Route>
        {/* <Route path="kinkytowers-1" element={<KinkyTowers1 />} /> */}
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>The Tower has fallen!</p>
            </main>
          }
        />
      </Route>
    </Routes>
  </BrowserRouter>,
  rootElement
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
