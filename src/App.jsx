import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import BusinessDetailPage from './pages/BusinessDetailPage';
import CategoryPage from './pages/CategoryPage';
import GetListedPage from './pages/GetListedPage';
import PrivacyPage from './pages/PrivacyPage';

function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/business/:slug" element={<BusinessDetailPage />} />
          <Route path="/category/:slug" element={<CategoryPage />} />
          <Route path="/get-listed" element={<GetListedPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}
