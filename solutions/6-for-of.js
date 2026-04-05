// BEGIN
export default function shapeFunc(obj, keys) {
  const result = {};
    for (const key of keys) {
    if (Object.hasOwn(obj, key)) {
      result[key] = obj[key];
    }
  }
    return result;
}
// END