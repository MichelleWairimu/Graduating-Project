import { Pinecone } from '@pinecone-database/pinecone';
import pdf from 'pdf-parse';
import fs from 'fs';
import path from 'path';
import OpenAI from 'openai';
import 'dotenv/config'; // Make sure to load environment variables first
import { fileURLToPath } from 'url';

// Define __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Initialize OpenAI
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

// Function to convert text to embeddings using OpenAI
async function getEmbeddings(text) {
  const response = await openai.embeddings.create({
    model: 'text-embedding-ada-002',
    input: text,
  });

  return response.data[0].embedding;
}

// Function to extract text from a PDF
async function extractTextFromPDF(filePath) {
  const dataBuffer = fs.readFileSync(filePath);
  const data = await pdf(dataBuffer);
  return data.text;
}

// Function to process a single PDF and store its embeddings in Pinecone
async function processPDFAndStoreEmbeddings(filePath, index) {
  try {
    // Extract text from PDF
    const text = await extractTextFromPDF(filePath);
    console.log('Extracted text from', filePath);

    // Convert text to embeddings
    const embedding = await getEmbeddings(text);
    console.log('Generated embedding for', filePath);

    // Insert embedding into Pinecone
    const vectors = [
      {
        id: path.basename(filePath, path.extname(filePath)), // use file name as id
        values: embedding,
        metadata: { source: filePath }
      }
    ];
    const result = await index.upsert({ vectors });
    console.log('Embedding inserted into Pinecone for', filePath, result);
  } catch (error) {
    console.error('Error processing', filePath, error);
  }
}

// Main function to process all PDFs in the data directory
async function processAllPDFsInDirectory(directoryPath, indexName) {
  try {
    // Initialize Pinecone client
    const pc = new Pinecone();
    await pc.init({
      apiKey: 'c85a2244-4db3-464b-a9e2-f366e296718d', // replace with your Pinecone API key
      environment: 'us-east-1' // specify your environment
    });

    const index = pc.Index(indexName);
    console.log('Accessed index:', index);

    // Read all files in the directory
    const files = fs.readdirSync(directoryPath);
    console.log('Files in directory:', files); // Log files found in the directory

    // Filter out non-PDF files
    const pdfFiles = files.filter(file => path.extname(file).toLowerCase() === '.pdf');
    console.log('PDF files to process:', pdfFiles); // Log the PDF files to be processed

    // Process each PDF file
    for (const pdfFile of pdfFiles) {
      const filePath = path.join(directoryPath, pdfFile);
      await processPDFAndStoreEmbeddings(filePath, index);
    }

  } catch (error) {
    console.error('Error processing directory', directoryPath, error);
  }
}

// Replace with the correct relative path to your data directory and the Pinecone index name
const directoryPath = path.join(__dirname, '../data/');
const indexName = 'graduating-project';

processAllPDFsInDirectory(directoryPath, indexName).catch(console.error);









/*
// 1. Import required modules
import { OpenAIEmbeddings } from "@langchain/openai";
import { RecursiveCharacterTextSplitter } from "langchain/text_splitter";
// 2. Export updatePinecone function
export const updatePinecone = async (client, indexName, docs) => {
  console.log("Retrieving Pinecone index...");
// 3. Retrieve Pinecone index
  const index = client.Index(indexName);
// 4. Log the retrieved index name
  console.log(`Pinecone index retrieved: ${indexName}`);
// 5. Process each document in the docs array
  for (const doc of docs) {
    console.log(`Processing document: ${doc.metadata.source}`);
    const txtPath = doc.metadata.source;
    const text = doc.pageContent;
// 6. Create RecursiveCharacterTextSplitter instance
    const textSplitter = new RecursiveCharacterTextSplitter({
      chunkSize: 1000,
    });
    console.log("Splitting text into chunks...");
// 7. Split text into chunks (documents)
    const chunks = await textSplitter.createDocuments([text]);
    console.log(`Text split into ${chunks.length} chunks`);
    console.log(
      `Calling OpenAI's Embedding endpoint documents with ${chunks.length} text chunks ...`
    );
// 8. Create OpenAI embeddings for documents
    const embeddingsArrays = await new OpenAIEmbeddings().embedDocuments(
      chunks.map((chunk) => chunk.pageContent.replace(/\n/g, " "))
    );
    console.log("Finished embedding documents");
    console.log(
      `Creating ${chunks.length} vectors array with id, values, and metadata...`
    );
// 9. Create and upsert vectors in batches of 100
    const batchSize = 100;
    let batch = [];
    for (let idx = 0; idx < chunks.length; idx++) {
      const chunk = chunks[idx];
      const vector = {
        id: `${txtPath}_${idx}`,
        values: embeddingsArrays[idx],
        metadata: {
          ...chunk.metadata,
          loc: JSON.stringify(chunk.metadata.loc),
          pageContent: chunk.pageContent,
          txtPath: txtPath,
        },
      };
      batch.push(vector);
      // When batch is full or it's the last item, upsert the vectors
      if (batch.length === batchSize || idx === chunks.length - 1) {
        await index.upsert({
          upsertRequest: {
            vectors: batch,
          },
        });
        // Empty the batch
        batch = [];
      }
    }
// 10. Log the number of vectors updated
    console.log(`Pinecone index updated with ${chunks.length} vectors`);
  }
};
*/