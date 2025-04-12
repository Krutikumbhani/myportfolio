

export async function GET() {
  return new Response(JSON.stringify([
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "Services", path: "/services" },
    { id: "3", name: "Mywork", path: "/mywork" },
    { id: "4", name: "Resume", path: "/resume" },
    { id: "5", name: "Contact", path: "/contactpage" },
  ]), {
    headers: { "Content-Type": "application/json" },
  });
}