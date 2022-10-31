import { ethers } from 'ethers';
import React, { useEffect, useState } from 'react';
import Token_abi from './Token';




export default function Transfer(props) {




    const setHandler = async (event) => {


        event.preventDefault();
        let decimals=await props.contract.decimals();
        let amount = (event.target.setAmount.value)*( Math.pow(10, decimals));
        let receiverAddress = event.target.setAddress.value;
        await props.contract.transfer(receiverAddress, amount);
       
    }


    return (
        <>
            <div className='div1' style={{ padding: "20px 30px 20px 30px" }}>

                <h2>Send Token</h2>
                <form onSubmit={setHandler}>
                    <div className='div2'>
                        <input type="text" placeholder='Address' id="setAddress" /><br />
                    </div>

                    <div className='div2' style={{marginBottom:"20px"}}>
                        <input type="number" placeholder='Amount' id="setAmount" min="0" /><br />
                    </div>
                    <button type={"submit"}>Transfer</button>
                </form>
            </div>
        </>
    )
}
