function checkCashRegister(price, cash, cid) {
  var unMon=[
      ["PENNY", 0.01],
      ["NICKEL", 0.05],
      ["DIME", 0.1],
      ["QUARTER", 0.25],
      ["ONE", 1],
      ["FIVE", 5],
      ["TEN", 10],
      ["TWENTY", 20],
      ["ONE HUNDRED", 100]
  ]
  var change = cash-price;
  var totalMoney = cid.reduce((acum,curr)=> acum+curr[1],0);
  console.log('total money', totalMoney)
  var stat;
  var cashBack=[]

    if(totalMoney == change){
        stat = "CLOSED";
        cashBack =cid;
        return {status:stat, change:cashBack};
      }
      
  for(let i= cid.length - 1 ; i >= 0; i--){
    var acum=0;
    while(change >= unMon[i][1] && cid[i][1]>0 && change>0){
      cid[i][1] -= unMon[i][1];
      change -= unMon[i][1];
      acum += unMon[i][1];
      change=change.toFixed(2);
    }
    console.log(acum)
    if(acum>0){
      cashBack.push([unMon[i][0], acum])
    }
    if(cid[i][1]<0){cid[i][1]=0};
    console.log(i, change,'-', cid[i][1]);
  }
if(change > 0){
  stat = "INSUFFICIENT_FUNDS";
  cashBack=[];
}else{
  stat = "OPEN";
}
  return {status:stat, change:cashBack};
}

console.log (checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));