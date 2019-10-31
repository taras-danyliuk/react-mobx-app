import Stream from './presenter';
import { shallow } from 'enzyme';
import { TrackStore } from '../../stores/trackStore';
import { UserStore } from '../../stores/userStore';

describe('Stream', () => {

  const props = {
    tracks: [{ origin: { title: 'x' } }, { origin: { title: 'y' } }],
  };

  it('shows two elements', () => {
    const element = shallow(<Stream { ...props } />);

    expect(element.find('.track')).to.have.length(2);
  });

});