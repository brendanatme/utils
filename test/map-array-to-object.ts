import { expect } from 'chai';
import mapArrayToObject from '../src/map-array-to-object';

describe('mapArrayToObject', () => {
  it('maps objects in an array to an object based on the key arg provided', () => {
    const Bolt = { name: 'Lightning Bolt', powerLevel: 100 };
    const Salve = { name: 'Healing Salve', powerLevel: 99999 };
    
    expect(
      mapArrayToObject('name')([Bolt, Salve])
    ).to.eql(
      { 'Lightning Bolt': Bolt, 'Healing Salve': Salve },
    );
  });
});
