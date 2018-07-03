import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

// Setup enzyme with react adapter
Enzyme.configure({ adapter: new Adapter() });