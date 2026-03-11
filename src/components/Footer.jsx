import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-auto py-12 px-6 bg-gradient-to-b from-primary-dark to-[#083f42] text-white/90 border-t border-white/10">
      <div className="container text-center">
        <nav className="flex flex-wrap justify-center gap-6 sm:gap-8 mb-6" aria-label="Footer">
          <Link to="/privacy" className="text-[0.875rem] text-white/75 hover:text-white transition-colors duration-200">
            Privacy
          </Link>
          <Link to="/get-listed" className="text-[0.875rem] text-white/75 hover:text-white transition-colors duration-200">
            Get Listed
          </Link>
          <Link to="/contact" className="text-[0.875rem] text-white/75 hover:text-white transition-colors duration-200">
            Contact
          </Link>
        </nav>
        <p className="m-0 text-[0.8125rem] text-white/55">
          © {new Date().getFullYear()} Lakewood Local
        </p>
      </div>
    </footer>
  );
}
