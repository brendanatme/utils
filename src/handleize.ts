/**
 * handleize
 * 
 * convert string to URL-friend handle (slug)
 */
export default (s: string): string => s
  .trim()
  .replace(/[\W\s_]/g, '-')
  .toLowerCase();
