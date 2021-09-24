function palindrome(str) {
  str=str.replace(/\W|_/gi, '').toLowerCase();
  if(str.length % 2 == 0){
      for(let i=0; i<str.length/2; i++){
        if(str[i] != str[(str.length-1)-i]){
          return false
        }
      }
       return true;
  }else{
      for(let i=0; i<Math.floor(str.length/2);i++){
        if(str[i] != str[(str.length-1)-i]){
          return false
        }
      }
      return true;
  }
}

console.log(palindrome("almostomla"));