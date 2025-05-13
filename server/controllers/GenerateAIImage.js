import * as dotenv from 'dotenv';
import { createError } from '../error';
import { Configuration , OpenAI} from 'openai';

dotenv.config();

const configuration = new Configuration({
    api_key: process.env.OPENAI_API_KEY,
})

const openAi = new OpenAI(configuration);