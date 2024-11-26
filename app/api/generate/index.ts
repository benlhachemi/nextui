import { ChatGoogleGenerativeAI } from '@langchain/google-genai';
import { JsonOutputParser } from '@langchain/core/output_parsers';
import { ChatPromptTemplate } from '@langchain/core/prompts'

const model = new ChatGoogleGenerativeAI({
  model: 'gemini-1.5-flash-8b',
  json: true,
});

const formatInstructions = 'Respond with a Json Array (Example: ["Domain 1", "Domain 2", "etc...."])';

const prompt = ChatPromptTemplate.fromTemplate(
  `I want you to generate a domain name for {input}. Follow exactly these steps:
  Step 1:
  Give me 3 related niches including the main niche.
  only keep niches in plain text.
  step 2:
  Choose for these niches what are the top 10 dominant words that everyone in the niches know or maybe familiar with.
  only keep words in plain text.
  Step 3:
  Suggest creative and unique domain names related to “Step 1 results” services. The names should be short, catchy, and easy to remember, ideally blending words related to “results of Step 2”. The names should convey a sense of modernity, technology, and engagement. Include names that may have potential for branding, are available for registration, and fit a tech-forward, innovative business model.\n{format_instructions}\n`,
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
