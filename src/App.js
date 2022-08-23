import Card from "./components/Card"
import Header from "./components/Header"
import './App.css';

import Data from "./Data"

function App() {
  let destinations = Data.map(item => {
    return (
      <Card 
        key={item.title}
        {...item}
      />
    ) 
  })
  return (
    <div className="App">
      <Header />
      <section className="card-list">
        {destinations}
      </section>
    </div>
  );
}

export default App;
