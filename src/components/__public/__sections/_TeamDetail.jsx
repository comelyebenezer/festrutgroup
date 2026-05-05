import { useParams } from 'react-router-dom';
import biz1 from './../../../assets/images/ourbusiness/Ride.jpg';
import biz2 from './../../../assets/images/ourbusiness/Food.jpg';
import vivian from './../../../assets/images/ourteam/Vivian.jpg';
import Header from '../__layouts/Header';
import Banner_otherpages from './_Banner_otherpages';
import {Link} from 'react-router-dom';
import ceo from './../../../assets/images/ourteam/CEO.jpg';
import ea from './../../../assets/images/ourteam/_EA.jpg';
import gm from './../../../assets/images/ourteam/_GM.jpg';
import hr from './../../../assets/images/ourteam/_HR.jpg';
import hop from './../../../assets/images/ourteam/_HOP.jpg';
import finance from './../../../assets/images/ourteam/_Finance.jpg';
import admin from './../../../assets/images/ourteam/_Admin.jpg';
import gracious from './../../../assets/images/ourteam/Gracious.jpg';
import precious from './../../../assets/images/ourteam/Precious.jpg';
import favour from './../../../assets/images/ourteam/Favour1.jpg';
import charity from './../../../assets/images/ourteam/Charity.jpg';
import val from './../../../assets/images/ourteam/Val.jpg';
import chris from './../../../assets/images/ourteam/Chris 1.jpg';
import obike from './../../../assets/images/ourteam/Obike 1.jpg';
import lagos_branch_mgr from './../../../assets/images/ourteam/lagos_branch_manager.jpg';
import segun from './../../../assets/images/ourteam/Segun.jpg';
import { UilArrowLeft } from '@iconscout/react-unicons';
    
const TeamDetail = () => {
  const { slug } = useParams();

  // Data for each category
  const teamDetails = {    
    president_grp_ceo: {
      title: 'President/Group CEO',
      description: [
        `Festus Uwakhemen Asikhia is the visionary Founder and Chief Executive Officer of Festrut Group, a diversified conglomerate with interests spanning real estate, construction, oil and gas, healthcare, logistics, transport, security, education, consulting, and humanitarian development.`,

        `He hails from Uzebba in Owan West Local Government Area of Edo State, Nigeria, and has built a strong academic and professional foundation across sociology, social work, human resource management, governance, and leadership. His academic journey includes a Bachelor of Science in Sociology, a Master’s in Social Work (Health Care specialization), a Master’s in Business Administration (Human Resource Management), and advanced doctoral studies in management and psychology across institutions in Nigeria, the United Kingdom, the United States, and Central America.`,

        `Dr. Asikhia began his professional career in education and public service, where he developed a deep commitment to knowledge transfer, governance, and institutional development. His career progressed into academia, consultancy, and leadership roles across multiple sectors, strengthening his expertise in organizational management and strategic development.`,

        `In 2010, he founded Festrut Group, with a vision to build a globally recognized conglomerate delivering sustainable solutions and high-impact developments. Under his leadership, the Group has expanded into multiple subsidiaries, including real estate development, construction services, transport solutions, healthcare services, logistics, security, and social impact initiatives.`,

        `He is also actively involved in academic leadership and institutional development, contributing to research, entrepreneurship education, and leadership training across various platforms. His work reflects a strong commitment to innovation, capacity building, and sustainable development across Africa and beyond.`,

        `Dr. Asikhia is a recipient of multiple national and international recognitions for leadership, peacebuilding, humanitarian service, entrepreneurship, and community development. These honors reflect his contributions across governance, education, business development, and social impact initiatives.`,

        `As a transformational leader, he is driven by integrity, excellence, and service. His vision for Festrut Group is to build a legacy of trust, innovation, and sustainable development that impacts lives globally.`,
      ],
      image: ceo,
    },
    
    exec_asst_to_ceo: {
      title: 'Executive Director',
      description: [
        ` Sophie Oluchi Odabe is a dynamic and accomplished professional in the fields of educaon and public
relaons. Her career trajectory is marked by a deep commitment to leadership, transformaon, and
humanitarian efforts, posioning her as a key figure in both corporate and non-profit sectors.`,

        `Sophie began her career at Trinity Private School, inially as an educaonist. She quickly progressed
through various roles, including a volunteer posion in public schools, ulmately serving as the Public
Relaons Officer (PRO) during a leveraged buyout. Her journey through mulnaonal companies has seen
her take on Execuve Director roles, Co-found two successful organizaons, and serve as a School
Registrar.
Her experse extends to developing visionary strategies, driving pivotal iniaves, and overseeing
significant transformaons within organizaons. Notable achievements include:
 Co-founding two successful organizaons and a university.
 Leading a turnaround for a failing project.
 Designing PhD curricula in communicaon and public relaons.
 Wring instruconal materials for online courses on leadership and corporate communicaon.`,

        ` Sophie is passionate about nurturing small businesses and enhancing their profitability. She is acvely
involved in several humanitarian projects, contribung to organizaons like festunifund.org and the
Festrut Charity Foundaon. As an Execuve Director and Board member of the Festrut Group of
Companies, she has played a crucial role in debt recovery and project implementaon. She also serves as
the Co-founder and Secretary General of the Presgious Elites Organisaon United Kingdom.`,

        `Sophie specializes in public relaons, focusing on digital communicaon, brand management, and event
planning. Her skills include:
 Strategic communicaon planning to elevate brand reputaon.
Effecve crisis management strategies to safeguard organizaonal integrity.
Building and maintaining media relaonships for posive coverage.
Craing compelling social media strategies to enhance audience engagement.
`,

        ` Her interpersonal strengths include:
 Exceponal relaonship-building capabilies with stakeholders.
Proven team collaboraon skills across diverse groups.
 Effecve presentaon skills for conveying complex informaon clearly.
 High adaptability to evolving media landscapes and organizaonal needs`,

        `Sophie holds a Bachelor of Arts and a Master of Arts in English Language, along with a PhD in Public
Relaons. She is also a cerfied member of the Nigerian Instute of Management and has addional
cerficaons in computer applicaons and Space Technology Educaon.
Sophie Oluchi Odabe exemplifies a blend of strategic insight, educaonal passion, and humanitarian
commitment. Her extensive experience in public relaons and her dedicaon to elevang others make her
a significant contributor to both her professional and community endeavours.
`,
      ],
      image: ea,
    },

    gm: {
      title: 'Managing Director',
      description: [
        `Oluwasola Peters is a disnguished trajectory influencer with extensive experience in the construcon
and real estate sectors. Her experse spans construcon management, building producon, estate
management, markeng, and administraon, which she has developed over a career exceeding 15
years.
In her role as a business tycoon, Mrs. Peters has significantly contributed to addressing naonal
demands by providing finished goods directly to customers. She ulizes both local and advanced
technology to ensure mely and efficient delivery of services, thereby enhancing the overall customer
experience and supporng economic growth.
As the Managing Director of Festrut Group, Mrs. Peters oversees the organizaon from its head office
located at Plot 2311, Festrut Estate, Katampe District, Abuja. She possesses a strong academic
foundaon, holding a post-graduate diploma in Construcon Management from Tafawa Balewa
University in Bauchi, a degree in Building Technology from Federal Polytechnic Ado-Eki, and
specialized training in Internaonal Management from Festrut Internaonal Management Instute
(FIMILTD/GTE). This educaonal background equips her with the competencies necessary to navigate
the complexies of the construcon and real estate industries effecvely.
Mrs. Peters has parcipated in various construcon projects across Nigeria, showcasing her leadership
and project management abilies. Her contribuons include serving as a team member on the Zion
Golden City estate construcon project in Akure, Ondo State, and fulfilling the role of Resident Builder at
Salama Holiday Inn in Bauchi. Furthermore, as Project Manager at Basilica Construcon Ltd, she
successfully oversaw the construcon of the School of Science and Mines at the Federal University of
Technology, Akure (FUTA).
Addionally, Mrs. Peters is an acve member of the board of directors at both Festrut Group of
Companies and Avemcord Associates Construcon Nigeria Ltd. Her dedicaon to societal advancement
is evident in her commitment to youth empowerment iniaves, parcularly in providing
developmental training for young individuals, with an emphasis on the girl child.
In her personal life, Mrs Peters is married to Esv. Oisa Peter. She is passionate about problem-solving,
engaging in travel, pursuing shopping opportunies, and dedicang me to prayer.
Her diverse interests and comprehensive experience reflect her commitment to making a meaningful
impact in both her professional and personal endeavors.
`,
      ],
      image: gm,
    },
    grp_biz_operations: {
      title: 'Chief Operations Officer',
      description: [
        `Joseph Akpezi is a highly qualified communicaon professional who brings a diverse skill set and extensive
experience in media, public relaons, informaon and communicaon technology (ICT), and logiscs. He
earned his B.Sc. in Journalism and Mulmedia Communicaons from the University of Cross River in
Calabar, where he acquired a solid foundaon in effecve communicaon strategies and media pracces.
`,

        `Throughout his career, Joseph has honed his networking abilies across both tradional and emerging
media plaorms, allowing him to build strong relaonships and convey brand missions, visions, and values
effecvely. His experse in strategic communicaon ensures that the organizaons he represents maintain
a consistent and impacul presence in the marketplace.
In addion to his communicaon skills, Joseph is a cerfied project management expert. He excels at
overseeing projects from incepon to compleon, meculously ensuring that all targets are achieved and
deadlines are respected. His ability to manage mulple projects simultaneously is a testament to his
organizaonal skills and commitment to excellence.
Joseph's professional journey includes notable roles in various organizaons, such as Asaba Film Academy,
Creave Decors, and Blueprint Newspapers, where he contributed significantly to their communicaons
and public relaons efforts. His entrepreneurial spirit is evident in his business interests, parcularly in the
fields of ICT, logiscs, and transportaon, where he connually seeks innovave soluons to enhance
operaonal efficiency.
Currently, Joseph serves as the Chief Operaons Officer at Festrut Global Shelter Nigeria Limited, where he
plays a pivotal role in driving the company's operaonal strategies and overseeing daily acvies to ensure
opmal performance.
He is commied to professional development, having aended numerous cerficaons that enhance his
skill set and knowledge base. These include Peak Performance Management Training, Effecve Workplace
Communicaon, Designated Non-Financial Business and Professions (DNFBPs), Project Management
Training, Jobberman So Skills Training, Public Relaons, and Data Analysis, among others.
Joseph's dedicaon to connuous learning and development posions him as a valuable asset to any
organizaon.
`,
      ],
      image: hop,
    },
    biz_operations_mgr_lag: {
      title: 'Human Resource Manager',
      description: [
        `Alima Kema Musa is a seasoned HR and Accounng professional with over 12 years of diverse experience in
accounng, financial management, budgeng, human resource management, legal affairs, and
administraon. She holds a Bachelor of Science (B.Sc.) degree in Accounng from the University of Abuja
and is currently pursuing professional cerficaon with the Instute of Chartered Accountants of Nigeria
(ICAN).
Throughout her career, Alima has demonstrated a steadfast commitment to excellence and connuous
learning. Her background reflects a unique blend of accounng experse and human resource
management, underscored by her strong interpersonal and analycal skills. Her proacve approach to
problem-solving and her keen ability to navigate complex organizaonal challenges make her an invaluable
asset in any seng.
Alima's career journey began in 2005 when she took on the role of a Cashier at Adex Beauty & Cosmecs
Salon in Lagos State, soon advancing to a receponist posion at Phoenix Hotel Abuja. In 2011, she
transioned to a more prominent role as the Admin Manager at Musa, Nazifi & Co., a legal and real estate
firm, where she honed her skills in administraon and management.
Currently, Alima serves as the HR/Accountant at Festrut Global Shelter Nigeria Ltd., where she is entrusted
with significant responsibilies in both the human resources and accounng departments. Her role
includes preparing staff payrolls, onboarding new employees, maintaining accurate records, preparing
financial statements, and managing monthly expenditures. Addionally, she collaborates with the legal
officer and managing director, ensuring a streamlined operaonal process while fostering a collaborave
work environment aligned with the company's vision and mission.
Alima is dedicated to professional development, having parcipated in various training programs that
enhance her leadership and financial management skills. Notable among these are her studies at the
London School of African Entrepreneurship and Leadership Studies, corporate finance training with the
Corporate Finance Instute in Canada, and crisis management training with Deltaville Research LLC.
Furthermore, her training with the United Naons in internaonal organizaon management has
equipped her with a global perspecve, enhancing her ability to navigate mulcultural environments.
Alima Kema Musa's mulfaceted experience and unwavering dedicaon to her profession posion her as a
leading figure in the fields of human resources and accounng, commied to driving organizaonal success
through effecve management and strategic financial oversight.
`,
      ],
      image: lagos_branch_mgr,
    },
    branchmgr_abuja: {
      title: 'PA / Media Team Lead',
      description: [
        `Comely Ebenezer is a highly skilled technology professional and strategic operations specialist with a Bachelor of Science (B.Sc.) degree in Computer Science from Nasarawa State University. He possesses advanced certifications in Software Engineering, Full Stack Development, and Artificial Intelligence, reflecting a strong foundation in modern software technologies and emerging digital solutions.

With a solid background in web and application development, Comely has expertise in building scalable, user-centric systems, integrating intelligent solutions, and leveraging technology to solve complex business challenges. His proficiency spans front-end and back-end development, system optimization, and digital innovation, positioning him as a forward-thinking contributor in today’s tech-driven landscape.

He currently serves as the Personal Assistant to the CEO of Festrut Group, where he provides high-level executive support, drives strategic initiatives, and ensures operational efficiency across key business functions. In addition, he leads the Media Team, overseeing digital strategy, brand positioning, and multimedia communications to strengthen the company’s market presence.

Comely combines technical expertise with strong leadership and organizational capabilities, enabling him to bridge the gap between technology and business. He is committed to delivering impactful solutions, driving digital transformation, and contributing to sustainable organizational growth.`,
      ],
      image: charity,
    },
    // grp_hrm: {
    //   title: 'Group Human Resources Manager',
    //   description: [
    //     `Sharon Chiazom is a dedicated and results-oriented professional with extensive experience in Administration, Human Resources, and Customer Service. With a solid educational foundation from Anambra State University Uli, Sharon has honed her skills through years of excellence in the Healthcare and Information Technology industries.
    //     Known for her ability to deliver exceptional service and build strong, positive relationships, Sharon is highly proficient in Complaint Management, Personnel Management, Administrative Skills, Interpersonal Communication, Service Quality, Teamwork, and Customer Service. Her dedication to professionalism and problem-solving has made her an invaluable asset in every organization she’s worked for.
    //     Sharon's strong communication skills and ability to resolve issues swiftly and effectively are key components in her commitment to enhancing organizational success. She is eager to contribute her wealth of expertise to continue driving success in a dynamic, fast-paced organizational setting.`,

    //     `How I Joined Smash Technology
    //     My journey with Smash Technology began when I applied for the role of Human Resource Manager through LinkedIn. I was drawn to the opportunity and took the initiative to express my interest in the position by reaching out directly to the CEO. This proactive step led to an invitation for an interview, during which I had the opportunity to discuss my extensive experience in human resources and customer service. The CEO was impressed with my skills and knowledge, and I was offered the role of Human Resource Manager.
    //     Since joining Smash Technology, I have applied my expertise in talent acquisition to ensure the company attracts and retains a talented workforce. My focus on effective employee management and team collaboration has been integral in achieving organizational goals. I have also worked tirelessly to enhance employee welfare by creating a positive, supportive work environment that encourages professional growth and satisfaction.
    //     My role at Smash Technology has contributed immensely to my personal and professional growth. Every challenge I face at work is an opportunity for development, and I am proud to have navigated these challenges with resilience and a positive mindset. Additionally, working closely with the CEO has been incredibly rewarding; he is not just a boss but also a mentor and father figure. His guidance has helped shape my leadership skills and has given me the tools to succeed in this dynamic industry.`,

    //     `At Smash Technology, I continue to leverage my experience and skills to make a meaningful impact and drive the company's ongoing success.`,
    //   ],
    //   image: hr,
    // },



    grp_head_media_it_communications: {
      title: 'Group Head, Media & I.T. Communications',
      description: [
        `I am Gracious Onyeahialam and I'm passionate about Cybersecurity. I started my career in 2018 after acquiring a B.Sc in Biotechnology, as a Confidential Secretary to the Director of Health in the Federal Ministry of Science, Technology and Innovation, Abuja overseeing a range of parastatals. During this time, I developed strong analytical, communication, and organizational skills that set the foundation for my future endeavors.`,

        `Thereafter, I took on the role of Operations Manager in a computing firm, where my attention to the sensitivity of customer and employee data led me to explore the world of cybersecurity. My transition into the tech landscape opened my eyes to crucial areas such as network security, risk management, ethical hacking, data protection, security compliance, cryptography, cloud security.`,

        `When I joined Smash Technology as a Cybersecurity Analyst, I gained hands-on experience by working on real-time projects and collaborating closely with development teams for web and mobile applications security. I have now been promoted to Head of Media and I.T Communications, where I now lead an 8-man team of talented IT professionals who are very diligent in their roles and always seeking to learn and grow in this ever-evolving tech field.`,

        `I believe in the power of relationships, zero-trust model and kindness, with an understanding that they are key to creating a safer, secured, and more connected digital world.`,
      ],
      image: gracious,
    },

    team_lead_smashwise: {
      title: 'Team Lead for Smashwise',
      description: [
        `My name is Adugba Precious Oluomachukwu - Teamlead for Smashwise`,
        `I joined Smash Technology on 5th June, 2024 as a Customer Support Executive. I still laugh when I think about how I came straight from my previous job, dressed in a suit, for the interview. The CEO, a compassionate man, saw something in me and offered me the position.`,

        `When I resumed duties on June 6th, 2024, I remember staring at my desktop for two whole days, unsure of what to do next. If you know e-commerce, you understand that setting up a successful platform is no easy feat. I quickly realized that this role was more than just answering customer inquiries – it was about proactively reaching out to vendors and driving results.`,

        `The turning point came when the CEO asked for the leads I had generated. That’s when it truly hit me – I needed to focus on vendor acquisition, not just customer support. So, I took it upon myself to learn. I started researching, attending online seminars and absorbing everything I could to improve my skills. With constant encouragement from the CEO, I quickly found my foot.`,

        `From starting as a customer support executive to becoming the team lead of Smashwise, it has been a journey of hard work, dedication, and growth. Setting up an e-commerce platform from scratch is challenging, and there were moments when I felt like giving up. But with God’s guidance, the support of our CEO, and the amazing colleagues I have in Charity John and Favour Jipson – who are truly angels sent from above – I pushed through. May God bless you both abundantly. Amen!`,

        `I’m proud to share that I single-handedly grew our vendor list from 12 to 200 between June and August, before team members were assigned to me.`,

        `Smash Technology has truly transformed me. It has built my confidence, sharpened my intellect and enhanced my leadership skills. I’m still growing, and I’m excited for the future.`,

        `Thank you, Smash Technology. Thank you, CEO – you are a blessing sent to me by God.`,
      ],
      image: precious,
    },


    product_designer: {
      title: 'Lead Designer',
      description: [
        `My name is Mamah Valentine Obumneme, a Lead Designer at Smash Technology, where I have had the privilege of working on a variety of innovative and user-centered products. My passion lies in transforming complex problems into seamless, intuitive designs that enhance user experiences. Over the years, I have honed my skills in areas such as user research, UI/UX design, prototyping, and usability testing, always striving to create solutions that not only look great but also function smoothly.`,

        `At Smash Technology, I have had the opportunity to work on projects that push the boundaries of design, collaborating with talented teams to deliver cutting-edge solutions. My work is deeply rooted in a user-first approach, ensuring that every design decision is made with the user’s needs in mind.`,

        `Working at Smash Technology has been instrumental in shaping my career and expanding my skill set in ways that go beyond design. The company has provided me with invaluable experiences that have allowed me to grow both professionally and personally.`,
        
        `Being part of cross-functional teams has given me hands-on experience in managing design projects from start to finish. I’ve learned to balance creative goals with business objectives, ensuring that we meet deadlines while delivering high-quality results. Collaborating with developers, project managers, and stakeholders has taught me how to effectively manage resources and keep projects on track.`,                                                              
        
        `At Smash Technology, I have worked closely with the QA team, helping to ensure that the products we design meet rigorous quality standards. This experience has sharpened my ability to identify potential issues early in the process, iterate quickly, and maintain a focus on user experience throughout the testing phase.`,

        `My role has also involved collaborating with the marketing team to ensure that our product designs align with the brand’s messaging and target audience. Working alongside marketers, I’ve gained a deeper understanding of how design connects with broader market strategies and how to create visually compelling products that resonate with users.`,

        `One of the most rewarding aspects of my time at Smash Technology has been the relationships I’ve built with colleagues across different departments. I’ve had the chance to collaborate closely with engineers, product managers, and other designers, which has helped me improve my communication skills and learn how to integrate various perspectives into my design process.`,

        `These experiences at Smash Technology have allowed me to become a more well-rounded product designer, capable of contributing to projects from multiple angles. I’m grateful for the growth I’ve experienced here, and I continue to strive for excellence in every project I take on. My journey at Smash Technology has not only shaped me as a designer but also as a versatile professional who understands the full scope of what it takes to create successful, user-centered products.`,
      ],
      image: val,
    
    
    },

    company_secretary: {
      title: 'Secretary',
      description: [
        `Marvellous Kas-Nwogu is an accomplished legal practitioner with extensive experience in corporate law, real estate compliance, and dispute resolution. He currently serves as Company Secretary at FESTRUT Group Ltd, Abuja, where he oversees legal and administrative functions, drafts agreements and legal opinions, ensures regulatory compliance with FCDA, AGIS, and NERC, and represents the Group in court, arbitration, and mediation. He also leads negotiations between subsidiaries, contractors, and third parties, with a strong focus on risk assessment and liability prevention.`,

        `Prior to this role, Marvellous worked as a Senior Associate at Crest and Waterfalls Consulting, specializing in litigation, arbitration, mediation, and energy law. He has also served as Head of Legal and Admin at Colossian Mega Universal Limited, and contributed to legislative drafting during his internship at the National Institute for Legislative and Democratic Studies. His career includes impactful volunteer work with the Triple Justice Foundation (Abuja) and the Legal Aid Council (Kano), where he represented indigent Nigerians and promoted human rights awareness.`,

        `Marvellous holds a Bachelor of Laws (LLB) from Rivers State University and a Barrister-at-Law degree from the Nigerian Law School, both with Second Class Upper honors. He has served as a resource personnel for the Nigerian Airforce (Lagos) and the Army (Abuja) legal studies training.`,

        `With proven expertise in regulatory compliance, contract negotiation, and client representation, Marvellous brings a wealth of legal and administrative knowledge to the real estate sector, ensuring that corporate transactions and property dealings are conducted with precision, transparency, and strategic foresight.`,
      ],
      image: val,
    },


  };

  // Fetch the details for the specific slug
  const category = teamDetails[slug];

  if (!category) {
    return <p>Team member not found!</p>; // Handle invalid slugs
  }

  return (
    <>
    <Header />
    <Banner_otherpages title={category.title} image={category.image} />

    <div className="sections business-detail" id="whoweare">
      <h2 className="title-height">{category.title}</h2>
      {category.description.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
      {category.details && <p>{category.details}</p>}
      {category.website && (
        <Link to={category.website} className="smashtech-button swipe-button">
          Visit {category.title} Website
        </Link>
      )}

      <Link to='/' className="smashtech-button swipe-button"><UilArrowLeft /> Back Home</Link>
    </div>

    </>
  );
};
export default TeamDetail;