function average(numbers) {
  let filtered = numbers.filter(x => !isNaN(x));
   return filtered.reduce((p,c) => p + c, 0)/(filtered.length);
}
module.exports = {average}
