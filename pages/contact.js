import React from 'react';
import Head from 'next/head';
import { Contact } from 'containers';

const content = {
  contact: {
    location: { lat: 52.3644254, lng: 4.8878303 },
    text: {
      title: 'Want to chat?',
      subTitle: 'We’d love to hear about your scale-up.',
      disclaimer: {
        txtStart:
          '*By submitting the above form you are giving us permission to use your details to contact you. Under EU General Data Protection Regulations compliance we will not share these details with any other party. See our',
        txtEnd: 'here.',
        link: 'privacy statement',
        to: '/privacy-statement'
      }
    },
    form: {
      name: {
        name: 'name',
        type: 'text',
        placeholder: 'Your name',
        id: 'eb4a5b0f-b3b2-4782-8a90-2c896a4bbc2c'
      },
      email: {
        name: 'email',
        type: 'email',
        placeholder: 'Your email',
        id: 'dd754897-da20-4cb9-8bed-0ebbedd1e497'
      },
      phone: {
        name: 'phone',
        type: 'tel',
        placeholder: 'Your phone number',
        id: '49b90960-e3c1-402b-9803-0a34a61ea1d5'
      }
    },
    address: {
      title: 'Our Office',
      location: {
        title: 'Address ',
        street: 'Keizersgracht',
        number: '620',
        zipcode: '1017 ER',
        city: 'Amsterdam'
      },
      hours: {
        title: 'Hours',
        week: { start: '8 AM', end: '6 PM' },
        weekend: '🎉 Celebrating the weekend'
      }
    }
  }
};

function Index() {
  return (
    <>
      <Head>
        <title>Contact - ONE.</title>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, user-scalable=no"
        />
        <meta
          name="description"
          content="We are One. A Scale Up&#039;s solution for talent. If you&#039;re a growing business or an ambitious indvidual get in touch to see how we can help you."
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Contact - ONE." />
        <meta
          property="og:description"
          content="We are One. A Scale Up&#039;s solution for talent. If you&#039;re a growing business or an ambitious indvidual get in touch to see how we can help you."
        />
        <meta property="og:url" content="https://oneworks.co/contact/" />
        <meta property="og:site_name" content="ONE." />
        <meta
          property="article:publisher"
          content="https://www.facebook.com/WeAreOne.Works/"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="We are One. A Scale Up&#039;s solution for talent. If you&#039;re a growing business or an ambitious indvidual get in touch to see how we can help you."
        />
        <meta name="twitter:title" content="Contact - ONE." />
      </Head>
      <Contact content={content.contact} />
    </>
  );
}

export default Index;
