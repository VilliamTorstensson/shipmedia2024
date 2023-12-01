"use client"

import React, { useState } from 'react';
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";

const Faq = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const questions = [
    {
      id: 1,
      question: 'What is React?',
      answer: 'React is a JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      question: 'What is the process for creating Figma ad creatives or developing a new logo and branding?',
      answer: 'Logo design is a couple hours, and ad creatives takes 1-2 days. for 5 different ad creatives.',
    },
    {
      id: 3,
      question: 'What is the typical timeline for completing a web development project?',
      answer: 'the average timeframe for completing a website is 1-3 weeks, from web development to logo and branding design. ',
    },
    {
      id: 4,
      question: 'How will a website increase my sales?',
      answer: 'a website will increase your sales by making your business more visible to potential customers and making it easier for customers to find and contact you. Or buy your products/services directly online thrugh your e-commerce website.',
    },
    {
      id: 5,
      question: 'How much does a website cost?',
      answer: 'My prices start at 4999kr for a simple website, and goes up to 59999kr for a more complex website/Web application. But our most common package is 14999kr',
    },
    {
      id: 6,
      question: 'What is your approach to website development and design?',
      answer: 'Understand our methodology and how i collaborate with clients to create websites that align with their vision and goals.',
    },
    {
      id: 7,
      question: 'Do you offer ongoing website maintenance services?',
      answer: 'Yes, i have my own hosting service and i offer ongoing website maintenance aswell as building a sales funnel for your business, we also collect all your leads in a database where you can create automated email and sms responses and campains, this means that you can get new leads while sleeping. for a monthly fee of only 1999kr. ',
    },
    {
      id: 8,
      question: 'Can you redesign an existing website or update an outdated design?',
      answer: 'Ofcourse that will often be a cheaper option than building a new website, but it depends on the website and what you want to change. ',
    },
   
  ];

  const handleQuestionClick = (id) => {
    if (selectedQuestion === id) {
      setSelectedQuestion(null);
    } else {
      setSelectedQuestion(id);
    }
  };

  return (
    <main id="faq" className='w-full h-full px-4 md:px-10 bg-[#090909]'>
    <div className='
      justify-start flex flex-col items-center py-20 max-w-[1440px] mx-auto gap-4   rounded-xl faqbg '>
        <h1 className='w-full text-center text-white text-7xl uppercase mb-10'>FAQs</h1>
      
      {questions.map((q) => (
        
        <div className='flex-col flex w-full ' key={q.id}>
            <div className={`cursor-pointer  bg-[#f8f8f8] rounded-sm w-full px-4 py-4 ${q.id === 1 ? '' : ''}`}>
            <div className='w-full flex justify-between text-black' onClick={() => handleQuestionClick(q.id)}>
            <p className='font-bold text-md w-[80%]' onClick={() => handleQuestionClick(q.id)}>{q.question} </p>
            
            {selectedQuestion === q.id ? (
              <FaMinus  className='text-lg'/>) : (
                <FaPlus className='text-lg' />
              )}
            
            </div>
           
          {selectedQuestion === q.id && <p className='py-2 text-black'>{q.answer}</p>}
        
          </div>
          
        </div>
      
      ))}
    </div>
    </main>
  );
};

export default Faq;
