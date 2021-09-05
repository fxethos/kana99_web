import { Transaction,ConfirmedTransaction, SystemProgram, clusterApiUrl, Connection,TransactionInstruction,AccountChangeCallback, PublicKey } from '@solana/web3.js';
import * as borsh from 'borsh';

const destinationPubkey = new PublicKey('3hdEvz5Sj6GXXPfQXLFQQTLoAejLbcomWhpQpRNKSJ47')
const programId = new PublicKey("8pmL3JFQdeUkYEWSNEkfkYf7GbZdixcDQvUtXfj958eC")

const ContestInstruction =  (function () {
    function ContestInstruction(fields) {
        if (fields === void 0) { fields = undefined; }
        this.contestids = "";
        this.datatype = 0
        if (fields) {
            this.contestids = fields.contestids;
            this.datatype = fields.datatype;

        }
    }
    return ContestInstruction;
}());

const ContestSchema = new Map([
        [ContestInstruction, {kind: 'struct', fields: [['contestids', 'String'],['datatype', 'u64']]}],
    ]);

const NETWORK = clusterApiUrl('devnet');

const connection = new Connection(NETWORK);

const send = async (contest_id) => {
    console.log("destination pubkey:", destinationPubkey.toBase58());
    console.log("program id:", programId.toBase58());
    const isPhantomConnected = window.solana && window.solana.isConnected;
    if (!isPhantomConnected) {
        alert("Please connect your wallet before proceeding!");
        window.solana.connect();
        return;
    }
    let ContestID = new ContestInstruction()
    ContestID.contestids = contest_id
    ContestID.datatype = 0
    const transaction = new Transaction().add(
        SystemProgram.transfer({
        fromPubkey: window.solana.publicKey,
        // toPubkey: '6qLQAekc6VUBqsCMuLoRHT6o3m4vELSureKo3rdGeMew',
        toPubkey: destinationPubkey,
        lamports: 100000000
        }),new TransactionInstruction({
            keys: [
                {pubkey : destinationPubkey, isSigner : false,  isWritable: true},  
            ],
            programId,
            data: Buffer.from(borsh.serialize(ContestSchema,ContestID)),
        })
        
            
    );
    transaction.feePayer = window.solana.publicKey;
    transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
    const signedTransaction = await window.solana.signTransaction(transaction);        
    const signature = await connection.sendRawTransaction(signedTransaction.serialize());
    console.log(signature);
}

export default send;