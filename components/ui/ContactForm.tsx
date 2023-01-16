import React from 'react';
import Button from './Button';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import InitialsLoadingIndicator from '../brand/InitialsLoadingIndicator';
import Modal from './Modal';

const ContactForm = () => {
  const [email, setEmail] = React.useState('');
  const [message, setMessage] = React.useState('');

  const [loading, setLoading] = React.useState(false);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [responseMessage, setResponseMessage] = React.useState(
    'Message sent successfully!'
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setModalOpen(true);

    const request = fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });

    // For UX, show the loading indicator for at least 3 seconds
    const uxDelay = new Promise<void>((resolve) => setTimeout(resolve, 3000));
    const [response] = await Promise.all([request, uxDelay]);

    setLoading(false);

    if (response.status === 200) {
      setResponseMessage('Message sent successfully!');
      setEmail('');
      setMessage('');
      setTimeout(() => {
        setModalOpen(false);
        setResponseMessage('');
      }, 2000);
    } else {
      setResponseMessage(
        'Something went wrong. Please try again or reach out to me through LinkedIn.'
      );
      setTimeout(() => {
        setModalOpen(false);
        setResponseMessage('');
      }, 2000);
    }
  };

  return (
    <div className="px-4 w-screen max-w-[50ch] h-[400px]">
      <Modal
        open={modalOpen}
        onClose={() => {
          setResponseMessage('');
          setModalOpen(false);
        }}
        clickOutside={!loading}
        className="flex flex-col justify-center items-center paper-texture w-[40ch] h-[30ch] overflow-hidden"
      >
        {loading ? (
          <div className="flex flex-col justify-start items-center gap-6">
            <p>Sending...</p>
            <InitialsLoadingIndicator />
          </div>
        ) : (
          <p>{responseMessage}</p>
        )}
      </Modal>
      <h2 className="mb-6 text-2xl font-medium w-full text-center md:text-left pen-drawn">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-[50ch] max-w-full">
        <div>
          <label
            htmlFor="email"
            className="block mb-2 text-center md:text-left"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block mt-4 mb-2 text-center md:text-left"
          >
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={message}
            required
            maxLength={500}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>
        <div className="flex justify-center">
          <Button
            endIcon={<EnvelopeIcon />}
            type="submit"
            className="w-full flex justify-center"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
