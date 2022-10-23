var grades = document.getElementById('gpa');
var button = document.getElementById('getGPA');
var resText = document.getElementById('showresult');

button.addEventListener("click",()=>{
     res=gpa(grades.value);
     console.log(res);
     grades.value='';
    if(isNaN(res))
      {
        resText.innerText='Enter your grades properly!!!';
       }
      else{
       resText.innerText='Your 3-2 GPA is '+res;
      }
 });

grades.addEventListener('input',()=>{
  if(grades.value.length===1)
  {
    resText.innerText="Your 3-2 GPA is ---"
  }
 
});

function gpa(grades){
  let sum = 0;
  let count = 1;
 if(grades.length===0)
 {
   return NaN;
 }
  grades=grades.toUpperCase().replace(/\s/g, "");
  let gradeSplit = grades.split('');
  if(gradeSplit.includes('F'))
  {
    return 'Not passed';
  }
  for(i=0;i<gradeSplit.length;i++)
  {
    if(gradeSplit[i]==='+'){
      gradeSplit[i-1] += '+';
      gradeSplit.splice(i,1);
    }
  }
  gradeSplit.forEach((subjGPA)=>{
    sum += assignGPA(subjGPA)*credit(count++);
  });
  return (sum/22).toFixed(2);
}

function assignGPA(grade){
  switch(grade){
    case 'O':
      return 10 ;
    case 'A+':
      return 9;
    case 'A':
      return 8;
    case 'B+':
      return 7;
    case 'B':
      return 6;
    case 'C':
      return 5;
    case 'F':
      return 0;
    default:
      return NaN;
  }
}

function credit(count){
  switch(count){
    case 1:
      return 1;
    case 2:
      return 1.5;
    case 3:
      return 1.5;
    case 4:
      return 0;
    case 5:
      return 0;
    case 6:
      return 3;
    case 7:
      return 4;
    case 8:
      return 3;
    case 9:
      return 3;
    case 10:
      return 3;
    case 11:
      return 2;
    default:
      return NaN;
  }
}

  
