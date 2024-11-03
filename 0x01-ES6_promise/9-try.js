export default async function guardrail(mathFunction) {
  const queue = [];
  let result;
  try {
    result = mathFunction();
    queue.push(result);
  } catch (e) {
    queue.push(e.message);
  }
  queue.push('Guardrail was processed');
}
