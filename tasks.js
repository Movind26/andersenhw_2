function makeObjectDeepCopy(inObject) {

  if (Object.keys(inObject) === 0 || typeof inObject !== 'object') {
    return inObject;
  }

  const outObject = Array.isArray(inObject) ? [] : {};

  for (const key of Object.keys(inObject)) {
    outObject[key] = makeObjectDeepCopy(inObject[key]);
  }

  return outObject;
}

function selectFromInterval(numArray, firstInterval, secondInterval) {
  
  if(typeof numArray !== 'object' || numArray.every((item) => typeof item !== 'number')) {
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

function* myIterable(from, to) {
  const isValid = true;

  switch (isValid) {
    case (to < from):
      throw new Error('TO is less than FROM');
    case (from === undefined || to === undefined):
    case (typeof from !== 'number' || typeof to !== 'number'):
      throw new Error('Define error with TO or FROM');
  }

  for (; from <= to; from++) {
    yield from;
  }
}
