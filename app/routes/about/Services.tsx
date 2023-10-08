import React from 'react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import {Colors} from '../../ft-lib/shared';
import {App} from '../../api/type';

interface ServicesSectionProps {
  section: App.AboutPageTemplate.ServicesSection;
}

const Services = ({section}: ServicesSectionProps) => {
  console.log(section);
  const fields = arrayToObject({array: section.fields});

  return (
    <div
      key={section.type}
      style={{
        marginTop: '40px',
      }}
      className="servicesSection w-full !container mx-auto"
    >
      {fields.title != null && (
        <p className="ft-text-main md:text-3xl text-2xl mb-7">
          {fields.title.value}
        </p>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {fields.services.references.nodes.map((service, index) => {
          const serviceFields = arrayToObject({array: service.fields});
          return (
            <div
              key={index}
              style={{
                borderRadius: '24px',
                boxShadow: '0px 6px 9px 0px rgba(0, 0, 0, 0.16)',
              }}
              className="flex w-full mds:w-[410px] h-[520px] overflow-hidden md:flex-row justify-start items-end relative"
            >
              {serviceFields.image != null && (
                <img
                  className="w-full h-full object-cover"
                  src={serviceFields.image.reference.image.url}
                  alt=""
                />
              )}
              <div className="absolute w-full flex flex-col gap-5 md:gap-4 z-10 justify-end md:justify-center container mb-8 mb:mb-0">
                {serviceFields.title != null && (
                  <div
                    style={{
                      color: Colors.textSecondary,
                      width: '90%',
                      fontSize: '34px',
                    }}
                    className="header md:text-3xl lg:text-5xl tracking-wide font-bold text-2xl uppercase"
                  >
                    {serviceFields.title.value}
                  </div>
                )}
                {serviceFields.description != null && (
                  <div
                    style={{
                      color: Colors.textSecondary,
                      width: '80%',
                    }}
                    className="subHeader text-base md:text-lg"
                  >
                    {serviceFields.description.value}
                  </div>
                )}
                {serviceFields.button_text != null && (
                  <div
                    style={{
                      backgroundColor: Colors.primary,
                      color: Colors.textSecondary,
                    }}
                    onClick={() => {
                      window.location.href = '/shop';
                    }}
                    className="btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize"
                  >
                    {serviceFields.button_text.value}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
