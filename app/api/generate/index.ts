import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { JsonOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts'

const model = new ChatGoogleGenerativeAI({
  model: 'gemini-1.5-flash-8b',
  json: true,
});

const formatInstructions = 'Respond with a Json Array (Example: ["Domain 1", "Domain 2", "etc...."])';

const prompt = ChatPromptTemplate.fromTemplate(
  'You are a domain/brand name generator, I will give you a description of my website/app/business, then you will generate me some good domain name ideas without extension. Give me short names(MAX LENGTH IS 12 letters!!!!!)\n{format_instructions}\n{input}\n',
);

export default async function handler(input: string): Promise<string[]> {
  const parser = new JsonOutputParser<[]>();

  const partialedPrompt = await prompt.partial({
    format_instructions: formatInstructions,
  });

  const chain = partialedPrompt.pipe(model).pipe(parser);

  const output = await chain.invoke({ input });

  return output
}
