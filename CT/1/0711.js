function solution(n, m, licenses, spec) {
  let answer = [];
  const handleSpecSum = (spec) => {
    let sum = 0;
    spec.forEach((item) => (sum += item));
    return sum;
  };
  const handleLicenses = (spec) =>{
    spec.forEach((item,index)=>{
      if(spec[licenses]>0){
        return 1;}
      else{
          return 0;
        }
      }
    })
  for (let i=0;i<n;i++){
    const sum = handleSpecSum(spec[i]);
    const hasLicenses = handleLicenses(spec[i]);
    if(sum>m && hasLicenses) {
      answer.push(i)
    }
  }
  }
