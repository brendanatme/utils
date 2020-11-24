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
type LogFn = (...args: string[]) => any;

const timerIds: { [k: string]: number; } = {};
let logFn: LogFn;

export const setLogFn = (logArg: LogFn): void => {
  logFn = logArg;
};

const log = (msg: string) => logFn
  ? logFn(msg)
  : console.log(msg);

export const start = (id: string): number => {
  timerIds[id] = +new Date();

  log(
    `Timer: begin execution of '${id}'`
  );

  return timerIds[id];
};

export const stop = (id: string): number => {
  const result = (+new Date()) - timerIds[id];
  
  log(
    `Timer: execution of '${id}' took ${result}ms`
  );
  
  delete timerIds[id];

  return result;
};
