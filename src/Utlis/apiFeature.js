import {ethers} from "ethers"
import Web3Modal from "web3modal"

import { chatAppabi,chatAppadd } from "../Context/constants"

export const checkWalletconxt=async()=>{
    try{
        if(!window.ethereum){
            console.log("Install metamask");
        }
        const accounts=await window.ethereum.request({
            method:"eth_accounts"
        })
        const firstAcc=accounts[0];
        return firstAcc;
    }catch(err){
            console.log(err);
    }
    
}

export const walletConxt=async()=>{
    try{
        if(!window.ethereum){
            console.log("Install metamask");
        }
        const accounts=await window.ethereum.request({
            method:"eth_requestAccounts"
        })
        const firstAcc=accounts[0];
        return firstAcc;
    }catch(err){
        console.log(err);
    }
}

const fetchContract=(signerorProvider) =>new ethers.Contract(chatAppadd,chatAppabi,signerorProvider);

export const connectWithcontract=async()=>{
    try{
        const web3modal=new Web3Modal();
        const cxt=await web3modal.connect(); 
        const provider=new ethers.providers.Web3Provider(cxt);
        const signer=await provider.getSigner();
        const contract=fetchContract(signer);
        return contract;
    }catch(err){
        console.log(err);
    }
}

export const coverTime=(time)=>{
    const d=new Date(time.toNumber());
    const rtime=d.getHours()+"/"+d.getMinutes()+"/"+d.getSeconds()+" Date:"+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear();
    return rtime;
}