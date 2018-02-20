function rounded(num, precision) {
  const factor = Math.pow(10, precision);
  return Number.parseFloat(Math.round(num * factor) / factor);
}

module.exports = rounded;
