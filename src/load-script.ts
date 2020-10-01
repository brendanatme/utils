/**
 * loadScript
 */
export default (scriptUrl: string, onLoad: (p: any) => any = () => {}): void => {
  if (typeof (window as any) === "undefined") {
    return;
  }
  
  const script = (window as any).document.createElement('script');

  script.defer = true;
  script.onload = onLoad;
  script.src = scriptUrl;

  (window as any).document.head.appendChild(script);
};
