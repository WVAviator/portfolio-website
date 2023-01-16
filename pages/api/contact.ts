import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const twilioSid = process.env.TWILIO_ACCOUNT_SID;
const twilioToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_NUMBER;
const myNumber = process.env.MY_PHONE_NUMBER;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Only POST requests allowed' });
  }

  const { email, message } = req.body;

  if (!email || !message) {
    return res.status(422).json({ message: 'Invalid request' });
  }

  if (message.length > 500) {
    return res.status(422).json({ message: 'Message too long' });
  }

  const regex = /\S+@\S+\.\S+/;
  if (!regex.test(email)) {
    return res.status(422).json({ message: 'Invalid email' });
  }

  try {
    if (!twilioSid || !twilioToken || !twilioNumber || !myNumber) {
      throw new Error('Missing Twilio credentials');
    }

    const client = twilio(twilioSid, twilioToken);
    const response = await client.messages.create({
      body: `New Contact Request! Email: ${email} Message: ${message}`,
      from: twilioNumber,
      to: myNumber,
    });

    console.log(response);

    if (response.errorCode) {
      throw new Error('Error occurred while sending message.');
    }

    return res.status(200).json({ email, message });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export default handler;
