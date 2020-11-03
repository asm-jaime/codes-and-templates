/* #sumstringsnumber #sumstringnumber #sumbigint #bigintsum #sumnumberstring
 * <<'9990', '146'
 *  9990
 *   146
 * >>'10136'
*/

const sum_strings_number = (first, second) => {
  const strings = [first, second];
  const max = first.length > second.length ? 0 : 1;
  const min = max === 1 ? 0 : 1;

  const digits_max = strings[max].split('').reverse();
  const digits_min = strings[min].split('').reverse();

  const buffer = [];

  let acc = 0;
  for(let i = 0; i < digits_max.length; ++i) {
    const summ = (parseInt(digits_max[i]) + parseInt(digits_min[i] || '0') + acc).toString();
    if(summ.length > 1) {
      acc = parseInt(summ[0]);
      buffer.push(summ[1]);
    } else {
      acc = 0;
      buffer.push(summ[0]);
    }
  }
  if(acc > 0) buffer.push(acc + '');
  
  //remove all unnecesary nulls at the start of the result
  const result = buffer.reverse();
  for(let i = 0; i < result.length; ++i) {
    if(result[i] !== '0') break;
    result.shift();
  }

  return result.join('');
};