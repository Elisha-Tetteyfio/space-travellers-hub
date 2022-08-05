import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Mission from '../../missions/Mission';
import store from '../../reduxStore/store';

describe('Testing mission component', () => {
  it('Test mission', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Mission />
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
