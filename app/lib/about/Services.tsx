import React from 'react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import { Colors } from '../../ft-lib/shared';
import type { App } from '../../api/type';
import { Link } from '@remix-run/react';
import LazyImage from '~/app/ft-lib/LazyImage';
import resizeImage from '~/app/ft-lib/resizeImages';

interface ServicesSectionProps {
  section: App.AboutPageTemplate.ServicesSection;
}

const Services = ({ section }: ServicesSectionProps) => {
  const fields = arrayToObject({ array: section.fields });

  
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
        {fields.services?.references.nodes.map((service, index) => {
          const serviceFields = arrayToObject({ array: service.fields });
              console.log( serviceFields.image_position, 'serviceFields.image_position');

          return (
            <div
              key={service.id}
              style={{
                boxShadow: '0px 6px 9px 0px rgba(0, 0, 0, 0.16)',
              }}
              className="flex rounded-3xl w-full mds:w-[410px] h-[520px] overflow-hidden md:flex-row justify-start items-end relative"
            >
              {serviceFields.image != null && (
                 <LazyImage
                 style={{
                  objectPosition: serviceFields.image_position?.value,
                 }}
                  className="w-full h-full object-cover rounded-3xl"
                  src={resizeImage(serviceFields.image.reference.image.url, 1200)}
                  alt={serviceFields.title?.value || 'service image'}
                />
              )}
              <div className="absolute bg-black/40 w-full h-full flex flex-col rounded-3xl
               gap-3 justify-end z-20 md:justify-end container pb-8 mb:pb-0">
                {serviceFields.title != null && (
                  <div
                    style={{
                      color: Colors.textSecondary,
                      width: '90%',
                      fontSize: '34px',
                      letterSpacing: '0.02em',
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
                      width: '100%',
                    }}
                    className="subHeader text-base md:text-lg"
                  >
                    {serviceFields.description.value}
                  </div>
                )}
                {serviceFields.button_text != null && (
                  <Link
                    to={`${serviceFields.button_url?.value}`}
                    target='_blank'
                    style={{
                      backgroundColor: Colors.primary,
                      color: Colors.textSecondary,
                      letterSpacing: '0.02em',

                    }}
                    className="btn px-4 py-2 rounded-full text-main text-center w-fit font-bold text-xl capitalize"
                  >
                    {serviceFields.button_text.value}
                  </Link>
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
