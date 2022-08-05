import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Missions from './pages/Missions';
import MyProfile from './pages/MyProfile';
import RocketsPage from './pages/Rockets';
import { getMissions } from './reduxStore/missions';
import { getAllRocketsAsync } from './reduxStore/rockets';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMissions());
    dispatch(getAllRocketsAsync());
  }, [dispatch]);

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
