function calc() {
  let element1=document.getElementById('num1');
  let element2=document.getElementById('num2');
  let result=document.getElementById('sum');
  let numelement1=Number(element1.value);
  let numelement2=Number(element2.value);
  let sum=numelement1+numelement2;
  result.value=sum;

}
