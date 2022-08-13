const bill = document.getElementById('bill')
const tipBtns = document.querySelectorAll(".tip-btn");
const tipInput  = document.getElementById('tip-input');
const member = document.getElementById('member')
const tip = document.getElementById('tip')
const total = document.getElementById('total')
const resetBtn = document.querySelector('.reset-btn');
const memberWarning = document.querySelector('.member-warning');

let billAmount;
let percentage;
let memberNumber;
 
bill.addEventListener('change',takeInfo)
member.addEventListener('change',takeInfo)
let flag  = true;
function takeInfo()
{
     billAmount = parseFloat(bill.value);
     memberNumber = parseFloat(member.value);
     if(memberNumber ===0)
     {
        flag=false;
        memberWarning.textContent = "Can't be zero";
     }
     else
     {
      flag=true;
      memberWarning.textContent = "";
     }
}
// console.log(tipBtns);
tipBtns.forEach(tipBtn => {
    tipBtn.addEventListener('click',(e)=> {
       if(flag)
       {
        bill.value ="";
        member.value = "";
        percentage=parseFloat(e.target.dataset.per);
        calculation(billAmount,percentage,memberNumber);
        
       }
    })
})






resetBtn.addEventListener('click',(e)=> {
  bill.value ="";
        member.value = "";
  location.reload()})


function calculation(bill,tipPercentage,member)
{
  const tipAmount = bill * (tipPercentage/100);
  tip.textContent = `${(tipAmount/member).toFixed(2)}`;
  console.log(tipAmount);
  bill +=tipAmount;
  total.textContent = `${(bill/member).toFixed(2)}`;
}