import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6";
function Footer() {
  return (
    <>
      <hr />
      <footer className="py-12">
        <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
          <div className=" flex flex-col items-center justify-center">
            <div className="flex space-x-4">
{/*               <FaFacebook size={24} />
              <FaTwitter size={24} />
              <FaInstagram size={24} />
              <FaLinkedinIn size={24} /> */}
                <a href="https://www.facebook.com/neeti.patel.3762" target="_blank" rel="noopener noreferrer">
  <FaFacebook size={24} />
</a>
<a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
  <FaTwitter size={24} />
</a>
<a href="https://www.instagram.com/_neeti_patel_11/" target="_blank" rel="noopener noreferrer">
  <FaInstagram size={24} />
</a>
<a href="https://www.linkedin.com/in/neeti-patel-8b009624b/" target="_blank" rel="noopener noreferrer">
  <FaLinkedinIn size={24} />
</a>
              
            </div>
            <div className="mt-8 border-t border-gray-700 pt-8 flex flex-col items-center">
              <p className="text-sm">
              Thanks for getting in touch ❤️
              </p>
              <p className="text-sm">  </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
