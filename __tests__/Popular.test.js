import React from 'react';
import Popular from './../app/components/Popular';
import renderer from 'react-test-renderer';

describe('Popular Page', () => {
  it('should render Popular correctly', () => {
    const component = renderer.create(<Popular />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });
});
