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
exports.getCoinData = void 0;
const axios_1 = __importDefault(require("axios"));
function getCoinData(mintStr) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const url = `https://client-api-2-74b1891ee9f9.herokuapp.com/coins/${mintStr}`;
            const response = yield axios_1.default.get(url, {
                headers: {
                    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:125.0) Gecko/20100101 Firefox/125.0",
                    "Accept": "*/*",
                    "Accept-Language": "en-US,en;q=0.5",
                    "Accept-Encoding": "gzip, deflate, br",
                    "Referer": "https://www.pump.fun/",
                    "Origin": "https://www.pump.fun",
                    "Connection": "keep-alive",
                    "Sec-Fetch-Dest": "empty",
                    "Sec-Fetch-Mode": "cors",
                    "Sec-Fetch-Site": "cross-site",
                    "If-None-Match": 'W/"43a-tWaCcS4XujSi30IFlxDCJYxkMKg"'
                }
            });
            if (response.status === 200) {
                return response.data;
            }
            else {
                console.error('Failed to retrieve coin data:', response.status);
                return null;
            }
        }
        catch (error) {
            console.error('Error fetching coin data:', error);
            return null;
        }
    });
}
exports.getCoinData = getCoinData;
