import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

interface DropdownItem {
  title: string;
  description: string;
  link?: string;
}

interface DropdownCategory {
  category: string;
  items: DropdownItem[];
}

interface DropdownMenuProps {
  title: string;
  items: DropdownCategory[];
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-1 text-gray-700 hover:text-[#2E3192] transition-colors"
        onMouseEnter={() => setIsOpen(true)}
      >
        <span>{title}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-100 p-6 z-50"
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className={`grid gap-8 ${items.length === 3 ? 'grid-cols-3' : items.length === 2 ? 'grid-cols-2' : 'grid-cols-1'}`}>
            {items.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.link ? (
                        <Link
                          to={item.link}
                          className="block p-2 rounded-md hover:bg-gray-50 transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          <div className="font-medium text-gray-900 mb-1">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </Link>
                      ) : (
                        <div className="block p-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer">
                          <div className="font-medium text-gray-900 mb-1">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;