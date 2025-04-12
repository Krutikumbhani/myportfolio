import Services from '../../data/services.json'


export async function GET() {
  return new Response(JSON.stringify(Services), {
    headers: { "Content-Type": "application/json" },
    status: 200,
  });
}