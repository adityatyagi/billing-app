import { MongoClient } from 'mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  if (req.method === 'POST') {
    try {
      const client = await MongoClient.connect(
        'mongodb+srv://admin:admin@cluster0.ojvah.mongodb.net/billing-app?retryWrites=true&w=majority'
      );
      const db = client.db();

      const billingCollection = db.collection('billing-app');

      const result = await billingCollection.insertOne({
        location: 'aditya'
      });

      console.log('billingCollection', result.acknowledged);

      await client.close();

      res.status(201).json({ message: 'Bill Inserteed' });
    } catch (error) {
      console.error(error);
    }
  }
};

export default handler;
