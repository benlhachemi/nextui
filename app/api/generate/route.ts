import type { NextApiRequest, NextApiResponse } from 'next'
import handler from './index'

export async function POST(req: Request, res: Response) {
  // get data from req
  const data = await req.json()
  if (!data.input) return new Response('Error: No input provided', { status: 400 })

  const output = await handler(data.input)

  return Response.json(output)
}
