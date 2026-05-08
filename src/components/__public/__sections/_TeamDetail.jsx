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
        `  Festus Uwakhemen Asikhia is the visionary Founder and Chief Executive Officer of Festrut Group, a diversified conglomerate with interests spanning real estate, construction, oil and gas, healthcare, logistics, transport, security, education, consulting, and humanitarian development.

He hails from Uzebba in Owan West Local Government Area of Edo State, Nigeria, and has built a strong academic and professional foundation across sociology, social work, human resource management, psychology, law, engineering, governance, and leadership. His academic journey includes a Diploma in Engineering, a Bachelor of Science in Sociology (Ambrose Alli University AAU), a Master of Social Work and Business Administration MBA in Human Resource Management respectively from LAUTECH), Bachelor and Master of Laws (LPJM UK), PhD in Health Management (UNEM), and a Post Doctorate in Psychology (AIU) across institutions in Nigeria, the United Kingdom, the United States, and Central America. He serves as Professor of Governance and Leadership at Atlantic International University, Honolulu, Hawaii, United States.

Uwakhemen began his professional career in education and public service, where he developed a deep commitment to knowledge transfer, governance, and institutional development. His career progressed into academia, consultancy, and leadership roles across multiple sectors, strengthening his expertise in organizational management and strategic development.

In 2010, he founded the Festrut brand, with a vision to build a globally recognized conglomerate delivering sustainable solutions and high-impact developments. Under his leadership, the Group has expanded into multiple subsidiaries, including real estate development, construction services, transport solutions, healthcare services, logistics, security, and social impact initiatives. He is also actively involved in academic leadership and institutional development. He is the owner and promoter of Festrut Estate Katampe, Abuja, Founder and promoter of Festrut Kingdom Estate Badna Orozo, Abuja.
`,
      ],
      image: ceo,
    },
    
    exec_asst_to_ceo: {
      title: 'Executive Director',
      description: [
        ` Sophie Oluchi Odabe is a dynamic and accomplished professional in education and public relations. Her career trajectory reflects a deep commitment to leadership, transformation, and humanitarian efforts, positioning her as a key figure in both corporate and non-profit sectors.

Early career and progression
Sophie began her career at Trinity Private School, initially as an educator. She quickly progressed through various roles, including a volunteer position in public schools, ultimately serving as the Public Relations Officer (PRO) during a leveraged buyout. Her journey through multinational companies has seen her take on Executive Director roles, co-found two successful organizations, and serve as a School Registrar. Her expertise extends to developing visionary strategies, driving pivotal initiatives, and overseeing significant transformations within organizations.

Notable achievements include:
  Co-founding two successful organizations and a university
  Leading a turnaround for a failing project
  Designing PhD curricula in communication and public relations
  Writing instructional materials for online courses on leadership and corporate communication

Entrepreneurship and humanitarian work
Sophie is passionate about nurturing small businesses and enhancing their profitability.
She is actively involved in several humanitarian projects, contributing to organizations such as festunifund.org and the Festrut Charity Foundation. As an Executive Director and Board member of the Festrut Group of Companies, she has played a crucial role in debt recovery and project implementation. She also serves as the Co-founder and Secretary General of the Prestigious Elites Organization United Kingdom.

Specializations and skills
Sophie specializes in public relations, focusing on digital communication, brand management, and event planning. Skills include:
•	Strategic communication planning to elevate brand reputation
•	Effective crisis management strategies to safeguard organizational integrity
•	Building and maintaining media relationships for positive coverage
•	Crafting compelling social media strategies to enhance audience engagement

Interpersonal strengths
•	Exceptional relationship-building capabilities with stakeholders
•	Proven team collaboration skills across diverse groups
•	Effective presentation skills for conveying complex information clearly
•	High adaptability to evolving media landscapes and organizational needs

Education and professional credentials
Bachelor and Master of Arts in English Language
PhD in Public Relations
Certified member of the Nigerian Institute of Management
Additional certifications in computer applications and Space Technology Education

Sophie Oluchi Odabe exemplifies a blend of strategic insight, educational passion, and humanitarian commitment. Her extensive experience in public relations and dedication to elevating others make her a significant contributor to both her profession and the broader community endeavours.

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