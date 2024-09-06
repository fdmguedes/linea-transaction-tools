import { ethers } from 'ethers';
import dotenv from 'dotenv';

dotenv.config({ path: '../.env' });

const infuraApiKey = process.env.INFURA_API_KEY;
const provider = new ethers.JsonRpcProvider(`https://mainnet.infura.io/v3/${infuraApiKey}`);

const abi = [
  "event MessageSent(address indexed sender, address indexed destination, uint256 fee, uint256 value, uint256 messageNonce, bytes calldata, bytes32 messageHash)"
];

const canonicalTokenBridgeAddress = "0xd19d4B5d358258f05D7B411E21A1460D11B0876F";
const contract = new ethers.Contract(canonicalTokenBridgeAddress, abi, provider);

async function getMessageFromTransaction(txHash) {
  const receipt = await provider.getTransactionReceipt(txHash);
  const messageSentEvent = receipt.logs
    .map(log => {
      try {
        return contract.interface.parseLog(log);
      } catch {
        return null;
      }
    })
    .find(log => log && log.name === "MessageSent");

  if (!messageSentEvent) return;

  const { sender, destination, fee, value, messageNonce, calldata, messageHash } = messageSentEvent.args;

  const feeBN = ethers.toBigInt(fee);
  const valueBN = ethers.toBigInt(value);

  console.log("Message Details:");
  console.log(`sender: ${sender}`);
  console.log(`destination: ${destination}`);
  console.log(`fee: ${ethers.formatEther(feeBN)} ETH`);
  console.log(`value: ${ethers.formatEther(valueBN)} ETH`);
  console.log(`messageNonce: ${messageNonce}`);
  console.log(`calldata: ${calldata ? calldata : 'None'}`);
  console.log(`messageHash: ${messageHash}`);
}

const txHash = '0x287c1b7d3ec9b3a941da68046f5f5f491a3f1980632afbcc685e75d5326698c9';
getMessageFromTransaction(txHash).catch(console.error);
