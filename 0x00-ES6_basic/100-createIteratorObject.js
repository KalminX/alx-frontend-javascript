export default function createIteratorObject(report) {
  const args = [];

  for (const department of Object.values(report.allEmployees)) {
    args.push(...department);
  }
  return {
    [Symbol.iterator]() {
      let index = 0;
      return {
        next() {
          if (index < args.length) {
            return { value: args[index++], done: false };
          }
          return { value: undefined, done: true };
        },
      };
    },
  };
}
