import React from 'react';
import Battle from './../app/components/Battle';
import renderer from 'react-test-renderer';

describe('Battle Page', () => {
  it('should render Battle correctly', () => {
    const component = renderer.create(<Battle />);
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot;
  });
});
