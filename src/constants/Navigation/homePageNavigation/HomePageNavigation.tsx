"use client";
import { homeLinks } from "@/constants/components/links";
import Link from "next/link";
 const Navbar = () => {


  

 

  

  return (
    <nav className="shadow-lg w-full z-1">
      <div className="max-w-7xl mx-auto px-2 py-8 flex items-center justify-between h-25">


        {/* Desktop Nav - Hidden when search is active */}
       
          <div className="hidden md:flex space-x-8 items-center">
            {homeLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-lg font-semibold text-gray-200 hover:text-green-400 transition-colors duration-300"
                style={{
                  padding: '0.5rem 0',
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                {link.name}
              </Link>
            ))}
          </div>
       

    
        
      </div>

      
      
    </nav>
  );
};

export default Navbar;