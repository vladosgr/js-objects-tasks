// BEGIN
export default function cloneShallow(obj) {
  const result = {};
  for (const key in obj) {
    if (Object.hasOwn(obj, key)) {
      result[key] = obj[key];
    }
  }
  return result;
}
// END
