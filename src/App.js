import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" />
          <Route path="/missions" />
          <Route path="/my_profile" />
        </Routes>
      </div>
    </>
  );
}

export default App;
