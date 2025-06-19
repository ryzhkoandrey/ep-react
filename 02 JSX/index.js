function App() {
   return <div>Hello World!</div>;
}

function Component() {
   return <span>Component</span>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App, {}));
