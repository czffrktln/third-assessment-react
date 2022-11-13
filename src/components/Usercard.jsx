import './Usercard.css';
import Image from './Image';
import Showmore from './Showmore';
import { useState } from 'react';


function Usercard(props) {
  
  const [show, setShow] = useState(false);
  

  
  return (
  <div id="">
  <Image nagycica={props.kiscica.avatar_url}></Image>
  <h3>{props.kiscica.login}</h3>
  <button onClick={() => {setShow(!show)}}>{show ? "Show less" : "Show more"}</button>
  {show && <Showmore nagycica={props.kiscica.type} megegynagycica={props.kiscica.site_admin}></Showmore>}
  </div>
  );
};

export default Usercard;