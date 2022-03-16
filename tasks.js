function makeObjectDeepCopy(inObject) {
  const objectKeys = Object.keys(inObject);

  if (objectKeys.length === 0 || typeof inObject !== 'object') {
    return inObject;
  }

  const outObject = Array.isArray(inObject) ? [] : {};

  objectKeys.forEach(element => {
    outObject[element] = makeObjectDeepCopy(inObject[element])
  });

  return outObject;
}

function selectFromInterval(numArray, firstInterval, secondInterval) {
  if (typeof numArray !== 'object' || numArray.every((item) => typeof item !== 'number')) {
    throw new Error('Invalid Array!');
  } else if (typeof firstInterval !== 'number' || typeof secondInterval !== 'number') {
    throw new Error('Invalid interval!');
  }
  
  if (firstInterval < secondInterval) {
    return numArray.filter((num) => firstInterval <= num && num <= secondInterval);
  } else {
    return numArray.filter((num) => secondInterval <= num && num <= firstInterval);
  }
}

let myIterable = {
  from: 1,
  to: 4,
};
  
myIterable[Symbol.iterator] = function() {
  return {
    current: this.from,
    last: this.to,
    // isValidValue: true,

    next() {
      // if (this.last < this.current) {
      //   this.isValidValue = false;
      // } else if (this.current === undefined || this.last === undefined) {
      //   this.isValidValue = false;
      // } else if (typeof this.current !== 'number' || typeof this.last !== 'number') {
      //   this.isValidValue = false;
      // } else if (this.isValidValue === false) {
      //   throw new Error('Define error with TO or FROM');
      // } else 
      if (this.current <= this.last) {
        return { 
          value: this.current++,
          done: false,
        };
      } else {
        return { 
          done: true,
        };
      }
    }
  };
};


