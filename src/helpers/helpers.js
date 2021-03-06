const Convert2DTo1DArr = (arr) => {
  resultsArr = [];
  for (let i = 0; i < arr.length; i++) {
    tempArr = arr[i];
    resultsArr = [...resultsArr, ...tempArr];
  }

  return resultsArr;
};

const hexToRgb = (hex) => {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};
