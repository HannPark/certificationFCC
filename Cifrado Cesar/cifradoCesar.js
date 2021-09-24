function rot13(str) {
  let reGex=/\W|_|\s/g
  return str
  .split('')
  .map(elem => (reGex.test(elem)) ? elem : elem.charCodeAt(0)-13)
  .map(elem =>
  (typeof(elem)!='number')?
    elem:
    (elem >= 65)?
      String.fromCharCode(elem) :
      String.fromCharCode(90-(64-elem)))
    .join('');
}

console.log(rot13("SERR PBQR PNZC"));