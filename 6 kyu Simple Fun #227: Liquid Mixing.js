//https://www.codewars.com/kata/5906bc3e59a2f7d14e000048/solutions/javascript

function liquidMixing(densities) {
  var r=[],sum=0,l=1, densitySorted;
  for(var n of densities){
      sum += n;
      densitySorted = densities.slice(0, l).sort((a, b)=>a-b);
    if (l % 2 === 1) {
        r.push(densitySorted[(l-1)/2]);
    } else {
      sum = densitySorted[l/2] + densitySorted[l/2 - 1];
        r.push(sum/2);
    }
    l++;
  }
  return r;
}
