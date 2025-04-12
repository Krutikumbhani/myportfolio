// app/api/resume/route.js
export async function GET() {
  const data = {
    about: {
      title: "About me",
      "description": "I'm a passionate MERN Stack Developer with a strong foundation in building full-stack web applications using MongoDB, Express.js, React.js, and Node.js. I love turning ideas into scalable, responsive, and high-performing solutions.\n\nWith hands-on experience in both frontend and backend development, I specialize in creating seamless user experiences and robust server-side logic. Whether it's designing RESTful APIs, integrating third-party services, or crafting pixel-perfect UIs, I enjoy every part of the development process.\n\nI believe in clean code, continuous learning, and building things that matter. Currently, I'm focused on mastering advanced React patterns and diving deeper into DevOps practices to enhance my development workflow.\n\nWhen I’m not coding, I’m probably exploring new tech, sketching UI ideas, or sipping chai while brainstorming the next cool side project.",
      info: [
        { fieldName: "Name", fieldValue: "Kruti kumbhani" },
        { fieldName: "Phone", fieldValue: "8866690396" },
        { fieldName: "Experience", fieldValue: "1+ years" },
        { fieldName: "LinkedIn", fieldValue: "Kruti kumbhani" },
        { fieldName: "Nationality", fieldValue: "Indian" },
        { fieldName: "Email", fieldValue: "krutikumbhani396@gmail.com" },
        { fieldName: "Freelance", fieldValue: "not now" },
        {
          fieldName: "Language",
          fieldValue: "Gujarati, Hindi, English (intermediate)",
        },
      ],
    },
    experience: {
      title: "My Experience",
      description:
        "This is my Experience is part of my journey",
      items: [
        {
          company: "Lexa Solution",
          position: "MERN Stack Developer",
          duration: "Jun 2024 - Present",
        },
      ],
    },
    education: {
      title: "My Education",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit Doloremque, sit",
      items: [
        {
          Institute: "Skywin It Academy",
          Degree: "Full Stack web Development",
          duration: "2023 - 2024",
        },
        {
          Institute: "Sarswati vidhya sankul",
          Degree: "HSC",
          duration: "2023 - 2024",
        },
        {
          Institute: "S.V.S morden sankul",
          Degree: "HSC",
          duration: "2023 - 2024",
        },
      ],
    },
    skills: {
      title: "My Skills",
      description:
        "My Skill has played a crucial role in shaping my career as a developer",
      SkillList: [
        { name: "HTML5", icon: "FaHtml5" },
        { name: "CSS3", icon: "FaCss3" },
        { name: "JavaScript", icon: "FaJs" },
        { name: "React JS", icon: "FaReact" },
        { name: "Node JS", icon: "FaNodeJs" },
        { name: "Next JS", icon: "SiNextdotjs" },
        { name: "TailwindCSS", icon: "SiTailwindcss" },
      ],
    },
  };

  return Response.json(data);
}