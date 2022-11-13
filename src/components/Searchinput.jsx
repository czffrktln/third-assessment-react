import { useEffect, useState } from 'react';
import './Searchinput.css';


function Searchinput(props) { 

  const [value, setValue] = useState("")

  const filterData = props.harcsamacska.filter(d => {
    return d.login.indexOf(value) == 0
  });

  console.log(filterData);
  
  const searchData = (e) => {
    setValue(e.target.value)
  };
  
  useEffect(() => {
    props.cicaharcsa(filterData)
  }, [value]);

  
  return (
  <>
  <input type="text" placeholder="Search" id="search-input" onChange={searchData} value={value}></input>
  </>
  );
};

export default Searchinput;

