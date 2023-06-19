import { useEffect, useState } from 'react';
import MessageInput from './MessageInput';
import GetMessage from './GetMessage'
const App = () => {

    return (

    <><GetMessage/>
    <MessageInput />
    

    </> 
    )
};
export default App
//  {/* <p>{message !== null ? `The message from ${message.sender} for you is: "${message.contents}".` : "Your message is being loaded..."}</p> */}
//  return <p>{message !== "" ? `The message for you is: "${message}".` : "Your message is being loaded..."}</p>