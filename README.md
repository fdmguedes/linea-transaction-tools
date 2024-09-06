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
   npm start
3. Expected output
   ```bash
   Estimated Gas (Hex): 0xd221
   Estimated Gas (Decimal): 53793
