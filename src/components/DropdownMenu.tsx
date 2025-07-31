import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
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
  isOpen?: boolean;
  onToggle?: () => void;
  onClose?: () => void;
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({
  title,
  items,
  isOpen: controlledIsOpen,
  onToggle,
  onClose,
}) => {
  const [internalIsOpen, setInternalIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : internalIsOpen;

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        if (controlledIsOpen !== undefined && onClose) {
          onClose();
        } else {
          setInternalIsOpen(false);
        }
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [controlledIsOpen, onClose]);

  const handleToggle = () => {
    if (controlledIsOpen !== undefined && onToggle) {
      onToggle();
    } else {
      setInternalIsOpen(!internalIsOpen);
    }
  };

  const handleLinkClick = (link: string) => {
    if (controlledIsOpen !== undefined && onClose) {
      onClose();
    } else {
      setInternalIsOpen(false);
    }

    // Navigate after a short delay to ensure dropdown closes smoothly
    setTimeout(() => {
      navigate(link);
    }, 50);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className="flex items-center space-x-1 text-gray-700 hover:text-[#2E3192] transition-colors"
      >
        <span>{title}</span>
        <ChevronDown size={16} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-[800px] bg-white rounded-lg shadow-xl border border-gray-100 p-6 z-50"
          onClick={(e) => e.stopPropagation()}
        >
          <div
            className={`grid gap-8 ${
              items.length === 3 ? 'grid-cols-3' : items.length === 2 ? 'grid-cols-2' : 'grid-cols-1'
            }`}
          >
            {items.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex}>
                      {item.link ? (
                        <div
                          className="block p-2 rounded-md hover:bg-gray-50 transition-colors cursor-pointer"
                          onMouseDown={(e) => e.stopPropagation()}
                          onClick={(e) => {
                            e.stopPropagation();
                            handleLinkClick(item.link!);
                          }}
                        >
                          <div className="font-medium text-gray-900 mb-1">{item.title}</div>
                          <div className="text-sm text-gray-600">{item.description}</div>
                        </div>
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
