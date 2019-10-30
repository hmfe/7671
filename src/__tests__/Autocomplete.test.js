import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import Autocomplete from '../components/Autocomplete';

Enzyme.configure({adapter: new Adapter()});

describe('<Autocomplete />', () => {
  it('renders correctly', () => {
    const tree = shallow(<Autocomplete
      searchValue={''}
      data={['1', '2', '3']}
      height={'260px'}
      handleClick={()=>{}}/>
    );
    expect(tree).toMatchSnapshot();
  });
});

