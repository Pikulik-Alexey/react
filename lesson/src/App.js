import React, { useState } from 'react';
import './App.css';

function App() {
  // const sayStudy = "Я учусь на курсе по React";

  return (
    <div className="App">
      {/* <Message sayStudy={sayStudy} /> */}
      <Message />
    </div>
  );
}

export default App;

const Message = (props) => {

  const [messageList, setMessageList] = useState({
    text: "Я учусь на курсе по React",
    author: "Алексей",
    computer: "Домашний"
  })

  return (
    <div>
      {messageList.author}
    </div>
  );
}




// function App() {
//   const sayStudy = "Я учусь на курсе по React";

//   return (
//     <div className="App">
//       <Message sayStudy={sayStudy} />
//     </div>
//   );
// }

// export default App;

// const Message = ({ sayStudy }) => {

//   return (
//     <div className='container'>
//       <h2 style={{ color: "#ffffff" }}>Привет, {sayStudy}</h2>
//     </div >
//   );
// }




// // function App() {
// //   // const userName = "Алексей"
// //   const theme = "light"

// //   return (
// //     <div className="App">
// //       <Myheader theme={theme} />
// //       {/*<Myheader name={userName} id={1} /> */}
// //     </div>
// //   );
// // }

// // export default App;

// // // const Myheader = (props) => {}

// // const Myheader = ({ theme }) => {
// //   return (
// //     <div style={{ background: theme === "dark" ? "#282c34" : "#000000" }}>
// //       <h2>Привет, Алексей</h2>
// //     </div >
// //   );
// }
