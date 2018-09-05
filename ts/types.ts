//TODO: Implement hexToRgb
export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let [r,g,b] = [0,2,4]
    .map(offset => hex.substring(offset, offset + 2))
    .map(hexCh => parseInt(hexCh, 16))
  return { r, g, b };
}
console.log(" LOG ___  ", hexToRgb('f1f03f') )
//TODO: Implement rgbToHex
export function rgbToHex(r: number, g: number, b: number): string {
  return [r,g,b]
    .map(decCh => Math.max(0, Math.min(255, decCh)).toString(16))
    .map(hexCh => hexCh.length === 1? `0${hexCh}`: hexCh)
    .join('')
}
console.log(" LOG ___  ", rgbToHex(256,-10,0) ) 