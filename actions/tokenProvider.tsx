'use server';

import { StreamClient } from '@stream-io/node-sdk';
import {getUser} from "@/app/(root)/getuser";

const STREAM_API_KEY = process.env.NEXT_PUBLIC_STREAM_API_KEY;
const STREAM_API_SECRET = process.env.STREAM_SECRET_KEY;

export const tokenProvider = async () => {
    const user = await getUser();

    if (!user) throw new Error('User is not authenticated');
    if (!STREAM_API_KEY) throw new Error('Stream API key secret is missing');
    if (!STREAM_API_SECRET) throw new Error('Stream API secret is missing');

    const streamClient = new StreamClient(STREAM_API_KEY, STREAM_API_SECRET);
    const validity = 24 * 60 * 60;

    const token = streamClient.generateUserToken({user_id: user.Id.toString(), validity_in_seconds: validity});

    return token;
};