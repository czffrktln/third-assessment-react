import { useEffect, useState } from 'react';
import './App.css';
import Searchinput from './components/Searchinput';
import Usercard from './components/Usercard';

function App() {

  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://api.github.com/users');
      const result = await response.json();
      setData(result);
      setFilteredData(result);
    };
    getData();
  }, []);
  
  const getFilteredData = (nagyharcsa) => {
    setFilteredData(nagyharcsa);
  };
  
  return (
    <>
    <Searchinput harcsamacska={data} cicaharcsa={getFilteredData}></Searchinput>
    {filteredData.length === 0 && <h3>Nothing found</h3>}
    {filteredData.map((user, index) => <Usercard kiscica={user} key={index}></Usercard>)}
    </>
  );
}

export default App;
