function App() {
   const [counter, setCounter] = React.useState(0);

   const increment = (count = 1) => {
      setCounter(counter + count);
   };

   return (
      <div>
         <div>Счетчик: {counter}</div>
         <button onClick={() => increment()}>+1</button>
         <button onClick={() => increment(3)}>+3</button>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, {}));
