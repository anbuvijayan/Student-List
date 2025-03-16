import { Routes, Route} from 'react-router-dom';
import Student from './components/student';
import Favourite from './components/favourite';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Student />} />
        <Route path="/favourite" element={<Favourite />} />
      </Routes>
  );
}

export default App;



