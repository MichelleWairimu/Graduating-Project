import 'dotenv/config';
import pkg from '@pinecone-database/pinecone';
const { PineconeClient } = pkg

async function accessExistingPineconeIndex() {
  try {
    const pc = new PineconeClient();
    console.log('Initializing Pinecone client...');
    await pc.init({
      apiKey: process.env.PINECONE_API_KEY,
      environment: process.env.PINECONE_ENVIRONMENT
    });
    console.log('Pinecone client initialized.');

    const index = pc.Index('graduating-project');
    console.log('Accessed index:', index);
  } catch (error) {
    console.error('Error:', error);
  }
}

accessExistingPineconeIndex().catch(console.error);



/*
export const createPineconeIndex = async (
  client,
  indexName,
  vectorDimension
) => {
// 1. Initiate index existence check
  console.log(`Checking "${indexName}"...`);
// 2. Get list of existing indexes
  const existingIndexes = await client.listIndexes();
// 3. If index doesn't exist, create it
  if (!existingIndexes.includes(indexName)) {
// 4. Log index creation initiation
    console.log(`Creating "${indexName}"...`);
// 5. Create index
    const createClient = await client.createIndex({
      createRequest: {
        name: indexName,
        dimension: vectorDimension,
        metric: "cosine",
      },
    });
// 6. Log successful creation
    console.log(`Created with client:`, createClient);
// 7. Wait 60 seconds for index initialization
    await new Promise((resolve) => setTimeout(resolve, 180000));
  } else {
// 8. Log if index already exists
    console.log(`"${indexName}" already exists.`);
  }
};
*/