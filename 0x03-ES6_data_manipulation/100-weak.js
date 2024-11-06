export const weakMap = new WeakMap();
export function queryAPI(api) {
  const count = weakMap.get(api) || 0;
  if (count >= 5) {
    throw new Error('Endpoint load is high');
  }
  weakMap.set(api, count + 1);
}
