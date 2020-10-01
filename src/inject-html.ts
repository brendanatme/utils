/**
 * injectHtml
 * 
 * appends child to body
 * wraps html string in a span tag
 * you can specify the span id
 * with optional second argument
 * 
 * @param {string} html html string
 * @param {string?} id id of injected span element
 * @returns {void}
 */
export default (html: string, id?: string): void => {
  if (typeof (window as any) === "undefined") {
    return;
  }
  
  const node = (window as any).document.createElement('span');

  node.innerHTML = html;

  if (id) {
    node.id = id;
  }

  (window as any).document.body.appendChild(node);
};
