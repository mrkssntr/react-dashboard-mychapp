import { Routes, Route } from "react-router-dom";
import { DynamicItem, Sidebar, dummyData } from "./components";
import "./App.css";

function App() {
  return (
    <div id="main">
      <Sidebar>
        <Routes>
          <Route path="/" element={<DynamicItem page="Start" />} />
          {dummyData &&
            dummyData.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<DynamicItem page={item.name} />}
              />
            ))}
            <Route path="/dashboards" element={<p>Hallo</p>} />
        </Routes>
      </Sidebar>
    </div>
  );
}

export default App;
