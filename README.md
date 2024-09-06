# Linea Transaction Tools

This project contains scripts for estimating gas on the Linea network using Infura and interacting with the Linea canonical token bridge. Below are the two parts of the technical test.

## Prerequisites
- Node.js (v14 or higher)
- npm (Node package manager)
- An Infura account and API key for accessing the Linea network

## Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd linea-transaction-tools
   
2. Install dependencies:
   ```bash
    npm install

3. Set up environment variables: Create a .env file in the root directory and add your Infura API key:
   ```bash
    INFURA_API_KEY=your_infura_api_key_here

### Part 1: Gas Estimation Script

This script estimates the gas for a simple transaction using the `eth_estimateGas` method on the Linea network.

#### Running the Gas Estimation Script

1. Navigate to the `part-1/` directory:
   ```bash
   cd part-1
2. Run the script
   ```bash
   node index.js
3. Expected output
   ```bash
   Estimated Gas (Hex): 0xd221
   Estimated Gas (Decimal): 53793

### Part 2: Canonical Token Bridge Script

This script retrieves a `MessageSent` event from a transaction made using the Linea canonical token bridge from L1 to L2. It extracts and displays the following details from the transaction: sender, destination, fee, value, message nonce, calldata, and message hash.

#### Running the Canonical Token Bridge Script

1. Navigate to the `part-2/` directory:
   ```bash
   cd part-2
2. Run the script
   ```bash
   node index.js
3. Expected output
   ```bash
   Message Details:
   sender: 0x0bFD8d4Be59184C177996b98e42DE1e0F4866b64
   destination: 0x0bFD8d4Be59184C177996b98e42DE1e0F4866b64
   fee: 0.000012720001484 ETH
   value: 2.557 ETH
   messageNonce: 701941
   calldata: None
   messageHash: 0x0000000000000000000000000000000000000000000000000000000000000000
