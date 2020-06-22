import * as fs from 'fs';
import * as path from 'path';
import { expect } from 'chai';
import * as helpers from '../src';

const fNames = fs
  .readdirSync(path.resolve(__dirname, '..', 'src'))
  .map((f) => helpers.camelCase(f.replace('.ts', '')))
  .filter((f) => f !== 'index');

describe('index', () => {
  fNames.map((fName) => {
    it(`exports "${fName}"`, () => {
      expect(typeof (helpers as any)[fName]).to.be.oneOf(['function', 'object']);
    });
  });
});
