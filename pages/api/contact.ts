import { NextApiRequest, NextApiResponse } from 'next';

const ntfyTopic = process.env.NTFY_TOPIC;

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
    if (!ntfyTopic) {
      throw new Error('Missing NTFY topic identifier.');
    }

    const body = `${message} || Sent from ${email}`;

    const response = await fetch(`https://ntfy.sh/${ntfyTopic}`, {
      method: 'POST',
      body,
    });

    console.log(response);

    if (response.status >= 400) {
      throw new Error('Error occurred while sending message.');
    }

    return res.status(200).json({ email, message });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export default handler;
