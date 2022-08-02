import { Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import MyProfile from './pages/MyProfile';

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact>
            {/* <MyProfile /> */}
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
