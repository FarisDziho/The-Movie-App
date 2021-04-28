export const debounce = (fn: Function, ms = 300) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };

  export async function fetchData(url:string){
    const res = await fetch(url);
    const json = await res.json();
    const shows = json.results;
    return shows;
}

export function getVideoURL(site:string,key:string) {
  return `https://www.${site}.com/embed/${key}`
}