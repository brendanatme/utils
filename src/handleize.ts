/**
 * handleize
 * 
 * convert string to URL-friend handle (slug)
 */
export default (s: string): string => s
  .trim()
  .replace(/[\s_]/g, '-')
  .replace(/[^a-zA-Z0-9\-]/g, '')
  .toLowerCase();
