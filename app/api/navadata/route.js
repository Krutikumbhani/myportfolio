// export const navdata = [
//   {
//     id: '1',
//     name: 'Home',
//   },
//   {
//     id: '2',
//     name: 'Services',
//   },
//   {
//     id: '3',
//     name: 'Resume',
//   },
//   ,
//   {
//     id: '4',
//     name: 'Mywork',
//   },
//   {
//     id: '5',
//     name: 'Contact',
//   },
// ];


// export async function GET() {
//   return Response.json([
//     { id: "1", name: "Home" },
//     { id: "2", name: "Services" },
//     { id: "3", name: "Resume" },
//     { id: "4", name: "Mywork" },
//     { id: "5", name: "Contact" }
//   ]);
// }

export async function GET() {
  return new Response(JSON.stringify([
    { id: "1", name: "Home" },
    { id: "2", name: "Services" },
    { id: "3", name: "Resume" },
    { id: "4", name: "Mywork" },
    { id: "5", name: "Contact" }
  ]), {
    headers: { "Content-Type": "application/json" },
  });
}