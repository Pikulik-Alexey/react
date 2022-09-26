import React, { useEffect, useState } from 'react';
import './MessageList.css';


function MessageList() {

   const [messageList, setMessageList] = useState([])
   const [messageBody, setMessageBody] = useState({
      text: '',
      autor: ''
   })


   const Robot_Message = 'Привет, я получил ваше сообщение!'

   useEffect(() => {
      if (messageList.length > 0 && messageList.slice(-1)[0].author !== 'robot') {
         setTimeout(() => {
            setMessageList(pervstate => [...pervstate, { text: Robot_Message, author: 'robot' }])
         }, 1500)
      }
   }, [messageList])

   return (
      <div className='msg'>
         <Form data={messageBody} setData={setMessageBody} setMessage={setMessageList}></Form>
         <div className='msgList'>
            {
               messageList.map((e, i) => <Message text={e.text} author={e.author} key={i} />)
            }
         </div>
      </div>
   );
}


export default MessageList;

const Form = ({ data, setData, setMessage }) => {

   const { text, author } = data

   const submitForm = (e) => {
      e.preventDefault()
      if (text.length > 0) {
         setMessage(pervstate => [...pervstate, { text, author }])
      }
      setData(
         {
            text: '',
            author: ''
         }
      )
   }

   return (
      <form onSubmit={submitForm}>
         <input className='form' placeholder='Имя' value={text} onChange={(e) =>
            setData(pervstate => ({ ...pervstate, text: e.target.value })
            )} />

         <input className='form' placeholder='Текст' value={author} onChange={(e) =>
            setData(pervstate => ({ ...pervstate, author: e.target.value })
            )} />

         <button className='btn' type='submit'>Отправить</button>

      </form>
   )
}


const Message = ({ author, text }) => {

   return (
      <div>
         <h1>{author}</h1>
         <p>{text}</p>
      </div>
   )
}