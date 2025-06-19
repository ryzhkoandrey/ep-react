function App() {
   const [counter, setCounter] = React.useState(0);

   const increment = () => {
      setCounter((lastCounter) => {
         console.log('set state callback');
         return lastCounter + 1;
      });

      console.log('after set counter');
   };

   const increment3 = () => {
      increment();
      increment();
      increment();
   };

   console.log('render', counter);

   return (
      <div>
         <div>Счетчик: {counter}</div>
         <button onClick={increment}>+1</button>
         <button onClick={increment3}>+3</button>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, {}));
