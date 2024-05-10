import React, { useState } from "react";
import { Plus, Minus } from "../Icon/icon";
interface FAQItem {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItem> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className="border-b m-2 pb-2">
      <div
        className="flex h-[52px] items-center justify-between text-[20px] font-semibold"
        onClick={toggleOpen}
      >
        {question}
        {isOpen ? <Minus /> : <Plus />}
      </div>
      {isOpen && <div className="text-[15px]">{answer}</div>}
    </div>
  );
};

const FAQList: React.FC = () => {
  const faqs: FAQItem[] = [
    {
      question: "Do you offer freelancers?",
      answer: "Answer goes here...",
    },
    {
      question:
        "What’s the guarantee that I will be satisfied with the hired talent?",
      answer: "Answer goes here...",
    },
    {
      question: "Can I hire multiple talents at once?",
      answer:
        "If unhappy with a project, communicate with the freelancer, allow for revisions, and refer to the agreement. Escalate to platform support if needed, considering mediation. Review policies, seek collaborative solutions for resolution.",
    },
    {
      question: "Why should I not go to an agency directly?",
      answer: "Answer goes here...",
    },
    {
      question: "Who can help me pick a right skillset and duration for me?",
      answer: "Answer goes here...",
    },
  ];

  return (
    <div>
      {faqs.map((faq, index) => (
        <FAQItem key={index} question={faq.question} answer={faq.answer} />
      ))}
    </div>
  );
};

export default FAQList;
