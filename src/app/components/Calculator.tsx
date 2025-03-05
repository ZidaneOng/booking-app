export function addition(num: number[]) {
  return num.reduce( (acc, n) => acc + n, 0 )}

export function subtraction(num: number[]) {
  num.sort(function(a, b){return b - a}).map
  return num.reduce( (acc, n) => acc - n)}

export function multiplication(num: number[]) {
  return num.reduce( (acc, n) => acc * n)}

export function division(num: number[]) {
    num.sort(function(a, b){return b - a}).map
    return num.reduce( (acc, n) => acc / n)}