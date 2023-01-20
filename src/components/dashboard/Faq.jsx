import React, { useState } from 'react'
import { TriviaQuestion } from "../../data";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import Header from './Header';

function Faq() {
  const [data] = useState(TriviaQuestion)

  const [isClicked, setIsClicked] = useState(null);

  const revealAnswer = (id) => {
    if (id === isClicked) {
      return setIsClicked(null);
    }
    setIsClicked(id);
  };
  
  const accordionClosed =
    "hidden rounded-2xl overflow-y-hidden max-w-6xl leading-snug opacity-0";
  const accordionOpen =
    "block max-h-[400px] overflow-y-visible opacity-100 mr-auto";

  const toggleBtn = (id) => {
    if (id === isClicked) {
      return <AiOutlineMinus />;
    } else {
      return <AiOutlinePlus />;
    }
  };
  return (
    <>
      <section id="trivia" className="px-2 pt-10">
        <h2 className="text-center pt-4">
          <Header
            // className="text-center"
            title="FAQ"
            description="Frequently Asked Questions Page"
          />
        </h2>
        {data.map((question, id) => (
          <div
            key={question.headingID}
            className="flex flex-col items-center max-w-3xl px-5 py-2 mx-auto my-5 shadow-lg gap-x-5 dark:shadow-none dark:border dark:border-slate-200 rounded-2xl"
          >
            <div className="flex items-center justify-between w-full py-5 cursor-pointer">
              <h3>
                <button
                  className="font-medium text-accordion-question leading-relaxed font-nunito w-full text-left pr-5"
                  id={question.headingID}
                  aria-expanded={isClicked === id ? "true" : false}
                  onClick={() => revealAnswer(id)}
                >
                  {question.question}
                </button>
              </h3>
              <span>{toggleBtn(id)}</span>
            </div>

            {
              <section
                aria-labelledby={question.headingID}
                className={isClicked === id ? accordionOpen : accordionClosed}
              >
                <p className="font-normal text-accordion-answer">
                  {question.answer}
                </p>
              </section>
            }
          </div>
        ))}
      </section>
    </>
  );
}

export default Faq