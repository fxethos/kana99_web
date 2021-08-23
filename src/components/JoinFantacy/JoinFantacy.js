import React, { useCallback } from 'react'
import { Link } from 'react-router-dom';
import './JoinFantacy.scss';
import { Button } from '../Button/Button';
import { JackInTheBox, Roll, Zoom } from "react-awesome-reveal";
import { Transaction,ConfirmedTransaction, SystemProgram, clusterApiUrl, Connection,TransactionInstruction,AccountChangeCallback, PublicKey } from '@solana/web3.js';
import * as borsh from 'borsh';
const JoinFantacy = () => {
    
    
    const destinationPubkey = new PublicKey('CHdhuY41nUDaiTAiRRwm1qkEbdXMtSJD2XcuxNQdQf21')
    const programId = new PublicKey("3LkPWoPQJYXdjD62hcY8DwK6baMCKLRKVBH4MWmxDBEC")
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
    const onSend = async () => {
        const isPhantomConnected = window.solana && window.solana.isConnected;
        if (!isPhantomConnected) {
            alert('Phantom wallet not connected!');
            return;
        }
        let ContestID = new ContestInstruction()
        ContestID.contestids = "tradla12"
        ContestID.datatype = 2
        const transaction = new Transaction().add(
            SystemProgram.transfer({
            fromPubkey: window.solana.publicKey,
            // toPubkey: '6qLQAekc6VUBqsCMuLoRHT6o3m4vELSureKo3rdGeMew',
            toPubkey: destinationPubkey,
            lamports: 100
            }),new TransactionInstruction({
                keys: [{pubkey : destinationPubkey, isSigner : false,  isWritable: true},  
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
         
        alert('Transaction successful. See console for details.');
        // const transsign2 = await connection.getConfirmedTransaction(signature);
        // console.log(transsign2)
       
        async function parseTransaction(logs,context){
            const requiredAccounts = [''];
            //console.log('working')
            let signature = await logs.signature
            console.log(signature)
            let payer_pubkey =  await connection.getParsedConfirmedTransaction(signature);
            console.log(payer_pubkey)
            let account = await payer_pubkey.transaction.message.instructions
            let accounts = await account[0].parsed
            //console.log(accounts.info.source)
            requiredAccounts.push(accounts.info.source)
            console.log(requiredAccounts)
           
        }
      

        let AccChange = await connection.onLogs(
            destinationPubkey,
            parseTransaction,
        )
        console.log(AccChange)
        
      

      
      
    }
    return (
        <React.Fragment>
            <div className="joinfantacy_block">
                <div className="container">
                    {/* <Zoom triggerOnce="true" Direction="right"> */}

                    <JackInTheBox>
                        <div className="row align-items-center">
                            <div className="col-sm-12 align-self-center ">
                                <h5 className="header-content"> Start playing in 3 easy steps</h5>
                                <h1 className="header-title header-content" >DAILY FANTASY, SIMPLIFIED.</h1>
                            </div>
                        </div>
                    </JackInTheBox>
                    <div className="row align-items-center">
                        <div className="col-sm-4 col-md-4">
                            <div className="card radius shadowDepth1">

                                <div className="card__content card__padding">

                                    <div className="card__share">
                                        <span id="share" className="share-icon" >1</span>
                                    </div>
                                    <article className="card__article">
                                        <Zoom>
                                            <h5>PICK YOUR FAVORITE STARS</h5>
                                            <p className="orange">Make an entry under 60 seconds.</p>
                                            <p>Simply pick 2, 3, or 4 players regardless of sport.</p>
                                        </Zoom>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card radius shadowDepth1">
                                <div className="card__content card__padding">
                                    <div className="card__share">
                                        <Link to="/" id="share" className="share-icon" >2</Link>
                                    </div>
                                    <article className="card__article">
                                        <Zoom>
                                            <h5>CHOOSE THEIR OVER/UNDER</h5>
                                            <p className="orange">It’s just you vs, the numbers.</p>
                                            <p>Choose the over or under on the players’ projected outcome.</p>
                                        </Zoom>
                                    </article>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="card radius shadowDepth1">
                                <div className="card__content card__padding">
                                    <div className="card__share">
                                        <Link to="/" id="share" className="share-icon" >3</Link>
                                    </div>
                                    <article className="card__article">
                                        <Zoom>
                                            <h5>WATCH YOUR PLAYERS RACK UP POINTS</h5>
                                            <p className="orange">WIN BIG!</p>
                                            <p>The more players you choose correctly, the more money you win.</p>
                                        </Zoom>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="col-sm-4 offset-sm-4  header-content">
                        <Button big fontBig primary onClick={onSend}>
                            JOIN FANTASY
                        </Button>
                    </div>
                    {/* </Zoom> */}
                </div>
            </div>

            <div className="hero">
                <div className="container">
                <Roll triggerOnce="true">
                    <div className="row">
                        <div className="col-sm-6  col-lg-6 offset-sm-3 offset-lg-3 content-align">
                            <h1 className="header-title header-content" > <span style={{ color: 'white', paddingRight: '10px', fontFamily: 'sports world' }}> Kana99 </span> IS THE GOAT</h1>
                            <p>Kana99 is the best Daily Fantasy sites in the industry. The customer service is excellent. The variety of sports is great by itself, but the fact that you can mix and match players from different sports in your entries makes it even better. The site is very simple to navigate & the return on investment is very nice. I HIGHLY recommend Kana99!</p>
                        </div>
                    
                    </div>
                    <div className="col-sm-4 col-xs-4 offset-sm-4 offset-xs-4">
                            <Button sm big fontBig primary>
                                SignUp and Play Now!
                            </Button>
                        </div>
                </Roll>
                </div>
            </div>


        </React.Fragment>
    )
}

export default JoinFantacy;


