import React, { useEffect, useState } from 'react'
import { ethers } from 'ethers';

import Navbar from './Navbar'
import Transfer from './Transfer'
import Allocation from './Allocation'
import Token_abi from './Token';
import Balance from './Balance';


export default function Home() {
    const contractAddress = "0xE13064b5c29bBB377e3153D8EcB1cBD6c5BbAbBE";
    const [errorMessage, setErrorMessage] = useState(null);

    const [tokenName, setTokenName] = useState(null);
    const [balance, setBalance] = useState(null);
    const [defaultAccount, setDefaultAccount] = useState(null);
    const [connButtonText, setConnButtonText] = useState("Connect Wallet");
    const [currentContractVal, setCurrentContractVal] = useState(null);

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);


    const connectWalletHandler = () => {
        if (window.ethereum) {
            window.ethereum.request({ method: "eth_requestAccounts" })
                .then(result => {
                    accountChangeHandler(result[0]);


                })
        } else {
            setErrorMessage("Need to install Metamask")
        }
    }
    const accountChangeHandler = (newAccount) => {
        setDefaultAccount(newAccount);
        updateEthers();

    }

    const updateEthers = () => {
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tempProvider);

        let tempSigner = tempProvider.getSigner();
        setSigner(tempSigner);

        let tempContract = new ethers.Contract(contractAddress, Token_abi, tempSigner);
        setContract(tempContract);

    }
    useEffect(() => {
        connectWalletHandler();
    }, []);

    return (
        <div>


            <div>
                <Navbar />

                <div><Balance contract={contract} defaultAccount={defaultAccount} /></div>
                <div><Transfer contract={contract} /></div>


            </div>
        </div>
    )
}
