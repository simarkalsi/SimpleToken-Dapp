import React,{ useState } from 'react'
import './connect.css';
import { ethers } from 'ethers';
import Token_abi from './Token';
import {useNavigate } from 'react-router-dom';


export default function Connect() {

  const navigate=useNavigate();

  const contractAddress="0xE13064b5c29bBB377e3153D8EcB1cBD6c5BbAbBE";
  const[contract,setContract]=useState(null);


  const[connButtonText,setConnButtonText]=useState("CONNECT");
  const [errorMessage, setErrorMessage] =useState(null);
  const[defaultAccount,setDEfaultAccount]=useState(null);
  const[provider,setProvider]=useState(null);
  const[signer,setSigner]=useState(null);


  const connectWalletHandler=()=>{
    if(window.ethereum){
        window.ethereum.request({method:"eth_requestAccounts"})
        .then(result=>{
            accountChangeHandler(result[0]);
            setConnButtonText("WalletConnected");
            navigate("/home")
          
           
        })
    }else{
        setErrorMessage("Need to install Metamask")
    }
}
const accountChangeHandler=(newAccount)=>{
  setDEfaultAccount(newAccount);
  updateEthers();

}
const updateEthers=()=>{
  let tempProvider=new ethers.providers.Web3Provider(window.ethereum);
  setProvider(tempProvider);

  let tempSigner=tempProvider.getSigner();
  setSigner(tempSigner);

  let tempContract =new ethers.Contract(contractAddress,Token_abi,tempSigner);
  setContract(tempContract);
}

  return (
    <>
    
    <div className='div1'>
    <h1>Connect to your Wallet</h1>
    <button onClick={connectWalletHandler}>{connButtonText}</button>

    {errorMessage}
    
    </div>
    </>
  )
}
