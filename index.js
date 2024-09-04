const fs = require('fs');
const axios = require('axios');
const colors = require('colors');

const checkEligibility = async (walletAddress) => {
  const url = 'https://api.getgrass.io/airdropAllocations';
  const headers = {
    'User-Agent':
      'Mozilla/5.0 (Macintosh; Intel Mac OS X 10.15; rv:130.0) Gecko/20100101 Firefox/130.0',
    Accept: 'application/json, text/plain, */*',
    'Accept-Language': 'en-US,en;q=0.5',
    'Accept-Encoding': 'gzip, deflate, br, zstd',
    Referer: 'https://www.grassfoundation.io/',
    Origin: 'https://www.grassfoundation.io',
    Connection: 'keep-alive',
    'Sec-Fetch-Dest': 'empty',
    'Sec-Fetch-Mode': 'cors',
    'Sec-Fetch-Site': 'cross-site',
    Pragma: 'no-cache',
    'Cache-Control': 'no-cache',
    TE: 'trailers',
  };
  const params = {
    input: JSON.stringify({ walletAddress: walletAddress }),
  };

  try {
    const response = await axios.get(url, { headers, params });
    return response.data;
  } catch (error) {
    console.error(
      `Error checking eligibility for ${walletAddress}:`,
      error.message
    );
    return null;
  }
};

const calculateTotalAllocation = (result) => {
  if (!result || !result.result || !result.result.data) return 0;
  return Object.values(result.result.data).reduce(
    (sum, value) => sum + value,
    0
  );
};

const main = async () => {
  const inputFile = 'wallet_addresses.txt'; // Replace with your input file name
  let totalAllocation = 0;

  const fileContent = fs.readFileSync(inputFile, 'utf-8');
  const walletAddresses = fileContent
    .split('\n')
    .filter((address) => address.trim() !== '');

  for (const walletAddress of walletAddresses) {
    const result = await checkEligibility(walletAddress);
    const allocation = calculateTotalAllocation(result);
    totalAllocation += allocation;

    if (allocation > 0) {
      console.log(`${walletAddress}: ${colors.green(allocation.toFixed(2))}`);
    } else {
      console.log(`${walletAddress}: ${allocation.toFixed(2)}`);
    }
  }

  console.log(
    '\n' + colors.yellow(`Total Allocation: ${totalAllocation.toFixed(2)}`)
  );
};

main().catch((error) => console.error('An error occurred:', error));
