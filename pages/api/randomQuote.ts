import { NextApiRequest, NextApiResponse } from 'next'
import quotes from "./quotes.json";

export default (req: NextApiRequest, res: NextApiResponse) => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    res.status(200).json(quote);
};