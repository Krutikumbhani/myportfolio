'use client';

import { useEffect, useState } from 'react';
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs } from 'react-icons/si';
import { ScrollArea } from '@/component/ui/scroll-area';

const iconMap = {
  FaHtml5: <FaHtml5 />,
  FaCss3: <FaCss3 />,
  FaJs: <FaJs />,
  FaReact: <FaReact />,
  FaNodeJs: <FaNodeJs />,
  SiTailwindcss: <SiTailwindcss />,
  SiNextdotjs: <SiNextdotjs />,
};

export default function Resume() {
  const [resumeData, setResumeData] = useState(null);
  const [activeTab, setActiveTab] = useState('experience');

  useEffect(() => {
    fetch('/api/resume')
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  if (!resumeData) return <div className="text-[#18c5c5] text-5xl flex justify-center items-center">Loading...</div>;

  const { about, experience, education, skills } = resumeData;

  return (
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-[60px]">
        {/* Tabs */}
        <div className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6 text-center xl:text-left">
          <button
            onClick={() => setActiveTab('experience')}
            className={`py-2 px-4 rounded ${activeTab === 'experience'
              ? 'bg-[#18c5c5] text-white'
              : 'bg-[#232329] text-white'
              }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab('education')}
            className={`py-2 px-4 rounded ${activeTab === 'education'
              ? 'bg-[#18c5c5] text-white'
              : 'bg-[#232329] text-white'
              }`}
          >
            Education
          </button>
          <button
            onClick={() => setActiveTab('skills')}
            className={`py-2 px-4 rounded ${activeTab === 'skills'
              ? 'bg-[#18c5c5] text-white'
              : 'bg-[#232329] text-white'
              }`}
          >
            Skills
          </button>
          <button
            onClick={() => setActiveTab('about')}
            className={`py-2 px-4 rounded ${activeTab === 'about'
              ? 'bg-[#18c5c5] text-white'
              : 'bg-[#232329] text-white'
              }`}
          >
            About me
          </button>
        </div>

        {/* Content */}
        <div className="min-h-[70vh] w-full">
          {activeTab === 'experience' && (
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold text-[#18c5c5]">
                {experience.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                {experience.description}
              </p>
              <div>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {experience.items.map((item, index) => (
                    <li key={index} className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col  justify-center items-center lg:items-start gap-4">
                      <span className="text-accent text-[#18c5c5]">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px]   text-center lg:text-left text-white">{item.position}</h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#18c5c5]"></span>
                        <p className="text-white/60">{item.company}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'education' && (
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold text-[#18c5c5]">
                {education.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 ">
                {education.description}
              </p>
              <div>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                  {education.items.map((item, index) => (
                    <li
                      key={index}
                      className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-3"
                    >
                      <span className="text-accent text-[#18c5c5]">{item.duration}</span>
                      <h3 className="text-xl max-w-[260px]  text-center lg:text-left text-white">
                        {item.Degree}
                      </h3>
                      <div className="flex items-center gap-3">
                        <span className="w-[6px] h-[6px] rounded-full bg-[#18c5c5]"></span>
                        <p className="text-white/60">{item.Institute}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {activeTab === 'skills' && (
            <div className="flex flex-col gap-[30px] text-center xl:text-left">
              <h3 className="text-4xl font-bold text-[#18c5c5]">
                {skills.title}
              </h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                {skills.description}
              </p>
              <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                {skills.SkillList.map((skill, index) => (
                  <li key={index}>
                    <div>
                      <div className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group hover:shadow-[0_0_15px_#18c5c5] transition-all duration-300">
                        <div className="text-6xl group-hover:text-accent transition-all duration-300 text-[#18c5c5] ">
                          {iconMap[skill.icon]}
                        </div>
                      </div>
                      <p className="capitalize text-white mt-2">{skill.name}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {activeTab === 'about' && (
            <div className="text-center xl:text-left flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold text-[#18c5c5]">
                {about.title}
              </h3>
              <p className="max-w-[600px]  mx-auto xl:mx-0 text-white/60">
                {about.description}
              </p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => (
                  <li
                    key={index}
                    className="flex justify-center items-center xl:justify-start gap-4"
                  >
                    <span className="text-base font-bold text-[#18c5c5]">{item.fieldName} :-</span>
                    <span className="text-base text-[#18c5c5]">{item.fieldValue}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
