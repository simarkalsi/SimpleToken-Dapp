import React, { useState, useEffect } from 'react'
import './balance.css';


export default function Balance(props) {

    const [balance, setBalance] = useState(null);
    const [tokenName, setTokenName] = useState(null);

    useEffect(() => {
        if (props.contract != null) {

            updateTokenName();
            updateBalance();

        }
    }, [props.contract])

    const updateBalance = async () => {
        let balanceBigN = await props.contract.balanceOf(props.defaultAccount);
        let balanceNumber = balanceBigN.toNumber();
        let decimals = await props.contract.decimals();
        let tokenBalance = balanceNumber / Math.pow(10, decimals);
        setBalance(tokenBalance);
    }

    const updateTokenName = async () => {
        setTokenName(await props.contract.symbol());
    }
    return (
        <>
            <div className='div1'>
                <div className='div2'>
                    <div className='div3' ><p>ADDRESS</p></div>
                    
                    <div className='div4'><p>{props.defaultAccount}</p></div>
                </div>
                <div className='div2'>
                    <div className='div3' ><p>BALANCE</p></div>
                
                    <div className='div4'><p>{balance} {tokenName} </p></div>
                </div>
            </div>
        </>
    )
}
