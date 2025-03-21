import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: 'How do I schedule a counselling session?',
    answer: 'We offer individual, group, marital, and family counselling sessions tailored to your unique needs.'
  },
  {
    question: 'What types of counselling services do you offer?',
    answer: 'You can schedule an appointment by contacting us through our website or giving us a call.'
  },
  {
    question: 'Are your counselling services confidential?',
    answer: 'Yes, all our counselling sessions are strictly confidential, ensuring your privacy and trust.'
  },
  {
    question: 'What should I expect in my first counselling session?',
    answer: 'We offer affordable counselling services. Please contact us for detailed pricing information.'
  },
  {
    question: 'How can I prepare for my counselling sessions?',
    answer: 'We offer affordable counselling services. Please contact us for detailed pricing information.'
  },
  {
    question: 'Can I change my session schedule if needed?',
    answer: 'We offer affordable counselling services. Please contact us for detailed pricing information.'
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto p-8 h-screen">
      <h2 className="text-4xl font-bold mb-8 text-center nunito">Frequently Asked Questions.</h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border border-gray-300 rounded-lg overflow-hidden shadow-sm">
            <button
              className="w-full flex justify-between items-center p-5 bg-white hover:bg-gray-50 transition-all duration-300"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-semibold nunito">{faq.question}</span>
              {openIndex === index ? (
                <ChevronUp className="text-blue-500" />
              ) : (
                <ChevronDown className="text-blue-500" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ${
                openIndex === index ? 'max-h-40 p-5' : 'max-h-0'
              }`}
            >
              <p className="text-gray-600 nunito">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
