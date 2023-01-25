import { NextApiRequest } from 'next';

export interface CustomRequest<T extends object> extends NextApiRequest {
  body: T;
}
