import React, { useState } from 'react';

const Faq = () => {
  const faqData = [
    { question: 'What is Tailwind CSS?', answer: 'Tailwind CSS is a utility-first CSS framework.' },
    { question: 'How do I install Tailwind?', answer: 'You can install Tailwind using npm or yarn.' },
    // Add more FAQ items as needed
  ];

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
      <ul>
        {faqData.map((item, index) => (
          <li key={index} className="mb-4">
            <button
              onClick={() => handleToggle(index)}
              className="text-blue-500 hover:underline font-semibold"
            >
              {item.question}
            </button>
            {expandedIndex === index && <p className="text-gray-600">{item.answer}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Faq;
