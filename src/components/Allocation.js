import React ,{useState, useEffect}from 'react'
import Navbar from './Navbar';
import { ethers } from 'ethers';
import Token_abi from './Token';



export default function Allocation() {


    const contractAddress = "0xE13064b5c29bBB377e3153D8EcB1cBD6c5BbAbBE";

    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [contract, setContract] = useState(null);

    const updateEthers = () => {
        let tempProvider = new ethers.providers.Web3Provider(window.ethereum);
        setProvider(tempProvider);

        let tempSigner = tempProvider.getSigner();
        setSigner(tempSigner);

        let tempContract = new ethers.Contract(contractAddress, Token_abi, tempSigner);
        setContract(tempContract);

    }
    useEffect(() => {
        updateEthers();
    }, []);


    const setHandler =  async(event) => {
        event.preventDefault();
        console.log(contract);
        

        let decimals= await contract.decimals();
        let amount = (event.target.setAmount.value)*( Math.pow(10, decimals));
        let receiverAddress = event.target.setAddress.value;
        await contract.approve(receiverAddress, amount);
    }
    const setHandler2=async(event)=>{
        event.preventDefault();
        

        let decimals= await contract.decimals();
        let amount = (event.target.setAmount2.value)*( Math.pow(10, decimals));
        let senderAddress = event.target.setSender.value;
        let receiverAddress = event.target.setReceiver.value;
        await contract.transferFrom(senderAddress,receiverAddress, amount);
        
    }

    return (
        <>
              <Navbar/>

            <div className='div1' style={{ padding: "20px 30px 20px 30px" }}>

                <h2>Allocate</h2>
                <form onSubmit={setHandler}>
                    <div className='div2'>
                        <input type="text" placeholder='Spender address' id="setAddress" /><br />
                    </div>

                    <div className='div2' style={{ marginBottom: "20px" }}>
                        <input type="number" placeholder='Amount' id="setAmount" min="0" /><br />
                    </div>
                    <button type={"submit"}>Transfer</button>
                </form>
            </div>


            <div className='div1' style={{ padding: "20px 30px 20px 30px" }}>

                <h2>Receive</h2>
                <form onSubmit={setHandler2}>
                    <div className='div2'>
                        <input type="text" placeholder='Sender address' id="setSender" /><br />
                    </div>

                    <div className='div2'>
                        <input type="text" placeholder='receiver address' id="setReceiver" /><br />
                    </div>

                    <div className='div2' style={{ marginBottom: "20px" }}>
                        <input type="number" placeholder='Amount1' id="setAmount2" min="0" /><br />
                    </div>
                    <button type={"submit2"}>Transfer</button>
                    {}
                </form>
            </div>
        </>
    )
}
