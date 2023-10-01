import React, { useEffect, useState } from 'react';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import { App } from '../../api/type';
import { useLoaderData } from '@remix-run/react';
import arrayToObject from 'app/ft-lib/ArrayToObject';
import FTicons from 'app/ft-lib/Icon';

interface FAQSectionProps {
  section: App.HomePageTemplate.FaqSection;
}

const FAQ = ({ section }: FAQSectionProps) => {
  const fields = arrayToObject({ array: section.fields });
  const [isOpen, setIsOpen] = useState<boolean[]>(new Array(fields.faqs.references.nodes.length).fill(false));

  const toggleOpen = (index: number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  return (
    <div
      key={section.type}
      style={{
        marginTop: '40px',
        overflow: 'hidden',
      }}
      className="faqSection w-full mx-auto"
    >
      <div className="faqSection__wrapper">
        <p className="ft-text-main md:text-3xl text-2xl">{fields.title.value}</p>
        {fields.faqs.references.nodes.map((faq, index) => {
          const faqFields = arrayToObject({ array: faq.fields });

          return (
            <div className="faqSection__questions w-full flex items-start justify-start" key={index}>
              <div className='flex items-center justify-between w-full'>
                <p className="text-xl">{faqFields.question.value}</p>
                <button
                  onClick={() => toggleOpen(index)}
                  style={{
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                  }}
                >
                  <FTicons
                    name='plus'
                    style={{
                      width: '24px',
                      height: '24px',
                      color: 'grey',
                    }}
                  />
                </button>
              </div>
              <div
                className={`faqSection__questions__question__answer w-full ${
                  isOpen[index] ? 'open' : ''
                }`}
              >
                <p className="text-xl">{faqFields.answer.value}</p>
              </div>
              <div className="faqDivider" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
