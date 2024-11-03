export default function guardrail(mathFunction) {
  const queue = [];
  let result;
  try {
    result = mathFunction();
    queue.push(result);
  } catch (e) {
    queue.push(`${e.name}: ${e.message}`);
  }
  queue.push('Guardrail was processed');
  return queue;
}
