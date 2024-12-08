import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import SpecificVenue from './pages/SpecificVenue';
import ContactPage from './pages/Contact';
import Terms from './pages/Terms';
import Register from './pages/Register';
import Frontpage from './pages/Frontpage';
import Profile from './pages/Profile';
import NewVenue from './pages/NewVenue';
import BookingConfirmation from './pages/BookingConfirmation';
import EditVenue from './pages/EditVenue';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Frontpage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="register" element={<Register />} />
          <Route path="terms" element={<Terms />} />
          <Route path="profile" element={<Profile />} />
          <Route path="newVenue" element={<NewVenue />} />
          <Route path="/:venueId" element={<SpecificVenue />} />
          <Route path="/:venueId/editVenue" element={<EditVenue />} />
          <Route path="bookingConfirmation" element={<BookingConfirmation />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;