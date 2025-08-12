export async function registerCard(card) {
  const res = await fetch("/api/cards", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(card),
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.message || "카드 등록에 실패했습니다.");
  }

  const saved = await res.json();
  return saved;
}
