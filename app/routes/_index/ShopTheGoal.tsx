import React, {useEffect, useState} from 'react';
import {LoaderArgs, json} from '@shopify/remix-oxygen';
import {App} from '../../api/type';
import {useLoaderData} from '@remix-run/react';
import arrayToObject from '../../ft-lib/ArrayToObject';
import goal from '../../../public/goal1.png';

interface ShopTheGoalSectionProps {
  section: App.HomePageTemplate.ShopTheGoalSection;
}

const ShopTheGoal = ({section}: ShopTheGoalSectionProps) => {
  const fields = arrayToObject({array: section.fields});
  return (
    <div
      key={section.type}
      style={{
        height: '100vh',
        display: 'inline-flex',
        padding: '0px 13px 0.71px 0px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        gap: '40px',
        backgroundColor: '#F2F2F2',
      }}
      className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
    >
      <p>{fields.title.value}</p>
      <div
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          gap: '40px',
        }}
      >
        {fields.shop_the_goals.references.nodes.map((shopTheGoal, index) => {
          return (
            <div key={index}>
              {shopTheGoal.fields.map((field, fieldIndex) => (
                <div key={fieldIndex}>
                  <div
                    style={{
                      width: '315px',
                      height: '441.29px',
                      flexShrink: '0',
                      borderRadius: '17.419px',
                      background: `url(${goal}), lightgray 50% / cover no-repeat`,
                      boxShadow:
                        '0px 8.70968px 13.06452px 0px rgba(0, 0, 0, 0.16)',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'flex-end',
                    }}
                  >
                    {field.key === 'goal_title' && <p>{field.value}</p>}
                  </div>
                  <button
                    style={{
                      display: 'flex',
                      width: '310px',
                      padding: '7.072px 16.502px',
                      justifyContent: 'center',
                      alignItems: 'flex-start',
                      gap: '11.787px',
                      borderRadius: '30.646px',
                      background: '#93C147',
                      boxShadow:
                        '0px 4.71483px 8.25095px 0px rgba(0, 0, 0, 0.10)',
                      backdropFilter: 'blur(2.946768045425415px)',
                    }}
                  >
                    {field.key === 'button_text' && <p>{field.value}</p>}
                  </button>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShopTheGoal;
