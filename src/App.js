import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
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
            {/* <MyProfile /> */}
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
