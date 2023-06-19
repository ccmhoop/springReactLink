import { useState } from "react";

// const MessageInput = () => {
//   const [message, setMessage] = useState("Type Message");

//   const updateMe = (event) => setMessage(event.target.value);

//   const submit = (event) => {
//     event.preventDefault();
//     console.log(`Your message is: "${message}"`);
//     setMessage("Type Message");
//   };

const MessageInput = () => {
  const [feedBack, setFeedback] = useState("Message");
  const [message, setMessage] = useState("Type Message");
  const [sender, setSender] = useState("Sender Name");

  const updateMe = (event) => setMessage(event.target.value);
  const updateSender = (event) => setSender(event.target.value);

  const submit = (event) => {
    event.preventDefault();
    if (message != ("Type Message"&&"") && sender != ("Sender Name"&&"") ) {
      console.log(`Your message is: "${message}" "${sender}"`);
      fetch("http://localhost:8080/api/v1/save", {
        method: "POST",
        body: JSON.stringify({
          contents: message,
          sender: sender,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          setFeedback("Error");
          console.log(err.message);
        });
      setFeedback("Message Send succesfull");
    } else {
      setFeedback("Failed : Enter Message");
    }
  };
  return (
    <>
      <p>{feedBack}</p>
      <form onSubmit={submit}>
        <input type="text" value={message} onChange={updateMe} />
        <input type="text" value={sender} onChange={updateSender} />
        <input type="submit" value="Send this message!" />
      </form>{" "}
    </>
  );
};

export default MessageInput;
