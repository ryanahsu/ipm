import { Homepage, Upload, Profile} from "../pages/homepage";
import { Search } from "../pages/searchpage";
import { Routes, Route } from 'react-router-dom';
import { TextSubmissionForm } from '../pages/UploadPage'


function App(props) {

  const projectList = props.projectList;

  return (
    <div>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="upload" element={<Upload />} />
        <Route path="profile" element={<Profile />} />
        <Route path="search" element={<Search projectList={projectList} />} />
      </Routes>
      

    </div>
  );
}

export default App;