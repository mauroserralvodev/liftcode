"use client"
import React, { useState } from 'react';

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(0); // Eliminada la anotación de tipo
  const toggleAccordion = (index) => { // Eliminado el tipo del parámetro
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
      {
        question: "What is BrinPage and what AI solutions does it offer?",
        answer:
          "BrinPage is an AI-focused company developing innovative solutions, including LiftCode, an advanced AI for real-time code generation and project visualization. Our goal is to create intelligent, practical AI applications that enhance different industries.",
      },
      {
        question: "What is LiftCode and how does it work?",
        answer:
          "LiftCode is an advanced artificial intelligence designed to generate code, allowing users to visualize and edit projects in real time. Once your project is ready, you can export it or upload it directly.",
      },
      {
        question: "Who can benefit from LiftCode?",
        answer:
          "LiftCode is perfect for developers, startups, students, and anyone looking to streamline coding processes. Whether you need quick prototyping, debugging assistance, or full project generation, LiftCode is a powerful AI-driven tool.",
      },
      {
        question: "Is LiftCode free to use?",
        answer:
          "LiftCode operates on a credit-based system. We provide a generous amount of free credits at the start, but once you run out, you will need to purchase more to continue using the service.",
      },
      {
        question: "Can I use LiftCode for commercial projects?",
        answer:
          "Yes! Depending on the plan you choose, you can use LiftCode-generated code for personal or commercial projects. Check our licensing terms for more details on usage rights.",
      },
      {
        question: "What makes LiftCode the best AI for code generation?",
        answer:
          "LiftCode stands out due to its real-time project visualization, seamless editing capabilities, and high-quality code output. Unlike other AI code generators, it allows you to interact with your project dynamically, ensuring efficiency and precision.",
      },
      {
        question: "Does BrinPage offer other AI services besides LiftCode?",
        answer:
          "Currently, LiftCode is our main AI product for code generation, but BrinPage is continuously developing new AI-driven solutions to expand our offerings in the future.",
      }
  ];

  
 
  return (
    <div className="bg-white h-[60rem] sm:h-[46rem]">
      <div className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-2">
            <div className="max-w-xs">
              <h2 className="text-3xl font-medium sm:font-bold md:text-4xl md:leading-tight text-black">
                Frequently Asked Questions
              </h2>
              <p className="mt-1 hidden md:block text-gray-600">
                Answers to the most common questions about LiftCode services.
              </p>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="hs-accordion-group divide-y divide-gray-200">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className={`hs-accordion pt-6 pb-3 ${activeIndex === index ? 'active' : ''}`}
                >
                  <button
                    className="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-medium sm:font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-[#000000]"
                    aria-expanded={activeIndex === index}
                    aria-controls={`hs-collapse-${index}`}
                    onClick={() => toggleAccordion(index)}
                  >
                    {item.question}
                    <svg
                      className={`${
                        activeIndex === index
                          ? 'hs-accordion-active:block hidden'
                          : 'hs-accordion-active:hidden block'
                      } shrink-0 size-5 text-gray-600`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                    <svg
                      className={`${
                        activeIndex === index
                          ? 'hs-accordion-active:hidden block'
                          : 'hs-accordion-active:block hidden'
                      } shrink-0 size-5 text-gray-600`}
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m18 15-6-6-6 6" />
                    </svg>
                  </button>

                  <div
                    id={`hs-collapse-${index}`}
                    className={`hs-accordion-content overflow-hidden transition-all duration-500 ease-in-out ${
                      activeIndex === index ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
                    role="region"
                    aria-labelledby={`hs-heading-${index}`}
                  >
                    <p
                      className={`transition-opacity duration-500 ${
                        activeIndex === index ? 'opacity-100' : 'opacity-0'
                      } text-gray-600`}
                    >
                      {item.answer}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faqs;
