import React from 'react'

const Footer = () => {
  return (
    <div>
       <footer className="mt-24 border-t border-neutral-800 tracking-wide">
      
      <div className="max-w-6xl mx-auto px-4 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

        
        <div>
          <h3 className="text-xl font-medium mb-4">
            Our Startup Freelancer <span className="text-orange-500">(OSF)</span>
          </h3>
          <p className="text-neutral-400 text-sm leading-relaxed">
            Digital Services for Startups, Creators & Businesses.
          </p>
        </div>

        
        <div>
          <h4 className="text-lg mb-4 text-white">Quick Links</h4>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Home</li>
            <li className="hover:text-orange-500 cursor-pointer">About</li>
            <li className="hover:text-orange-500 cursor-pointer">Services</li>
            <li className="hover:text-orange-500 cursor-pointer">Pricing</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg mb-4 text-white">Services</h4>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Branding</li>
            <li>AI Solutions</li>
            <li>Content Creation</li>
          </ul>
        </div>

      
        <div>
          <h4 className="text-lg mb-4 text-white">Follow Us</h4>
          <ul className="space-y-2 text-neutral-400 text-sm">
            <li className="hover:text-orange-500 cursor-pointer">Instagram</li>
            <li className="hover:text-orange-500 cursor-pointer">LinkedIn</li>
            <li className="hover:text-orange-500 cursor-pointer">YouTube</li>
          </ul>
        </div>

      </div>

     
      <div className="border-t border-neutral-800 py-6 text-center text-sm text-neutral-500">
        © 2025 OSF — All Rights Reserved.
      </div>

    </footer>
    </div>
  )
}

export default Footer
