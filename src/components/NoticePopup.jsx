import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';

const NoticePopup = () => {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(false);
    }, 4000); // Auto-close after 4 seconds
    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="relative bg-[#ffffff] rounded-lg shadow-2xl p-6 max-w-[595px] w-full max-h-[90vh] overflow-hidden">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-2 bg-[#4cbbe0] text-[#ffffff] p-2 rounded-full hover:bg-[#1c5292] transition-colors duration-300"
        >
          <X size={20} />
        </button>

        {/* Notice Image */}
        <img
          src={import.meta.env.BASE_URL + 'images/kic-notice.jpeg'}
          alt="KIC Education Notice"
          className="w-full h-auto object-contain"
        />
      </div>
    </div>
  );
};

export default NoticePopup;