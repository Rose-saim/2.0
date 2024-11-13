import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useAuth } from '../lib/auth/context';
import LanguageSwitcher from './LanguageSwitcher';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { title: 'Services', path: '/services', submenu: [
      { title: 'B2B Services', path: '/services/b2b' },
      { title: 'B2C Services', path: '/services/b2c' },
      { title: 'B2G Services', path: '/services/b2g' }
    ]},
    { title: 'Courses', path: '/courses' },
    { title: 'Resources', path: '/resources' },
    { title: 'About', path: '/about' }
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-2xl font-bold">
            I AM'AI
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                {item.submenu ? (
                  <div className="relative">
                    <button className="nav-link flex items-center">
                      {item.title}
                      <ChevronDown className="ml-1 w-4 h-4" />
                    </button>
                    <div className="absolute left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link 
                    to={item.path} 
                    className={`nav-link ${
                      location.pathname === item.path ? 'text-blue-600' : 'text-gray-700'
                    }`}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            <LanguageSwitcher />
            
            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard" className="nav-link">Dashboard</Link>
                <button 
                  onClick={logout}
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Logout
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login" className="nav-link">Login</Link>
                <Link 
                  to="/get-started" 
                  className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-colors"
                >
                  Get Started
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <div key={item.title}>
                {item.submenu ? (
                  <>
                    <div className="px-3 py-2 font-medium text-gray-900">
                      {item.title}
                    </div>
                    <div className="pl-4">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem.title}
                          to={subItem.path}
                          className="block px-3 py-2 text-base text-gray-600 hover:text-gray-900"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block px-3 py-2 text-base font-medium text-gray-900 hover:text-gray-600"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.title}
                  </Link>
                )}
              </div>
            ))}
            
            {user ? (
              <>
                <Link 
                  to="/dashboard" 
                  className="block px-3 py-2 text-base font-medium text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Dashboard
                </Link>
                <button 
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="block w-full text-left px-3 py-2 text-base font-medium text-gray-900"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-base font-medium text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/get-started"
                  className="block px-3 py-2 text-base font-medium text-gray-900"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}