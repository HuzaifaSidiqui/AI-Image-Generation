import * as dotenv from 'dotenv';
import { createError } from '../error';
import { Configuration , OpenAI} from 'openai';

dotenv.config();

const configuration = new Configuration({
    api_key: process.env.OPENAI_API_KEY,
})

const openAi = new OpenAI(configuration);

// CONTROLLER TO GENERATE IMAGE

export const generateImage = async (req, res, next) =>{
    try{
        const {prompt} = req.body;
        const response = await openAi.createImage({
            prompt, 
            n:1,
            size: '1024x1024',
            response_format: 'b64_json',
        });
        const generatedImage = response.data.data[0].b64_json;
        return res.status(200).json({photo: generatedImage});
    }catch(error){
        next(
            createError(
                error.status,
                error?.response?.data?.error?.message || error?.message
            )
        )
    }
}