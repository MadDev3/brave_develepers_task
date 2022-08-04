import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
    status: boolean
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    const result: number = Math.floor(Math.random() * 2);
    let status: boolean;
    if(result === 0){
        status = false;
    }
    else{
        status = true;
    }
    res.status(200).json({ status: status })
}