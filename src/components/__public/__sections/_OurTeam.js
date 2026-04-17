import { useState } from 'react';
import { UilArrowDown, UilArrowRight } from '@iconscout/react-unicons';
import { Link } from 'react-router-dom';
import ceo from './../../../assets/images/ourteam/CEO.jpg';
import ea from './../../../assets/images/ourteam/_EA.jpg';
import gm from './../../../assets/images/ourteam/_GM.jpg';
import hr from './../../../assets/images/ourteam/_HR.jpg';
import hop from './../../../assets/images/ourteam/_HOP.jpg';
import finance from './../../../assets/images/ourteam/_Finance.jpg';
import admin from './../../../assets/images/ourteam/_Admin.jpg';
import gracious from './../../../assets/images/ourteam//Gracious.jpg';
import charity from './../../../assets/images/ourteam/Charity.jpg';
import precious from './../../../assets/images/ourteam/Precious.jpg';
import val from './../../../assets/images/ourteam/Val.jpg';
import vivian from './../../../assets/images/ourteam/Vivian.jpg';
import chris from './../../../assets/images/ourteam/Chris 1.jpg';
import obike from './../../../assets/images/ourteam/Obike 1.jpg';
import favour from './../../../assets/images/ourteam/Favour1.jpg';
import lagos_branch_mgr from './../../../assets/images/ourteam/lagos_branch_manager.jpg';
import evelyn from './../../../assets/images/ourteam/Evelyn.jpg';
import segun from './../../../assets/images/ourteam/Segun.jpg';
import biz2 from './../../../assets/images/ourbusiness/Food.jpg';

const OurTeam = () => {
  const team = [
    {
      title: 'President/Group CEO',
      description: (() => {
        const fullDescription =
          `Festus Uwakhemen Asikhia is the visionary Founder and Chief Executive Officer of Festrut Group, a diversified conglomerate with interests spanning real estate, construction, oil and gas, healthcare, logistics, transport, security, education, consulting, and humanitarian development.

He hails from Uzebba in Owan West Local Government Area of Edo State, Nigeria, and has built a strong academic and professional foundation across sociology, social work, human resource management, governance, and leadership. His academic journey includes a Bachelor of Science in Sociology, a Master’s in Social Work (Health Care specialization), a Master’s in Business Administration (Human Resource Management), and advanced doctoral studies in management and psychology across institutions in Nigeria, the United Kingdom, the United States, and Central America.

Dr. Asikhia began his professional career in education and public service, where he developed a deep commitment to knowledge transfer, governance, and institutional development. His career progressed into academia, consultancy, and leadership roles across multiple sectors, strengthening his expertise in organizational management and strategic development.

In 2010, he founded Festrut Group, with a vision to build a globally recognized conglomerate delivering sustainable solutions and high-impact developments. Under his leadership, the Group has expanded into multiple subsidiaries, including real estate development, construction services, transport solutions, healthcare services, logistics, security, and social impact initiatives.

He is also actively involved in academic leadership and institutional development, contributing to research, entrepreneurship education, and leadership training across various platforms. His work reflects a strong commitment to innovation, capacity building, and sustainable development across Africa and beyond.

Dr. Asikhia is a recipient of multiple national and international recognitions for leadership, peacebuilding, humanitarian service, entrepreneurship, and community development. These honors reflect his contributions across governance, education, business development, and social impact initiatives.

As a transformational leader, he is driven by integrity, excellence, and service. His vision for Festrut Group is to build a legacy of trust, innovation, and sustainable development that impacts lives globally.`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: ceo,
      slug: 'president_grp_ceo',
    },
    
    {
      title: 'Executive Assistant to CEO',
      description: (() => {
        const fullDescription =
          `As an Executive Assistant to the CEO at Smash Technology, my career journey has been a dynamic and rewarding experience. From managing complex schedules and coordinating high-level meetings to streamlining communication across teams, I’ve gained invaluable insights into organizational operations and strategic decision-making.

          This role has allowed me to develop a diverse skill set, including problem-solving, multitasking, and fostering strong professional relationships. Each challenge has provided an opportunity for growth, enabling me to better anticipate needs and contribute to the company’s success.

          The process has been a continuous learning experience, deepening my understanding of leadership, business processes, and effective collaboration. I’m excited to further expand my knowledge and contribute to impactful initiatives moving forward.

          A brief description of how i joined Smash Technology

          I first came across the vacancy for Smash Technology online, and after reading through the job description, I became intrigued. To learn more about the company, I visited their Instagram page and was immediately impressed by the way the team collaborates. The uniformity in their approach and the positive, dynamic energy stood out to me. It seemed like a place where teamwork and innovation thrive. Having never worked with a tech company before, I saw this as an exciting opportunity to grow and gain valuable experience. I was eager to be part of such a forward-thinking company and contribute to its success.
          
          Ezugwu Onyinyechukwu`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: ea,
      slug: 'exec_asst_to_ceo',
    },
    {
      title: 'General Manager',
      description: (() => {
        const fullDescription =
          `I'm Yahaya Shedrack Abdulkadir, the General Manager Smash Technology. My desire for sales and business development for about 2 decades, grew when i found out that i had a deposit of leadership, skills and idea, and what it takes to meet the needs of clients/customer's at every given point in time. Am a graduate of BSc Economics from a reputable Nigerian university, MBA in marketing, Chartered in Project management, Professional Diploma in Operations management from Blessed cosmopolitan college UK and Chartered in Operations management from the American institute of oil and Gas USA.

          I started my career as a young sales officer in kano that was passionate and enthusiastic about getting results at all cost. In my pursuit for career growth and significant development, i was dedicated, rugged and dogged in ensuring i could climb through all odds just to achieve unprecedented success. However, it's been a magnanimous journey thus far.

          I have a vast experience in business and project development with proven track records of successfully implementing strategic initiatives and driving company's growth. Skilled in identifying opportunities, building partnerships and fostering on client relationships, a strong leadership abilities to lead cross functional teams, manage complex projects, and deliver results within budget and timeline. Am a very good effective communicator with exceptional negotiation and problem-solving skills, committed to fostering innovation and driving continuous improvement. An adept at analyzing market trends, developing actionable strategies, and delivering exceptional value for clients and stakeholders.

          i am committed as the GM in taking Smash technology to greater heights and ensuring that the vision, dreams and aspiration of what will be of the company will be achieved through collective efforts of the entire staff and high level display of expertise in making the company a global brand known for excellence.`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: gm,
      slug: 'gm',
    },
    {
      title: 'Group Head of Business Operations',
      description: (() => {
        const fullDescription =
          `Meet Claire Aguolu, Group Business OperationsAs the Head of Operations at Smash Technology I’m honored to lead the team that ensures our technology-driven vision is seamlessly brought to life. With a strong passion for operational excellence and a deep understanding of scaling businesses in the tech industry, my role revolves around optimizing processes, fostering innovation, and driving sustainable growth.

          My journey to Smash Technology has been an exciting blend of challenges and accomplishments. With over 8 years of experience across specific areas, like the operational strategy, Client Relationship, Supply Chain Management, Sales and Process improvement, I’ve had the privilege of working with diverse teams across the Finance and Hospitality industry. My career began at Wema Bank PlC where I had an impactful role working in the operations department as a Branch Service Associate and later transitioned into the Hospitality industry which solidified my expertise in Operational excellence and Optimization What drew me to Smash Technology was not just its innovative technology but also its commitment to always striving for Excellence, Integrity, Commitment, Innovation and Optimal service delivery.

          Joining this dynamic organization has allowed me to combine my operational acumen with a forward-thinking team that thrives on collaboration and creativity. At Smash Technology, I am dedicated to building systems that enable our teams to innovate fearlessly, deliver exceptional value to our clients, and set new industry standards. Together, we’re shaping a future where technology empowers people and businesses to achieve more.

          I’m thrilled to be part of this journey, and I look forward to contributing to Smash Technology's legacy of excellence.`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: hop,
      slug: 'grp_biz_operations',
    },
    {
      title: 'Business Operations Manager, Lagos',
      description: (() => {
        const fullDescription =
          `My name is Igbinai Tehilah Uche. 
          A dedicated and highly motivated professional with a background in banking, finance, customer service, operations, administrative management ,and a vast knowledge and certification in healthcare.

          I am currently serving as the Lagos State Branch Operations Manager at Smash Technology, where I oversee business processes to ensure goal oriented operations.

          With a strong passion for tech innovation and business transformation, I joined Smash Technology to further my passion for and excellence in the tech industry. This role has enabled me to integrate my diverse skill set with the company’s progressive vision, achieving significant outcomes.
          I am dedicated to contributing a distinctive combination of skills and experience that strengthens the company’s commitment to delivering satisfying solutions

          In my capacity as Operations Manager, I have contributed to refining internal workflows, strengthening team collaborations, and spearheading initiatives that align with the company’s strategic goals.

          Smash Technology, in turn, has significantly enriched my professional journey by fostering a culture of learning and innovation, empowering me to grow as a leader in the tech industry.

          I look forward to continuing to grow with the Smash Technology and achieving greater success together.`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: lagos_branch_mgr,
      slug: 'biz_operations_mgr_lag',
    },
    {
      title: 'Branch Manager, Abuja',
      description: (() => {
        const fullDescription =
          `My name is Charity John, and I am the Business Operations Manager, Abuja. Customer service is more than just a role for me, it’s a passion. 

          My love for helping people and solving problems inspired me to pursue this field as a career.

          I joined Smash Technology in June 2024 as a Customer Service Executive and was promoted to Team Lead within three months. This role has allowed me to refine my leadership skills, enhance communication, and contribute meaningfully to the company’s growth.

          Since I joined till date, my amazing team and I have achieved significant milestones, including converting leads into paying clients and boosting customer satisfaction by 80%. Through proactive engagement and streamlined processes, we’ve built stronger connections with clients and enhanced their overall experience.

          I’m motivated by a desire to help people overcome challenges and achieve their goals. Every interaction is an opportunity to create value, whether for clients or my team.

          I aim to help Smash Technology double its achievements, grow its client base, and set new benchmarks for customer satisfaction. With focused strategies and teamwork, I believe we can elevate the company to even greater heights.
          `;
        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: charity,
      slug: 'branchmgr_abuja',
    },

    // {
    //   title: 'Group Human Resources Manager',
    //   description: (() => {
    //     const fullDescription =
    //       `Sharon Chiazom is a dedicated and results-oriented professional with extensive experience in Administration, Human Resources, and Customer Service. With a solid educational foundation from Anambra State University Uli, Sharon has honed her skills through years of excellence in the Healthcare and Information Technology industries.
    //       Known for her ability to deliver exceptional service and build strong, positive relationships, Sharon is highly proficient in Complaint Management, Personnel Management, Administrative Skills, Interpersonal Communication, Service Quality, Teamwork, and Customer Service. Her dedication to professionalism and problem-solving has made her an invaluable asset in every organization she’s worked for.
    //       Sharon's strong communication skills and ability to resolve issues swiftly and effectively are key components in her commitment to enhancing organizational success. She is eager to contribute her wealth of expertise to continue driving success in a dynamic, fast-paced organizational setting.

    //       How I Joined Smash Technology
    //       My journey with Smash Technology began when I applied for the role of Human Resource Manager through LinkedIn. I was drawn to the opportunity and took the initiative to express my interest in the position by reaching out directly to the CEO. This proactive step led to an invitation for an interview, during which I had the opportunity to discuss my extensive experience in human resources and customer service. The CEO was impressed with my skills and knowledge, and I was offered the role of Human Resource Manager.
    //       Since joining Smash Technology, I have applied my expertise in talent acquisition to ensure the company attracts and retains a talented workforce. My focus on effective employee management and team collaboration has been integral in achieving organizational goals. I have also worked tirelessly to enhance employee welfare by creating a positive, supportive work environment that encourages professional growth and satisfaction.
    //       My role at Smash Technology has contributed immensely to my personal and professional growth. Every challenge I face at work is an opportunity for development, and I am proud to have navigated these challenges with resilience and a positive mindset. Additionally, working closely with the CEO has been incredibly rewarding; he is not just a boss but also a mentor and father figure. His guidance has helped shape my leadership skills and has given me the tools to succeed in this dynamic industry.

    //       At Smash Technology, I continue to leverage my experience and skills to make a meaningful impact and drive the company's ongoing success.`;

    //     return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
    //   })(),
    //   image: hr,
    //   slug: 'grp_hrm',
    // },
   
    {
      title: 'Lead Designer',
      description: (() => {
        const fullDescription =
          `My name is Mamah Valentine Obumneme, a Lead Designer at Smash Technology, where I have had the privilege of working on a variety of innovative and user-centered products. My passion lies in transforming complex problems into seamless, intuitive designs that enhance user experiences. Over the years, I have honed my skills in areas such as user research, UI/UX design, prototyping, and usability testing, always striving to create solutions that not only look great but also function smoothly.

          At Smash Technology, I have had the opportunity to work on projects that push the boundaries of design, collaborating with talented teams to deliver cutting-edge solutions. My work is deeply rooted in a user-first approach, ensuring that every design decision is made with the user’s needs in mind.

          Working at Smash Technology has been instrumental in shaping my career and expanding my skill set in ways that go beyond design. The company has provided me with invaluable experiences that have allowed me to grow both professionally and personally.
          Being part of cross-functional teams has given me hands-on experience in managing design projects from start to finish. I’ve learned to balance creative goals with business objectives, ensuring that we meet deadlines while delivering high-quality results. Collaborating with developers, project managers, and stakeholders has taught me how to effectively manage resources and keep projects on track.                                                              
          At Smash Technology, I have worked closely with the QA team, helping to ensure that the products we design meet rigorous quality standards. This experience has sharpened my ability to identify potential issues early in the process, iterate quickly, and maintain a focus on user experience throughout the testing phase.

          My role has also involved collaborating with the marketing team to ensure that our product designs align with the brand’s messaging and target audience. Working alongside marketers, I’ve gained a deeper understanding of how design connects with broader market strategies and how to create visually compelling products that resonate with users.

          One of the most rewarding aspects of my time at Smash Technology has been the relationships I’ve built with colleagues across different departments. I’ve had the chance to collaborate closely with engineers, product managers, and other designers, which has helped me improve my communication skills and learn how to integrate various perspectives into my design process.

          These experiences at Smash Technology have allowed me to become a more well-rounded product designer, capable of contributing to projects from multiple angles. I’m grateful for the growth I’ve experienced here, and I continue to strive for excellence in every project I take on. My journey at Smash Technology has not only shaped me as a designer but also as a versatile professional who understands the full scope of what it takes to create successful, user-centered products.`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: val,
      slug: 'product_designer',
    },
       
    {
      title: 'Lead Full Stack Engineer',
      description: (() => {
        const fullDescription =
          `I am Uwem Akpabot. I emphasize that software should be created in a way that it is easy to maintain in the long run. 
        Engineering and proper Architecture should be applied to software to make it easy to use, easy to reuse or modify, and perform flawlessly over 
        a long period of time and continue to meet users' needs.

        In 2013, I earned a Master's Degree with Merit in Software Engineering in the UK - University of Greenwich, London, I am a Microsoft Certified Professional 
        with progressive professional experience working with several technologies for over a decade. FHI 360, Luday, Zyzics, and Tasty Foods Belvedere 
        are just few of the organizations that my productivity was showcased with good leadership quality.

        Joining Smash Technology is a dream come true; a vision that aligns with mine. Vibrant, innovative, and smart place to work in. 
        A visionary CEO and intelligent teams across brands; they push my drive even further.`;

        return fullDescription.slice(0, 118) + (fullDescription.length > 100 ? '...' : '');
      })(),
      image: biz2,
      slug: 'leadfs',
    },
  ]; 

  const [visibleProfiles, setVisibleProfiles] = useState(14);  // Start with the first 14 profiles visible

  const handleLoadMore = () => {
    setVisibleProfiles((prev) => prev + 6);  // Load 6 more profiles
  };

  return (
    <>
    <div className="sections meetourteam" id="ourbusiness">
      <h2>Meet Our Team</h2>
        
      <div className="c2 c2-sm c1-xs">

        {/* {team.map((categ, index) => ( */}
        {team.slice(0, visibleProfiles).map((categ, index) => (
          <div key={index} className="business-container">
            <img src={categ.image} className="team" title="" alt="" />
            <h3 className="team">{categ.title}</h3>
            <p>{categ.description}</p>
            <Link to={`/team/${categ.slug}`}>Read More <UilArrowRight /></Link>
          </div>
        ))}
      </div>

      {visibleProfiles < team.length && (
        <p className="text-center">
          <button onClick={handleLoadMore} className="text-dark bg-white">
            <b>Load More Profiles</b> <UilArrowDown />
          </button>
        </p>
      )}
    </div>
    </>
  )
}
export default OurTeam;