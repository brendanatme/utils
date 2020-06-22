/**
 * decorate
 * 
 * higher-order function that
 * provides clean way to pipe hocs around a component
 * 
 * usage:
 * 
 * decorate(hoc1, hoc2, ...hocs)(Component);
 * 
 * example:
 * 
 * decorate(
 *   hoc1,
 *   hoc2,
 *   hoc3,
 * )(({
 *   propsFromHoc1,
 *   propsFromHoc2,
 *   propsFromHoc3,
 * }) => (
 *  <div />
 * ));
 * 
 * @param  {...any} decorators hocs
 */
export default (...decorators: any[]) => (Composed: any) => decorators.reduce(
  (acc, cv) => cv(acc),
  Composed,
);
