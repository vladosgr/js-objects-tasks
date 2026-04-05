import _ from 'lodash';

// BEGIN
export default function fill(obj, keys, data) {
  const keysToCopy = keys.length === 0 ? Object.keys(data) : keys;
  for (const key of keysToCopy) {
    if (Object.hasOwn(data, key)) {
      obj[key] = data[key];
    }
  }
}
// END