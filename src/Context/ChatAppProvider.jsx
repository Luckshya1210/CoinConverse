import { useState, useEffect } from "react";
import ChatAppContext from "./ChatAppContext";
import { checkWalletconxt,connectWithcontract,walletConxt } from '../Utlis/apiFeature'
import { useNavigate } from "react-router-dom";
const ChatAppProvider=({children})=>{
    const title="welcome to chat app";
    const [account,setAccount]=useState("");
    const [user,setUser]=useState("");
    const [friendList,setFriendList]=useState([]);
    const [friendMsg,setFriendMsg]=useState([]);
    const [loading,setLoad]=useState(false);
    const [userList,setUserList]=useState([]);
    const [error,setError]=useState("");

    const [currentUser,setCurrentUser]=useState("");
    const [currentUserAddress,setCurrentUserAddress]=useState("")
    const navigate=useNavigate();
    const fetchData=async()=>{
        try{
            const contract=await connectWithcontract(); 
            const connectAcc=await walletConxt();
            setAccount(connectAcc);
            const userName=await contract.getUser(connectAcc);
            setUser(userName)

            const frndlist=await contract.getAllFriends();
            setFriendList(frndlist)

            const userslist=await contract.getAllusr();
            setUserList(userslist);
            // window.location.reload();
        }catch(error){
            setError("Install and connect wallet") //
            console.log(error)
        }
    }

    useEffect(()=>{
        fetchData();
    },[])

    const readMessage=async(friendAdd)=>{
        try{
            const contract=await connectWithcontract();
            const read=await contract.readMessage(friendAdd);
            setFriendMsg(read)
        }catch(err){
            console.log("You're caught up! No messages!")
        }
    }

    const createAcc=async({name,accAdd})=>{
        try{
            // if(name || accAdd){
            //     return setError("Name and acc cannot be empty")
            // }
            const contract=await connectWithcontract();
            const getcreateduser=await contract.createAcc(name);
            setLoad(true);
            await getcreateduser.wait();
            setLoad(false);
            window.location.reload();
        }catch(err){
            console.log(err)
            setError("Error while creating your account")
        }
    }

    const addFrnd=async({name,accAdd})=>{
        try{
            // if(name || accAdd){
            //     return setError("Name and acc cannot be empty")
            // }
            const contract=await connectWithcontract();
            const addfr=await contract.addFriend(accAdd,name);
            setLoad(true);
            await addfr.wait();
            setLoad(false);
            navigate('/chat')
            window.location.reload();
        }catch(err){
            setError("Error while adding friend")
        }
    }

    const sendmessage=async({msg,address})=>{
        try{
            // if(msg||address){
            //     return setError("Pls type your msg")
            // }
            const contract=await connectWithcontract();
            const addmsg=await contract.sendMessage(address,msg);
            setLoad(true);
            await addmsg.wait();
            setLoad(false);
            window.location.reload();
        }catch(err){
            setError("Pls reload or try again later")
        }
    }

    const readuser=async(userAdd)=>{
        const contract=await connectWithcontract();
        const userName=await contract.getUser(userAdd);
        setCurrentUser(userName);
        setCurrentUserAddress(userAdd)
    }

    return(
        <ChatAppContext.Provider value={{readMessage,sendmessage,createAcc,addFrnd,readuser,walletConxt,checkWalletconxt,account,user,friendList,friendMsg,loading,userList,error,currentUser,currentUserAddress}} >
            {children}
        </ChatAppContext.Provider>
    )
}

export default ChatAppProvider