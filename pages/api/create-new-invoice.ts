import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  if (req.method === 'POST') {
    try {
      const client = await MongoClient.connect(process.env.DB_HOST as string);
      const db = client.db();

      const billingCollection = db.collection('billing-app');

      await billingCollection.insertOne({
        location: 'aditya'
      });

      await client.close();

      res.status(201).json({ message: 'Bill Inserteed' });
    } catch (error) {
      console.error(error);
    }
  }
};

export default handler;
