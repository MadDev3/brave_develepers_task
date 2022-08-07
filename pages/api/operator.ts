import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: boolean
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const result: number = Math.floor(Math.random() * 2);
    const status: boolean = result === 1;
    res.status(200).json({ status: status })
}