export function parsePercentage(str:any, total=1, otherwise:number|string=0) {
  if(str === undefined)
    str = otherwise

  if(typeof str === 'number')
    return str;
  if(typeof str === 'string' && str.slice(-1) == '%') {
    let n = parseFloat(str.slice(0, -1))
    if(!isNaN(n))
      return n/100 * total;
  }

  throw new Error(`unable to parse percentage: "${str}"`);
}
export default parsePercentage
