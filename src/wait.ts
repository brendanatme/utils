/**
 * wait
 * 
 * create a delay in script using async/await
 */
export default (seconds: number): Promise<boolean> => new Promise((resolve) => {
  setTimeout(() => resolve(true), seconds * 1000);
});
