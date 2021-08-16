import React from 'react'
import { Link } from 'react-router-dom';
import './JoinFantacy.scss';
import { Button } from '../Button/Button';
import { JackInTheBox, Roll, Zoom } from "react-awesome-reveal";
import { Transaction, SystemProgram, clusterApiUrl, Connection,TransactionInstruction, PublicKey } from '@solana/web3.js';
import * as borsh from 'borsh';

const JoinFantacy = () => {
    const programId = new PublicKey('5aK1MWY11xeagyhSAG9WHMKJnMSkFqw5KLJXF6Meo9j7')
    const greetedPubkey = new PublicKey('BAeT8QbyKRvxsCD2LuFCisznWkUux8WmY1iWhXrHpyv6')
    const TransInstruction = /** @class */ (function () {
        function TransInstruction(fields) {
            if (fields === void 0) { fields = undefined; }
            this.playerid = 0;
            if (fields) {
                this.playerid = fields.playerid;
            }
        }
        return TransInstruction;
    }());

    const PlayerSchema = new Map([
        [TransInstruction, {kind: 'struct', fields: [['playerid', 'u64']]}],
      ]);

    const NETWORK = clusterApiUrl('devnet');
    const connection = new Connection(NETWORK);
    const onSend = async () => {
        const isPhantomConnected = window.solana && window.solana.isConnected;
        if (!isPhantomConnected) {
            alert('Phantom wallet not connected!');
            return;
        }
        let playerId = new TransInstruction()
        playerId.playerid = 9876
        const transaction = new Transaction().add(
            SystemProgram.transfer({
            fromPubkey: window.solana.publicKey,
            // toPubkey: '6qLQAekc6VUBqsCMuLoRHT6o3m4vELSureKo3rdGeMew',
            toPubkey: greetedPubkey,
            lamports: 100
            }),new TransactionInstruction(
                {keys: [{pubkey: greetedPubkey, isSigner: false, isWritable: true},
                    {pubkey: greetedPubkey, isSigner: false, isWritable: true},
                    {pubkey: greetedPubkey, isSigner: false, isWritable: true},
                ],
                programId,
                data: Buffer.from(borsh.serialize(PlayerSchema,playerId)),
                 // All instructions are hellos
              })
        );
        transaction.feePayer = window.solana.publicKey;
        transaction.recentBlockhash = (await connection.getRecentBlockhash()).blockhash;
        const signedTransaction = await window.solana.signTransaction(transaction);        
        const signature = await connection.sendRawTransaction(signedTransaction.serialize());
        console.log(signature);
        alert('Transaction successful. See console for details.');
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


