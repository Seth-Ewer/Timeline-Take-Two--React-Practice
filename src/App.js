import './App.css';
import Bar from './Bar/Bar';
import Timeline from './Timeline/Timeline';

function App() {
  return (
    <div className="App">
      <Bar text="This is a header."/>
      <Timeline />
      <Bar text="This is a footer."/>
    </div>
  );
}

export default App;
