# Grass Multi Airdrop Checker

A Node.js tool to check multiple wallet address eligibilities for Grass airdrop. This script checks wallet addresses against the Grass API. No need to connect wallet

## Features

- No proxy required
- Calculates and displays individual and total token allocations
- Colored output for easy identification of eligible addresses
- Does not require any wallet connection

## Prerequisites

- **Node.js**: Ensure you have Node.js installed. You can download it from [Node.js](https://nodejs.org/).

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/dmytrmk/Grass-Multi-Airdrop-Checker.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Grass-Multi-Airdrop-Checker
   ```

3. Install the dependencies:
   ```bash
   npm install
   ```

## Usage

1. Prepare your `wallet_addresses.txt` file with one wallet address per line:

   ```txt
   WALLET1...
   WALLET2...
   WALLET3...
   ```

2. Run the airdrop checker:

   ```bash
   node index.js
   ```

   The script will output each checked address with its allocation (if any) and display the total allocation at the end.

## Example Output

```
WALLET1...: 0.00
WALLET2...: 0.00
WALLET3...: 47.58
WALLET4...: 12.26
WALLET5...: 22.52
WALLET6...: 23.14

Total Allocation: 105.50
```

Eligible addresses with non-zero allocations are displayed in green.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Support

If you encounter any issues or have any questions, please open an issue on GitHub or contact me via email (available on my GitHub profile).

## Disclaimer

This tool is for informational purposes only. Always verify your eligibility through official channels. The authors are not responsible for any errors or omissions in the results provided by this tool.
