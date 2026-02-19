import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="mt-auto py-12 px-6 bg-primary-dark text-white/90">
      <div className="container text-center">
        <div className="flex flex-wrap justify-center gap-4 gap-x-8 mb-6">
          <Link to="/privacy" className="text-white/90 text-[0.95rem] font-medium hover:text-white hover:underline">
            Privacy Policy
          </Link>
          <Link to="/get-listed" className="text-white/90 text-[0.95rem] font-medium hover:text-white hover:underline">
            Add Your Business
          </Link>
          <Link to="/contact" className="text-white/90 text-[0.95rem] font-medium hover:text-white hover:underline">
            Contact
          </Link>
        </div>
        <p className="m-0 text-[0.9rem] text-white/75">
          © {new Date().getFullYear()} Lakewood Local. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
