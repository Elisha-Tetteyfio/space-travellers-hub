import renderer from 'react-test-renderer';
import { MemoryRouter as Router } from 'react-router-dom';
import Navbar from '../../components/Navbar';

describe('Testing the navigation', () => {
  it('Navigation', () => {
    const tree = renderer
      .create(
        <Router>
          <Navbar />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
