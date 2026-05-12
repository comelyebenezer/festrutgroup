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
      title: 'President / Group CEO',
      description: [
        `  Festus Uwakhemen Asikhia is an author, the visionary Founder and Chief Executive Officer of Festrut Group, a diversified conglomerate with interests spanning real estate, construction, oil and gas, healthcare, logistics, transport, security, education, consulting, and humanitarian development.

He hails from Uzebba in Owan West Local Government Area of Edo State, Nigeria, and has built a strong academic and professional foundation across sociology, social work, human resource management, psychology, law, engineering, governance, and leadership. His academic journey includes a Diploma in Engineering, a Bachelor of Science in Sociology (Ambrose Alli University AAU), a Master of Social Work and Business Administration MBA in Human Resource Management respectively from LAUTECH), Bachelor and Master of Laws (LPJM UK), PhD in Health Management (UNEM), and a Post Doctorate in Psychology (AIU) across institutions in Nigeria, the United Kingdom, the United States, and Central America. Prof. Uwakhemen serves as Professor of Governance and Leadership at Atlantic International University, Honolulu, Hawaii, United States and Honorary Director at the Pebble Hills University, Belama, Belize.

Prof. Uwakhemen began his professional career in education and public service, where he developed a deep commitment to knowledge transfer, governance, and institutional development. His career progressed into academia, consultancy, and leadership roles across multiple sectors, strengthening his expertise in organizational management and strategic development. He has a track record of published journals, books and academic papers on academia.edu and Amazon. He is the author Nigeria: The Anatomy of Her existence, Mastering the Art of	 Mental Stability for Business Success and lots more.  

In 2010, he founded the Festrut brand, with a vision to build a globally recognized conglomerate delivering 
sustainable solutions and high-impact developments. Under his leadership, the Group has expanded into multiple 
subsidiaries, including real estate development, construction services, transport solutions, healthcare services, 
logistics, security, and social impact initiatives. He is also actively involved in academic leadership and 
institutional development. He is the owner and promoter of Festrut Estate Katampe, Abuja, Founder and promoter 
of Festrut Kingdom Estate Badna Orozo, Nasarawa State.

`,
      ],
      image: ceo,
    },
    
    exec_asst_to_ceo: {
      title: 'Executive Director',
      description: [
        ` Sophie Oluchi Odabe is a dynamic and accomplished professional in education and public relations. Her career trajectory reflects a deep commitment to leadership, transformation, and humanitarian efforts, positioning her as a key figure in both corporate and non-profit sectors.

Early career and progression:
Sophie began her career at Trinity Private School, initially as an educator. She quickly progressed through various roles, including a volunteer position in public schools, ultimately serving as the Public Relations Officer (PRO) during a leveraged buyout. Her journey through multinational companies has seen her take on Executive Director roles, co-found two successful organizations, and serve as a School Registrar. Her expertise extends to developing visionary strategies, driving pivotal initiatives, and overseeing significant transformations within organizations.

Notable achievements include:
  Co-founding two successful organizations and a university
  Leading a turnaround for a failing project
  Designing PhD curricula in communication and public relations
  Writing instructional materials for online courses on leadership and corporate communication

Entrepreneurship and humanitarian work:
Sophie is passionate about nurturing small businesses and enhancing their profitability.
She is actively involved in several humanitarian projects, contributing to organizations such as festunifund.org and the Festrut Charity Foundation. As an Executive Director and Board member of the Festrut Group of Companies, she has played a crucial role in debt recovery and project implementation. She also serves as the Co-founder and Secretary General of the Prestigious Elites Organization United Kingdom.

Specializations and skills:
Sophie specializes in public relations, focusing on digital communication, brand management, and event planning. Skills include:
•	Strategic communication planning to elevate brand reputation
•	Effective crisis management strategies to safeguard organizational integrity
•	Building and maintaining media relationships for positive coverage
•	Crafting compelling social media strategies to enhance audience engagement

Interpersonal strengths:
•	Exceptional relationship-building capabilities with stakeholders
•	Proven team collaboration skills across diverse groups
•	Effective presentation skills for conveying complex information clearly
•	High adaptability to evolving media landscapes and organizational needs

Education and professional credentials:
Bachelor and Master of Arts in English Language
PhD in Public Relations
Certified member of the Nigerian Institute of Management
Additional certifications in computer applications and Space Technology Education.

Sophie Oluchi Odabe exemplifies a blend of strategic insight, educational passion, and humanitarian commitment. Her extensive experience in public relations and dedication to elevating others make her a significant contributor to both her profession and the broader community endeavours.

`,
      ],
      image: ea,
    },

    gm: {
      title: 'Managing Director',
      description: [
        `Oluwasola Peters is a distinguished trajectory influencer with extensive experience in the construction and real estate sectors. Her expertise spans construction management, building production, estate management, marketing, and administration, which she has developed over a career exceeding 15 years.

In her role as a business tycoon, Mrs. Peters has significantly contributed to addressing national demands by providing finished goods directly to customers. She utilizes both local and advanced technology to ensure timely and efficient delivery of services, thereby enhancing the overall customer experience and supporting economic growth.

As the Managing Director of Festrut Group, Mrs. Peters oversees the organization from its head office located at Plot 2311, Festrut Estate, Katampe District, Abuja. She possesses a strong academic foundation, holding a post-graduate diploma in Construction Management from Tafawa Balewa University in Bauchi, a degree in Building Technology from Federal Polytechnic Ado-Ekiti, and specialized training in International Management from Festrut International Management Institute (FIMILTD/GTE). This educational background equips her with the competencies necessary to navigate the complexities of the construction and real estate industries effectively.

Mrs. Peters has participated in various construction projects across Nigeria, showcasing her leadership and project management abilities. Her contributions include serving as a team member on the Zion Golden City estate construction project in Akure, Ondo State, and fulfilling the role of Resident Builder at Salama Holiday Inn in Bauchi. Furthermore, as Project Manager at Basilica Construction Ltd, she successfully oversaw the construction of the School of Science and Mines at the Federal University of Technology, Akure (FUTA).

Additionally, Mrs. Peters is an active member of the boards of directors at both Festrut Group of Companies and Avemcord Associates Construction Nigeria Ltd. Her dedication to societal advancement is evident in her commitment to youth empowerment initiatives, particularly in providing developmental training for young individuals, with an emphasis on the girl child.

In her personal life, Mrs. Peters is married to Esv. Oisa Peters.
She is passionate about problem-solving, travel, shopping opportunities, and dedicating time to prayer. Her diverse interests and comprehensive experience reflect her commitment to making a meaningful impact in both her professional and personal endeavours.

`,
      ],
      image: gm,
    },
    grp_biz_operations: {
      title: 'Chief Operations Officer',
      description: [
        `Joseph Akpezi is a highly qualified communications professional who brings a diverse skill set and extensive experience in media, public relations, information and communications technology (ICT), and logistics. He earned his B.Sc. in Journalism and Multimedia Communications from the University of Cross River in Calabar, where he built a solid foundation in effective communication strategies and media practices.

Throughout his career, Joseph has honed his networking abilities across both traditional and emerging media platforms, enabling him to build strong relationships and convey brand missions, visions, and values effectively. His expertise in strategic communication ensures that the organizations he represents maintain a consistent and impactful presence in the marketplace. In addition to his communication skills, Joseph is a certified project management expert. He excels at overseeing projects from inception to completion, meticulously ensuring that all targets are achieved and deadlines are met. His ability to manage multiple projects simultaneously is a testament to his organizational skills and commitment to excellence.

Joseph's professional journey includes notable roles in various organizations, such as Asaba Film Academy, Creative Decors, and Blueprint Newspapers, where he contributed significantly to their communications and public relations efforts. His entrepreneurial spirit is evident in his business interests, particularly in the fields of ICT, logistics, and transportation, where he continually seeks innovative solutions to enhance operational efficiency.

Currently, Joseph serves as the Chief Operations Officer at Festrut Global Shelter Nigeria Limited, where he plays a pivotal role in driving the company's operational strategies and overseeing daily activities to ensure optimal performance. He is committed to professional development, having attended numerous certifications that enhance his skill set and knowledge base. These include Peak Performance Management Training, Effective Workplace Communication, Designated Non-Financial Business and Professions (DNFBPs), Project Management Training, Jobberman So Skills Training, Public Relations, and Data Analysis, among others. Joseph's dedication to continuous learning and development positions him as a valuable asset to any organization.

`,
      ],
      image: hop,
    },
    biz_operations_mgr_lag: {
      title: 'Human Resource Manager',
      description: [
        `Alima Kema Musa is a seasoned HR and Accounting professional with over 12 years of diverse experience in accounting, financial management, budgeting, human resource management, legal affairs, and administration. She holds a Bachelor of Science (B.Sc.) degree in Accounting from the University of Abuja and is currently pursuing professional certification with the Institute of Chartered Accountants of Nigeria (ICAN). Throughout her career, Alima has demonstrated a steadfast commitment to excellence and continuous learning. Her background reflects a unique blend of accounting expertise and human resource management, underscored by her strong interpersonal and analytical skills. Her proactive approach to problem-solving and her keen ability to navigate complex organizational challenges make her an invaluable asset in any setting. Alima's career journey began in 2005 when she took on the role of a Cashier at Adex Beauty & Cosmetics Salon in Lagos State, soon advancing to a receptionist position at Phoenix Hotel Abuja. In 2011, she transitioned to a more prominent role as the Admin Manager at Musa, Nazifi & Co., a legal and real estate firm, where she honed her skills in administration and management. Currently, Alima serves as the HR/Accountant at Festrut Global Shelter Nigeria Ltd., where she is entrusted with significant responsibilities in both the human resources and accounting departments. Her role includes preparing staff payrolls, onboarding new employees, maintaining accurate records, preparing financial statements, and managing monthly expenditures. Additionally, she collaborates with the legal officer and managing director, ensuring a streamlined operational process while fostering a collaborative work environment aligned with the company's vision and mission. Alima is dedicated to professional development, having participated in various training programs that enhance her leadership and financial management skills. Notable among these are her studies at the London School of African Entrepreneurship and Leadership Studies, corporate finance training with the Corporate Finance Institute in Canada, and crisis management training with Deltaville Research LLC. Furthermore, her training with the United Nations in international organization management has equipped her with a global perspective, enhancing her ability to navigate multicultural environments. Alima Kema Musa's multifaceted experience and unwavering dedication to her profession position her as a leading figure in the fields of human resources and accounting, committed to driving organizational success through effective management and strategic financial oversight.
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


    company_secretary: {
      title: 'Company Secretary',
      description: [
        ` Marvellous Kas-Nwogu is an accomplished legal practitioner with extensive experience in corporate law, real estate compliance, and dispute resolution. He currently serves as Company Secretary at FESTRUT Group Ltd, Abuja, where he oversees legal and administrative functions, drafts agreements and legal opinions, ensures regulatory compliance with FCDA, AGIS, and NERC, and represents the Group in court, arbitration, and mediation. He also leads negotiations between subsidiaries, contractors, and third parties, with a strong focus on risk assessment and liability prevention.
Prior to this role, Marvellous worked as a Senior Associate at Crest and Waterfalls Consulting, specializing in litigation, arbitration, mediation, and energy law. He has also served as Head of Legal and Admin at Colossian Mega Universal Limited, and contributed to legislative drafting during his internship at the National Institute for Legislative and Democratic Studies. His career includes impactful volunteer work with the Triple Justice Foundation (Abuja) and the Legal Aid Council (Kano), where he represented indigent Nigerians and promoted human rights awareness.
Marvellous holds a Bachelor of Laws (LLB) from Rivers State University and a Barrister-at-Law degree from the Nigerian Law School, both with Second Class Upper honors. He has served as a resource personnel for the Nigerian Airforce (Lagos) and the Army (Abuja) legal studies training. 
With proven expertise in regulatory compliance, contract negotiation, and client representation, Marvellous brings a wealth of legal and administrative knowledge to the real estate sector, ensuring that corporate transactions and property dealings are conducted with precision, transparency, and strategic foresight.
`,
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
      {category.description.map((paragraph, idx) => (
        paragraph.split(/\n\s*\n/).filter(p => p.trim()).map((p, i) => (
          <p key={`${idx}-${i}`}>{p.trim()}</p>
        ))
      ))}
      {category.details && <p>{category.details}</p>}
      {category.website && (
        <Link to={category.website} className="smashtech-button swipe-button">
          Visit {category.title} Website
        </Link>
      )}

      <Link to='/about' className="smashtech-button swipe-button"><UilArrowLeft /> Back to Team</Link>
    </div>

    </>
  );
};
export default TeamDetail;