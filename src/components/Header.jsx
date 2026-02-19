import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data/businesses';

function ChevronDown({ open }) {
  return (
    <svg
      className={`w-4 h-4 ml-1 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const navRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (navRef.current && !navRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    }
    if (activeDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [activeDropdown]);

  const isDropdownOpen = (catSlug) =>
    activeDropdown === catSlug || (menuOpen && mobileExpanded === catSlug);

  const toggleDropdown = (catSlug) => {
    setActiveDropdown((prev) => (prev === catSlug ? null : catSlug));
  };

  const toggleMobileSubmenu = (catSlug) => {
    setMobileExpanded((prev) => (prev === catSlug ? null : catSlug));
  };

  return (
    <header className="sticky top-0 z-[100] bg-surface border-b border-border shadow-[0_2px_8px_rgba(13,79,79,0.06)]">
      <div className="container flex items-center justify-between min-h-[72px] gap-6">
        <Link
          to="/"
          className="font-[family-name:var(--font-heading)] text-2xl font-bold text-primary tracking-wide hover:text-primary-dark"
          onClick={() => setMenuOpen(false)}
        >
          Lakewood Local
        </Link>

        <button
          type="button"
          className="md:hidden flex flex-col justify-center gap-1.5 w-11 h-11 p-0 bg-transparent border-0 rounded-[var(--radius-sm)] cursor-pointer hover:bg-bg-alt"
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="block w-6 h-0.5 bg-text rounded-sm" />
          <span className="block w-6 h-0.5 bg-text rounded-sm" />
          <span className="block w-6 h-0.5 bg-text rounded-sm" />
        </button>

        <nav
          ref={navRef}
          className={`flex items-center md:flex md:static md:visible md:translate-y-0 md:shadow-none fixed top-[72px] left-0 right-0 max-h-[calc(100vh-72px)] overflow-y-auto bg-surface border-b border-border md:border-b-0 p-6 md:p-0 -translate-y-full invisible md:max-h-none md:overflow-visible transition-all duration-250 ease-out ${
            menuOpen ? 'translate-y-0 visible shadow-[0_12px_40px_rgba(13,79,79,0.1)]' : ''
          }`}
          aria-label="Main navigation"
        >
          <ul className="flex flex-col md:flex-row md:items-center list-none m-0 p-0 gap-0 w-full md:w-auto">
            {categories.map((cat) => (
              <li
                key={cat.slug}
                className="relative border-b border-border md:border-b-0"
                onMouseEnter={() => setActiveDropdown(cat.slug)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <button
                  type="button"
                  className="w-full md:w-auto flex items-center justify-between md:justify-center px-4 py-3 md:py-2.5 text-[0.95rem] font-medium text-text bg-transparent border-0 cursor-pointer font-inherit no-underline transition-colors hover:text-primary"
                  aria-expanded={isDropdownOpen(cat.slug)}
                  aria-haspopup="true"
                  aria-controls={`dropdown-${cat.slug}`}
                  id={`nav-${cat.slug}`}
                  onClick={() => {
                    if (window.innerWidth < 768) {
                      toggleMobileSubmenu(cat.slug);
                    } else {
                      toggleDropdown(cat.slug);
                    }
                  }}
                >
                  {cat.name}
                  <ChevronDown open={isDropdownOpen(cat.slug)} />
                </button>
                <ul
                  id={`dropdown-${cat.slug}`}
                  role="menu"
                  aria-labelledby={`nav-${cat.slug}`}
                  hidden={!isDropdownOpen(cat.slug)}
                  className="m-0 list-none z-10 min-w-0 mt-0 p-0 pl-5 pb-2 pt-1 bg-transparent border-0 rounded-none shadow-none md:absolute md:top-full md:left-0 md:min-w-[200px] md:mt-0 md:p-1.5 md:bg-surface md:border md:border-border md:rounded-[var(--radius-md)] md:shadow-[0_4px_20px_rgba(13,79,79,0.08)]"
                >
                  {cat.children.map((child) => (
                    <li key={child.slug} role="none">
                      <Link
                        to={`/category/${child.slug}`}
                        className="block py-2.5 px-4 text-[0.9rem] text-text rounded-[var(--radius-sm)] hover:bg-bg-alt hover:text-primary md:py-2 md:px-3"
                        role="menuitem"
                        onClick={() => {
                          setMenuOpen(false);
                          setMobileExpanded(null);
                        }}
                      >
                        {child.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}
            <li className="mt-4 md:mt-0 md:ml-2">
              <Link
                to="/get-listed"
                className="block py-2.5 px-4 md:py-2 md:px-4 text-center text-surface bg-accent rounded-[var(--radius-sm)] hover:bg-accent-soft hover:text-surface font-medium text-[0.95rem]"
                onClick={() => setMenuOpen(false)}
              >
                Get Listed
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
