import fetch from 'node-fetch';
import dotenv from 'dotenv';

dotenv.config();

const INFURA_API_KEY = process.env.INFURA_API_KEY;

const transaction = {};

fetch(`https://linea-mainnet.infura.io/v3/${INFURA_API_KEY}`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    jsonrpc: '2.0',
    method: 'eth_estimateGas',
    params: [transaction],
    id: 1,
  }),
})
  .then((response) => response.json())
  .then((data) => {
    if (data.result) {
      const hexGas = data.result;
      const decimalGas = parseInt(hexGas, 16);

      console.log('Estimated Gas (Hex):', hexGas);
      console.log('Estimated Gas (Decimal):', decimalGas);
    } else if (data.error) {
      console.error('Error:', data.error);
    } else {
      console.error('Unexpected Response:', data);
    }
  })
  .catch((error) => {
    console.error('Request Error:', error);
  });
