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
    { id: "1", name: "Home", path: "/" },
    { id: "2", name: "Services", path: "/services" },
    { id: "3", name: "Resume", path: "/resume" },
    { id: "4", name: "Mywork", path: "/mywork" },
    { id: "5", name: "Contact", path: "/contactpage" },
    { id: "6", name: "Skill", path: "/skill" }
  ]), {
    headers: { "Content-Type": "application/json" },
  });
}