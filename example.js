"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const swap_1 = require("./src/swap");
const types_1 = require("./src/types");
class Example {
    constructor(privateKey, mintAddress, mode) {
        this.payerPrivateKey = privateKey;
        this.mintAddress = mintAddress;
        this.transactionMode = mode;
    }
    main() {
        return __awaiter(this, void 0, void 0, function* () {
            const solIn = 0.0001; // Example value, adjust as needed
            const slippageDecimal = 0.25; // Example value, adjust as needed
            const tokenBalance = 1000; // Example value, adjust as needed
            try {
                // Call the buy function
                yield (0, swap_1.pumpFunBuy)(this.transactionMode, this.payerPrivateKey, this.mintAddress, solIn, slippageDecimal);
                // Call the sell function
                yield (0, swap_1.pumpFunSell)(this.transactionMode, this.payerPrivateKey, this.mintAddress, tokenBalance, slippageDecimal);
            }
            catch (error) {
                console.error('Error in main function:', error);
            }
        });
    }
}
// Usage
const privateKey = '4Af7gExm4jSJPXafF5nfzQquBNSYtG1mC6wZ94wc552WtouXx1grcbvSdAd3iA14K8Py47k4JJytgCti1wzu4vNy'; // Replace with your actual private key
const mintAddress = '3ufmHBGfvgjAWwsxbtLp9a4wb2pWFDPf9rW5U9jZWFJD'; //Replace with actual token mint address
const txMode = types_1.TransactionMode.Simulation; //Set to simulate to test, Execution to perform
const example = new Example(privateKey, mintAddress, txMode);
example.main();
