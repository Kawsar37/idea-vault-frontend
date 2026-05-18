export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/home-ideas`);
  const ideas = await res.json();
  console.log(ideas);

  return <div>Home Page</div>;
}
