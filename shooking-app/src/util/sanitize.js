export function sanitizeInput(value, inputMode, maxLength) {
  const rules = {
    numeric: (v) => v.replace(/\D/g, ""),
    tel: (v) => v.replace(/\D/g, ""),
    text: (v) => v,
    email: (v) => v,
    url: (v) => v,
  };

  const handler = rules[inputMode] || ((v) => v);
  return handler(value).slice(0, maxLength);
}
