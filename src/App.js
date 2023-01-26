
//-------------- master class -1


// import React, { useState } from 'react';


// function App() {
//   const [count, setCount] = useState(10);
//   // const [flag, setFlag] = useState(false);

//   return (
//     <div>
//       <h1>Hello FunctionUp!</h1>
//       <p>Start editing to see some magic happen :)</p>
//       <p>Count : {count}</p>
//       <button
//         onClick={() => {
//           setCount(count - 1);
//         }}
//       >
//         Minus 1
//       </button>
//       <br />
//       {/* Flag is {flag ? 'true' : 'false'}
//       <button
//         onClick={() => {
//           setFlag(!flag);
//         }}
//       >
//         Toggle flag
//       </button> */}
//       {/* <Child nm={name} roll={100} /> */}
//     </div>
//   );
// }

// function Child(props) {
//   console.log(props);
//   return <div>I am child!!! - {props.nm}</div>;
// }

// class Child extends React.Component {
//   render() {
//     return <div>I am child!!! - {this.props.nm}</div>;
//   }
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       count: 10,
//     };
//   }
//   render() {

//     return (
//       <div>
//         <h1>Hello FunctionUp!</h1>
//         <p>Start editing to see some magic happen :)</p>
//         <p>Count : {this.state.count}</p>
//         <button
//           onClick={() => {
//             this.setState({
//               count: this.state.count - 1,
//             });
//           }}
//         >
//           Minus 1
//         </button>
//         <br />
//       </div>
//     );
//   }
// }

// function App() {
//   const [age, setAge] = useState(0);
//   return (
//     <div>
//       {age < 18 ? 'Sorry you cannot vote' : 'Yay you can vote'}
//       <button onClick={() => setAge(age + 5)}>Inc 5</button>
//     </div>
//   );
// }

// class App extends React.Component {
//   constructor() {
//     super();
//     console.log('constructor');
//   }
//   componentDidMount() {
//     console.log('componentDidMount');
//   }
//   render() {
//     console.log('render');
//     return <div>Hey</div>;
//   }
// }

// function App() {
//   const [input, setInput] = useState('');
//   const [showPara, setShowPara] = useState(false);
//   // console.log(input);
// const handleChange = (e) => {
//   setInput(e.target.value);
// };
//   return (
//     <div>
//       <textarea value={input} onChange={handleChange}></textarea>
//       <br />

//       <button
//         onClick={() => {
//           // setInput(input.toUpperCase());
//           setShowPara(true);
//         }}
//       >
//         Change to Uppercase
//       </button>

//       {showPara && <p>{input.toUpperCase()}</p>}
//     </div>
//   );
// }

// const emojiData = [
//   { name: 'wink', emoji: '😉' },
//   { name: 'smile', emoji: '😀' },
// ];

// function App() {
//   const [input, setInput] = useState('');
//   const [filterdEmojiData, setFilteredEmojiData] = useState(emojiData);
//   const handleChange = (e) => {
//     setInput(e.target.value);
//     const newFilteredEmojiData = emojiData.filter((emojiObj) =>
//       emojiObj.name.includes(input)
//     );
//     setFilteredEmojiData(newFilteredEmojiData);
//   };
//   return (
//     <div>
//       <input value={input} onChange={handleChange} />
//       {filterdEmojiData.map((e) => {
//         return (
//           <div>
//             <p>
//               {e.name}: {e.emoji}
//             </p>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// export default App;


//------------  master class -2              FORM

// import React from 'react';
// import Form from './Form';

// export default function App() {
//   // const fruits = [
//   //   'mango',
//   //   'jackfruit',
//   //   'apple',
//   //   'banana',
//   //   'pineapple',
//   //   'grapes',
//   // ];
//   const fruits = [
//     { id: '204sjkdn', name: 'mango' },
//     { id: 'afjh83u4', name: 'banana' },
//     { id: 'afjh83u4', name: 'apple' },
//   ];
//   return (
//     <div>
//       <h1>Hello StackBlitz!</h1>
//       <h2>My favorite fruits</h2>
//       {fruits.map((fruit, index) => {
//         return <p key={fruit.id}>{fruit.name}</p>;
//       })}
//       <br />
//       <br />
//       <br />
//       <Form />
//     </div>
//   );
// }

// // 0,1,2,3,4


//-------------        REACT-ROUTER-DOM


import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import { createBrowserRouter, RouterProvider, Link } from 'react-router-dom';

export default function App() {
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState('');
  const [displayChild, setDisplayChild] = useState(true);
  useEffect(() => {
    // code to execute
    console.log('useEffect');

    return () => {
      // clean up stuff
    };
  }, [name]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <div>
          Hello world!
          <Link to="/login">Go to login</Link>
        </div>
      ),
    },
    {
      path: '/login',
      element: <Child />,
    },
  ]);
  return (
    <div>
      {/* <h1>Hello StackBlitz!</h1>
      {counter}
      <button onClick={() => setCounter(counter + 1)}>Increase by 1</button>
      <br />

      <input value={name} onChange={(e) => setName(e.target.value)} />
      {name}
      <p>Start editing to see some magic happen :)</p>
      <button
        onClick={() => {
          setDisplayChild(!displayChild);
        }}
      >
        Show/Hide child
      </button>
      {displayChild && <Child />} */}{' '}
      <RouterProvider router={router} />
    </div>
  );
}
// Controlled component
// we are controlling the values using state using React
// function Child() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');

//   return (
//     <div>
//       <h2>Form </h2>
//       Name <input value={name} onChange={(e) => setName(e.target.value)} />{' '}
//       <br />
//       Email{' '}
//       <input
//         type="email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//       />
//       <br />
//       <button
//         onClick={() => {
//           console.log(name, email);
//         }}
//       >
//         Submit
//       </button>
//     </div>
//   );
// }

// Uncontrolled component
// we use ref

function Child() {
  const nameRef = useRef();
  const emailRef = useRef();
  return (
    <div>
      <h2>Form </h2>
      Name <input ref={nameRef} /> <br />
      Email <input type="email" ref={emailRef} />
      <br />
      <button
        onClick={() => {
          console.log(nameRef.current.value);
          console.log(emailRef.current.value);
        }}
      >
        Submit
      </button>
      <br />
      <Link to="/">Go back to homepage</Link>
      <a href="https://google.com">Send to Google</a>
    </div>
  );
}

// npm install react-router-dom

// homepage -> /
// login -> /login
// register -> /register
// .....
