import './App.css';
import StockPrice from './stockPriceComponent';

function App() {
  return (
    <div className="App">
      <StockPrice ticker = 'AAPL'></StockPrice>
      <StockPrice ticker = 'AMZN'></StockPrice>
      <StockPrice ticker = 'META'></StockPrice>
      <StockPrice ticker = 'GOOGL'></StockPrice>
      <script></script>
    </div>

    
  );
}

export default App;
