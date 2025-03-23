import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faLinkedin, faMicrosoft } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhone, faMapPin } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  const iconSize = "text-2xl"; // Tailwind for size
  const iconColor = "text-white"; // Tailwind's blue-500

  return (
    <>
      <div className="flex flex-row bg-black contacts p-5 justify-center items-center">
        {/* Left Section */}
        <div className="flex flex-col w-2/4 p-5">
          <p className="text-5xl nunito font-bold text-white">Emerald Counselling.</p>
          <div className="h-5"></div>
          <p className="nunito text-white">At Emerald Counselling, we provide affordable counselling services tailored to meet your needs, including individual, group, marital, and family counselling.</p>
          <div className="h-5"></div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faPhone} className="text-white text-xl" />
              <p className="text-white nunito">+1 23 456 789</p>
            </div>
            
            {/* Email */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faEnvelope} className="text-white text-xl" />
              <p className="text-white nunito">support@emeraldcounselling.ai</p>
            </div>
            
            {/* Address */}
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faMapPin} className="text-white text-xl" />
              <p className="text-white nunito">123 Healing Way, CO, USA</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col w-1/4 items-start gap-2">
          <p className='text-white nunito text-2xl font-bold'>Quick Links</p>
          <div className='h-5'></div>
          {["Home", "About us", "Our services", "Individual Counseling", "Group Counseling", "Marital Counseling", "Family Counseling"].map((link, index) => (
            <button key={index} className='text-white nunito'>{link}</button>
          ))}
        </div>

        {/* Resources */}
        <div className="flex flex-col w-1/4 items-start gap-2">
          <p className='text-white nunito text-2xl font-bold'>Resources</p>
          <div className='h-5'></div>
          {["Pricing", "Testimonials", "Our services", "Blog", "Faqs", "Contacts"].map((link, index) => (
            <button key={index} className='text-white nunito'>{link}</button>
          ))}
          <div className='h-5'></div>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col w-1/4 items-start gap-2">
          <p className='text-white nunito text-2xl font-bold'>Follow Us.</p>
          <div className="flex gap-4">
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} className={`${iconSize} ${iconColor}`} />
            </a>

            {/* X (Twitter) */}
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className={`${iconSize} ${iconColor}`} />
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className={`${iconSize} ${iconColor}`} />
            </a>

            {/* Outlook (using Microsoft icon) */}
            <a href="mailto:support@emeraldcounselling.ai">
              <FontAwesomeIcon icon={faMicrosoft} className={`${iconSize} ${iconColor}`} />
            </a>

            {/* Mail */}
            <a href="mailto:support@emeraldcounselling.ai">
              <FontAwesomeIcon icon={faEnvelope} className={`${iconSize} ${iconColor}`} />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
