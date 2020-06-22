/**
 * timer
 *
 * utility to test execution time
 *
 * usage:
 * import * as timer from 'path/to/timer'
 * 
 * timer.start('id')
 *
 * ...
 *
 * timer.stop('id')
 */

const timerIds: { [k: string]: number; } = {};
let timerLogger: (arg: any) => any;

export const setLogger = (logger: (arg: any) => any): void => {
  timerLogger = logger;
};

export const start = (id: string) => {
  timerIds[id] = +new Date();
};

export const stop = (id: string) => {
  const result = (+new Date()) - timerIds[id];
  const msg = `Timer: execution of ${id} took ${result}ms`;

  timerLogger
    ? timerLogger(msg)
    : console.log(msg);
  
  delete timerIds[id];
};
