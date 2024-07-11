import { PineconeClient } from '@pinecone-database/pinecone';

async function accessExistingPineconeIndex() {
  try {
    // Test Fetch API
    const response = await fetch('https://httpbin.org/get');
    if (!response.ok) {
      throw new Error('Fetch API test failed');
    }
    console.log('Fetch API test successful');

    const pc = new PineconeClient();
    await pc.init({
      apiKey: 'c85a2244-4db3-464b-a9e2-f366e296718d',
      environment: 'us-west1-gcp' // specify your environment
    });

    const index = pc.Index('graduating project');
    console.log('Accessed index:', index);
  } catch (error) {
    console.error('Error:', error.message);
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