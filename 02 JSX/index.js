function computing() {
   return { counter: 10 };
}

function App() {
   const [isComponent, setIsComponent] = React.useState(false);
   const [counter, setCounter] = React.useState(computing());

   const increment = () => {
      setIsComponent((s) => !s);

      setCounter((lastCounter) => {
         return {
            ...lastCounter,
            counter: lastCounter.counter + 1,
         };
      });

      console.log('after set counter');
   };

   const increment3 = () => {
      increment();
      increment();
      increment();
   };

   console.log('render', counter, isComponent);

   return (
      <div>
         <div>Счетчик: {counter.counter}</div>
         <button onClick={increment}>+1</button>
         <button onClick={increment3}>+3</button>
      </div>
   );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, {}));
