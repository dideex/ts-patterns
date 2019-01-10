export function hexToRgb(hex: string): { r: number; g: number; b: number } {
  let [r, g, b] = [0, 2, 4]
    .map(offset => hex.substring(offset, offset + 2))
    .map(hexCh => parseInt(hexCh, 16))
  return { r, g, b }
}
export function rgbToHex(r: number, g: number, b: number): string {
  return [r, g, b]
    .map(decCh => Math.max(0, Math.min(255, decCh)).toString(16))
    .map(hexCh => (hexCh.length === 1 ? `0${hexCh}` : hexCh))
    .join('')
}

export const TYPES = {
  IDepA: Symbol.for('IDepA'),
  IDepB: Symbol.for('IDepB'),
  IDepC: Symbol.for('IDepC')
}
