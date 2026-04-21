import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import People from './__public/__sections/About/People';
import InvestorRelations from './__public/__sections/About/InvestorRelations';
import DeptMediaIT from './__public/__sections/Departments/Dept_MediaIT';
import JobApplicationForm from './pages/Careers/JobApplicationForm';
import Footer from './__public/__layouts/Footer';
import DeptSmashTravels from './__public/__sections/Departments/Dept_SmashTravels';
import DeptRidesmash from './__public/__sections/Departments/Dept_Ridesmash';
import DeptSmashwise from './__public/__sections/Departments/Dept_Smashwise';
import DeptSalesMarketing from './__public/__sections/Departments/Dept_SalesMarketing';
import BuyShares from './pages/Investment/BuyShares';
import InvestmentsWithROI from './pages/Investment/InvestmentsWithROI';
import Careers from './pages/Careers/Careers';
import Blog from './pages/Media/Blog';
import Faq from './pages/Media/Faq';
import InvestmentForm from './pages/Investment/InvestmentForm';
import SendEmail from './pages/Investment/SendEmail';
import PressRelease from './pages/Media/PressRelease';
import BusinessDetail from './__public/__sections/_BusinessDetail';
import AllBusinesses from './__public/__sections/AllBusinesses';
import TeamDetail from './__public/__sections/_TeamDetail';
import Login from './pages/Investment/Login';
import Dashboard from './pages/Investment/Dashboard';
import Logout from './pages/Investment/Logout';
import LiveChatWidget from './__public/__sections/_misc/LiveChatWidget';
import BuySharesForm from './pages/Investment/BuySharesForm';
import PrivacyPolicy from './pages/Other/PrivacyPolicy';
import TermsAndConditions from './pages/Other/TermsAndConditions';
import PasswordPolicy from './pages/Other/PasswordPolicy';
import CorporateDocs from './pages/About/Corporate_Docs';
import Newsletter from './__public/__sections/_Newsletter';

const Main = () => {
  const company =  'Smash Technology';

  return (
    <>  
    <Routes>
      <Route path="" element={<Home company={company} />} />
      <Route path="/business/:slug" element={<BusinessDetail />} />
      <Route path="/all-businesses" element={<AllBusinesses />} />
      <Route path="/team/:slug" element={<TeamDetail />} />
      <Route path="/about" element={<About company={company} />} />
      <Route path="/smash-people" element={<People company={company} />} />
      <Route path="/investor-relations" element={<InvestorRelations company={company} />} />
      <Route path="/careers" element={<Careers company={company} />} />
      <Route path="/media-it-department" element={<DeptMediaIT company={company} />} />
      <Route path="/smash-travels-department" element={<DeptSmashTravels company={company} />} />
      <Route path="/ridesmash-department" element={<DeptRidesmash company={company} />} />
      <Route path="/smashwise-department" element={<DeptSmashwise company={company} />} />
      <Route path="/sales-marketing-department" element={<DeptSalesMarketing company={company} />} />

      <Route path="/buy-shares" element={<BuyShares company={company} />} />
      <Route path="/buy-shares-form" element={<BuySharesForm company={company} />} />
      <Route path="/invest-with-us" element={<InvestmentsWithROI company={company} />} />
      <Route path="/login" element={<Login company={company} />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/dashboard" element={<Dashboard company={company} />} />
      <Route path="/careers" element={<Careers company={company} />} />
      <Route path="/livechat" element={<LiveChatWidget />} />
      
      {/* Media */}
      <Route path="/blog" element={<Blog company={company} />} />
      <Route path="/faq" element={<Faq company={company} />} />
      <Route path="/press-release" element={<PressRelease company={company} />} />

      <Route path="/job-application" element={<JobApplicationForm company={company} />} />
      <Route path="/investor-signup" element={<InvestmentForm company={company} />} />
      <Route path="/send-email" element={<SendEmail company={company} />} />

      <Route path="/privacypolicy" element={<PrivacyPolicy company={company} />} />
      <Route path="/termsandconditions" element={<TermsAndConditions company={company} />} />
      <Route path="/passwordpolicy" element={<PasswordPolicy company={company} />} />
      <Route path="/corporate-documents" element={<CorporateDocs company={company} />} />
    </Routes>

    <Newsletter />
    <Footer />
    </>
  );
}
export default Main;
