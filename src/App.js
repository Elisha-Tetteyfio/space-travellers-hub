import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import RocketsPage from './pages/Rockets';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            <RocketsPage />
          </Route>
          <Route path="/missions" exact>
            <Missions />
          </Route>
          <Route path="/my_profile" exact>
            <MyProfile />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
