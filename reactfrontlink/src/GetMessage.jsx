import { useState, useEffect } from "react";
const GetMessage = () => {
  const [messageId, setMessageId] = useState("Message ID");
//   const [sender, setSender] = useState("Sender Name");

  const updateMe = (event) => setMessageId(event.target.value);
//   const updateSender = (event) => setSender(event.target.value);

//   useEffect(() => {
//     fetch(`http://localhost:8080/api/v1/message`)
//       .then((response) => response.json())
//       .then((actualData) => setMessage(actualData))
//       .catch((err) => console.log(`An error has occurred: ${err.message}.`));
//   }, []);

useEffect(() => {
    fetch(`http://localhost:8080/api/v1/message/259`)
      .then((response) => response.json())
      .then((actualData) => setMessageId(actualData))
      .catch((err) => console.log(`An error has occurred: ${err.message}.`));
  }, []);


  const submit = (event) => {
    // useEffect(() => {
    //   fetch(`http://localhost:8080/api/v1/message/259`)
    //     .then((response) => response.json())
    //     .then((actualData) => setMessageId(actualData))
    //     .catch((err) => console.log(`An error has occurred: ${err.message}.`));
    // }, []);
    // console.log(messageId);
    console.log("Submitted " + messageId)
  };
  console.log(messageId);
  return (
    <>
    <p>{messageId.contents}</p>
      {/* <p>{feedBack}</p> */}
      <form onSubmit={submit}>
        <input type="text" value={messageId} onChange={updateMe} />
        {/* <input type="text" value={sender} onChange={updateSender} /> */}
        <input type="submit" value="Send this message!" />
      </form>{" "}
    </>
  );
};

export default GetMessage;
