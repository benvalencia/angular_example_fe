import * as fromWorker from './worker.actions';

describe('loadWorkers', () => {
  it('should return an action', () => {
    expect(fromWorker.loadWorkers().type).toBe('[Worker] Load Workers');
  });
});
