// import logo from './logo.svg';
import './App.css';
import HtnApp from "./HtnApp";
import { Routes, Route } from 'react-router-dom';
import ChoosePage from "./pages/ChoosePage";
import AdminView from './pages/AdminView';
import EmployeeView from './pages/EmployeeView';
import AdminViewStaffs from './pages/AdminViewStaffs';
import AdminViewPromos from './pages/AdminViewPromos';
import AdminViewBranches from './pages/AdminViewBranches';
import AdminViewGuests from './pages/AdminViewGuests';
import AdminViewSilangIncome from './pages/AdminViewSilangIncome';
import AdminViewSilangBookings from './pages/AdminViewSilangBookings';
import AdminViewSilangPerf from './pages/AdminViewSilangPerf';
import AdminViewGentriIncome from './pages/AdminViewGentriIncome';
import AdminViewGentriBookings from './pages/AdminViewGentriBookings';
import AdminViewGentriPerf from './pages/AdminViewGentriPerf';
import AdminViewNasugbuIncome from './pages/AdminViewNasugbuIncome';
import AdminViewNasugbuBookings from './pages/AdminViewNasugbuBookings';
import AdminViewNasugbuPerf from './pages/AdminViewNasugbuPerf';
import EmpViewPromos from './pages/EmpViewPromos';
import EmpViewWhatsNew from './pages/EmpViewWhatsNew';
import EmpViewSilangServices from './pages/EmpViewSilangServices';
import EmpViewSilangProducts from './pages/EmpViewSilangProducts';
import EmpViewGentriServices from './pages/EmpViewGentriServices';
import EmpViewGentriProducts from './pages/EmpViewGentriProducts';
import EmpViewNasugbuServices from './pages/EmpViewNasugbuServices';
import EmpViewNasugbuProducts from './pages/EmpViewNasugbuProducts';



function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<HtnApp />} />
        <Route path="/choosepage" element={<ChoosePage />} />
        <Route path="/adminview" element={<AdminView />} />
        <Route path="/employeeview" element={<EmployeeView />} />
        <Route path="/adminview_staffs" element={<AdminViewStaffs />} />
        <Route path="/adminview_promos" element={<AdminViewPromos />} />
        <Route path="/adminview_branches" element={<AdminViewBranches />} />
        <Route path="/adminview_guests" element={<AdminViewGuests />} />
        <Route path="/adminview_silang_income" element={<AdminViewSilangIncome />} />
        <Route path="/adminview_silang_bookings" element={<AdminViewSilangBookings />} />
        <Route path="/adminview_silang_staff_performance" element={<AdminViewSilangPerf />} />
        <Route path="/adminview_gentri_income" element={<AdminViewGentriIncome />} />
        <Route path="/adminview_gentri_bookings" element={<AdminViewGentriBookings />} />
        <Route path="/adminview_gentri_staff_performance" element={<AdminViewGentriPerf />} />
        <Route path="/adminview_nasugbu_income" element={<AdminViewNasugbuIncome />} />
        <Route path="/adminview_nasugbu_bookings" element={<AdminViewNasugbuBookings />} />
        <Route path="/adminview_nasugbu_staff_performance" element={<AdminViewNasugbuPerf />} />
        <Route path="/empview_promos" element={<EmpViewPromos />} />
        <Route path="/empview_whatsnew" element={<EmpViewWhatsNew />} />
        <Route path="/empview_silang_services" element={<EmpViewSilangServices />} />
        <Route path="/empview_silang_products" element={<EmpViewSilangProducts />} />
        <Route path="/empview_gentri_services" element={<EmpViewGentriServices />} />
        <Route path="/empview_gentri_products" element={<EmpViewGentriProducts />} />
        <Route path="/empview_nasugbu_services" element={<EmpViewNasugbuServices />} />
        <Route path="/empview_nasugbu_products" element={<EmpViewNasugbuProducts />} />
      </Routes>
    </div>
  );
}

export default App;
