import { expect } from 'chai';
import * as timer from '../src/timer';

const JOB_ID = 'Test Job';

describe('timer', () => {
  describe('start', () => {
    it('sets a start time and logs a message', () => {
      const startTime = timer.start(JOB_ID);
      
      expect(startTime).to.be.a('number');
    });
  });

  describe('stop', () => {
    it('sets a start time and logs a message', () => {
      const completedIn = timer.stop(JOB_ID);
      
      expect(completedIn).to.be.a('number');
    });
  });
});
