import { Homepage, Upload, Profile, Search } from "../pages/homepage";
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="upload" element={<Upload />} />
        <Route path="profile" element={<Profile />} />
        <Route path="search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;