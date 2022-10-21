import "./App.css";
import data from "./data.json";
import Table from "./Table";

function App() {
  const getHeadings = () => {
    return Object.keys(data[0]);
  };

  return (
    <div className="App">
      <Table theadData={getHeadings()} tbodyData={data} />
    </div>
  );
}

export default App;
