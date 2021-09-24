function telephoneCheck(str) {
  if(/[^\d()-\s]/g.test(str)) {return false;}
  let regexp= /^[1]?[(\s]?[(\s]?[\d]{3}[)]?[-\s]?[\d]{3}[-\s]?[\d]{4}$/
  if(!regexp.test(str) || /\(\d{3}[\s-]|[\s]\d{3}\)|^\d{3}\)/.test(str)){
    return false
  } else{
    return true
  } 
}

console.log(telephoneCheck("555) 555-5555"));
