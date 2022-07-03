import { NextApiRequest, NextApiResponse } from 'next';
import getMongoDb from 'src/api-lib/mongodb';

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<{ message: string }>
) => {
  if (req.method === 'POST') {
    try {
      const db = await getMongoDb();

      const billingCollection = db.collection('billing-app');

      await billingCollection.insertOne({
        location: 'tyagi'
      });

      res.status(201).json({ message: 'Bill Inserteed' });
    } catch (error) {
      console.error(error);
    }
  }
};

export default handler;
