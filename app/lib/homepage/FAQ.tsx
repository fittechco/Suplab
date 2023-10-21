import React, { useEffect, useState } from 'react';
import { LoaderArgs, json } from '@shopify/remix-oxygen';
import type { App } from '../../api/type';
import { useLoaderData } from '@remix-run/react';
import arrayToObject from 'app/ft-lib/ArrayToObject';
import FTicons from 'app/ft-lib/FTicon';
import { Colors } from 'app/ft-lib/shared';
import Accordion from '~/app/components/Accordion';

interface FAQSectionProps {
  section: App.HomePageTemplate.FaqSection | App.AboutPageTemplate.FaqSection;
}

const FAQ = ({ section }: FAQSectionProps) => {
  const fields = arrayToObject({ array: section.fields });
  const [isOpen, setIsOpen] = useState<boolean[]>(
    new Array(fields.faqs?.references.nodes.length).fill(false),
  );

  const toggleOpen = (index: number) => {
    const updatedIsOpen = [...isOpen];
    updatedIsOpen[index] = !updatedIsOpen[index];
    setIsOpen(updatedIsOpen);
  };

  if (fields.faqs == null) {
    return null;
  }

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
        {fields.title != null && (
          <p className="section-heading ft-text-main md:text-3xl text-2xl">
            {fields.title.value}
          </p>
        )}
        {fields.faqs && fields.faqs.references.nodes.map((faq, index) => {
          const faqFields = arrayToObject({ array: faq.fields });

          return (
            <div
              className="faqSection__questions w-full flex items-start justify-start"
              key={faq.id}
            >
              {faqFields.question != null && (
                <Accordion
                  title={faqFields.question.value}
                  details={faqFields.answer?.value || ""}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FAQ;
