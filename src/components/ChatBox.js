import React, { useEffect, useRef, useState } from "react";
import Message from "./Message";
import SendMessage from "./SendMessage";
import {query,collection,orderBy,onSnapshot,limit} from "firebase/firestore";
import { db } from "../firebase";
const ChatBox = () => {
    window.scrollTo(0, document.body.scrollHeight);
    const scroll = useRef();
    const [messages, setMessages] = useState([]);
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt"),
            limit(100)
        );
        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            let messages = [];
            QuerySnapshot.forEach((doc) => {
            messages.push({ ...doc.data(), id: doc.id });
            });
            setMessages(messages);
            scroll.current.scrollIntoView({ behavior: "smooth" });
        });
        return () => unsubscribe;
        }, []);
    return (
    <main className="chat-box">
        <span ref={scroll}></span>
        <div className="messages-wrapper">
        {messages?.map((message) => (
            <Message key={message.id} message={message} />
        ))}
        </div>
        <SendMessage scroll={scroll} />
    </main>
    );   
};

export default ChatBox;