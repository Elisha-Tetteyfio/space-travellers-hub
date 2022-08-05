import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Rocket from '../../RocketSection/Rocket';
import store from '../../reduxStore/store';

describe('Testing the rocket component', () => {
  it('Rocket component', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Rocket />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
