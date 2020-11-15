
export default function greedy (array) => {
  array.sort((a,b) => a[2] - b[2]);
  const res = [];
  res.push(array[0]);

  for (let i = 1; i < array.length; ++i) {
    if(array[i][1] >= res[res.length - 1][2]) res.push(array[i]);
  }
  return res;
}
