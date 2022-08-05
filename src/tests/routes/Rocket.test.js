import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../../reduxStore/store';
import Rocket from '../../RocketSection/Rocket';

describe('Testing the Rocket component', () => {
  it('test Rocket', () => {
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
