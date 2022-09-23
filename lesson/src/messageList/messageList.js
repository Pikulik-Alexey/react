import React, { useState } from 'react';
import './messageList.css';

function Msg() {

   return (
      <div className="Msg">
         <Message />
      </div>
   );
}

export default Msg;

const Message = (props) => {

   const [messageList, setMessageList] = useState([
      {
         text: "Я учусь на курсе по React",
         author: "Алексей"
      },
      {
         text: "Я учусь на курсе по React",
         author: "Алексей",
         computer: "Домашний"
      }
   ]
   )

   return (
      <div>
         {
            messageList.map(e => <div>{e}</div>)
         }
      </div>
   );
}