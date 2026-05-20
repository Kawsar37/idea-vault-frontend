export async function fetchIdeas() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/ideas`);
  const ideas = await res.json();
  return ideas;
}
