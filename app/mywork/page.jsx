'use client';
import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { BsArrowUpRight, BsGithub } from 'react-icons/bs';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import Link from 'next/link';

export default function WorkPage() {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const fetchProjects = async () => {
    try {
      const res = await fetch('/api/projects');
      const data = await res.json();
      setProjects(data);
      setProject(data[0]);
    } catch (err) {
      console.error('Error fetching projects:', err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const handleSlideChange = (swiper) => {
    setProject(projects[swiper.activeIndex]);
    setCurrentIndex(swiper.activeIndex);
  };

  if (!project) return <div className="text-[#18c5c5] text-5xl flex justify-center items-center">Loading...</div>;

  return (
    <div className="container mx-auto py-12">
      <div className="flex flex-col xl:flex-row gap-10">
        {/* Left - Project Details */}
        <div className="w-full xl:w-[50%] flex flex-col gap-7">
          <div className="text-8xl font-extrabold text-transparent text-outline ">
            {project.num}
          </div>
          <h2 className="text-4xl font-bold text-white  capitalize">
            {project.category} Project
          </h2>
          <p className="text-white/70 ">{project.description}</p>
          <ul className="flex flex-wrap gap-2 mb-">
            {project.stack.map((tech, index) => (
              <li key={index} className="text-accent text-xl text-[#18c5c5]">
                {tech}
                {index !== project.stack.length - 1 && ','}
              </li>
            ))}
          </ul>
          <div className="flex gap-5">
            <div className="w-[70px] h-[70px] rounded-full border border-[#18c5c5] bg-white/5 flex justify-center items-center group">
              <BsGithub className="text-[#18c5c5] text-3xl group-hover:text-accent" />
            </div>
            <div className="w-[70px] h-[70px] rounded-full border border-[#18c5c5] bg-white/5 flex justify-center items-center group">
              <Link href="https://krutikumbhani.github.io/bmicalculater/">
                <BsArrowUpRight className="text-[#18c5c5] text-3xl group-hover:text-accent" />
              </Link>
            </div>
          </div>

          <div className="flex gap-3">
            {projects.map((proj, idx) => (
              <div
                key={idx}
                className={`w-[100px] h-[100px] relative rounded-full overflow-hidden border-4 transition-all duration-500 ${
                  idx === currentIndex
                    ? 'border-[#18c5c5] animate-pulse shadow-[0_0_15px_#18c5c5]'
                    : 'border-[#18c5c5]/30'
                }`}
              >
                <div className="absolute inset-2">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="border border-[#18c5c5] mb-4"></div>
        </div>

        <div className="w-full xl:w-[50%]">
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            onSlideChange={handleSlideChange}
            className="xl:h-[460px]"
            modules={[Autoplay]}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
          >
            {projects.map((proj, idx) => (
              <SwiperSlide key={idx}>
                <div className="h-[460px] relative bg-pink-50/10 rounded-xl overflow-hidden">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
