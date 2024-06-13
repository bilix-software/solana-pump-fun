import { pumpFunBuy, pumpFunSell} from './src/swap';
import { TransactionMode } from './src/types'

class Example {
    private payerPrivateKey: string;
    private mintAddress: string;
    private transactionMode: TransactionMode;

    constructor(privateKey: string, mintAddress: string, mode: TransactionMode) {
        this.payerPrivateKey = privateKey;
        this.mintAddress = mintAddress;
        this.transactionMode = mode;
    }

    async main() {
        const solIn = 0.0001; // Example value, adjust as needed
        const slippageDecimal = 0.25; // Example value, adjust as needed
        const tokenBalance = 1000; // Example value, adjust as needed
        const priorityFeeInSol = 0.0001; // Example value for tip to get faster inclusion, adjust as needed

        try {
            // Call the buy function
            await pumpFunBuy(this.transactionMode, this.payerPrivateKey, this.mintAddress, solIn, priorityFeeInSol, slippageDecimal);

            // Call the sell function
            //await pumpFunSell(this.transactionMode, this.payerPrivateKey, this.mintAddress, tokenBalance,priorityFeeInSol, slippageDecimal);
        } catch (error) {
            console.error('Error in main function:', error);
        }
    }
}

/** Usage
 *  --Generating a private key
 *  Using solana.web3 Keypair
 *  const newKeypair = Keypair.generate();
    const newKeypairArray = Array.from(newKeypair.secretKey);
    const newPrivateKey = bs58.encode(newKeypair.secretKey);

    The bs58 encoded secret key is what you want to put in below as private key. You will see that this is an 88 character string and
    matches with the export from a phantom wallet.
 */
const privateKey = 'your_private_key'; // Replace with your actual private key
const mintAddress = 'your_token_mint_address'; //Replace with actual token mint address
const txMode = TransactionMode.Simulation; //Set to simulate to test, Execution to perform

const example = new Example(privateKey,mintAddress, txMode);
example.main();
