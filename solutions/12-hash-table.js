import crc32 from 'crc-32';

// BEGIN
export function make() {
  return [];
}
export function set(map, key, value) {
  const hash = Math.abs(crc32.str(key)); 
  if (map[hash] !== undefined && map[hash][0] !== key) {
    return false;
  } 
  map[hash] = [key, value];
  return true;
}
export function get(map, key, defaultValue = null) {
  const hash = Math.abs(crc32.str(key));
  if (map[hash] === undefined || map[hash][0] !== key) {
    return defaultValue;
  }
  return map[hash][1];
}
// END