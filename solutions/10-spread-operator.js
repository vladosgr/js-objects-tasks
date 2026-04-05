// BEGIN
export default function create(name, extra = {}) {
  return {
    name,
    state: 'moderating',
    createdAt: Date.now(),
    ...extra,
  };
}
// END