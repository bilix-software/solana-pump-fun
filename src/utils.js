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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferFromUInt64 = exports.sendAndConfirmTransactionWrapper = exports.createTransaction = exports.getKeyPairFromPrivateKey = void 0;
const web3_js_1 = require("@solana/web3.js");
const web3_js_2 = require("@solana/web3.js");
const bs58_1 = __importDefault(require("bs58"));
function getKeyPairFromPrivateKey(key) {
    return __awaiter(this, void 0, void 0, function* () {
        return web3_js_1.Keypair.fromSecretKey(new Uint8Array(bs58_1.default.decode(key)));
    });
}
exports.getKeyPairFromPrivateKey = getKeyPairFromPrivateKey;
function createTransaction(connection, instructions, payer) {
    return __awaiter(this, void 0, void 0, function* () {
        const transaction = new web3_js_2.Transaction().add(...instructions);
        transaction.feePayer = payer;
        transaction.recentBlockhash = (yield connection.getRecentBlockhash()).blockhash;
        return transaction;
    });
}
exports.createTransaction = createTransaction;
function sendAndConfirmTransactionWrapper(connection, transaction, signers) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const signature = yield (0, web3_js_2.sendAndConfirmTransaction)(connection, transaction, signers, { skipPreflight: true, preflightCommitment: 'confirmed' });
            console.log('Transaction confirmed with signature:', signature);
            return signature;
        }
        catch (error) {
            console.error('Error sending transaction:', error);
            return null;
        }
    });
}
exports.sendAndConfirmTransactionWrapper = sendAndConfirmTransactionWrapper;
function bufferFromUInt64(value) {
    let buffer = Buffer.alloc(8);
    buffer.writeBigUInt64LE(BigInt(value));
    return buffer;
}
exports.bufferFromUInt64 = bufferFromUInt64;
