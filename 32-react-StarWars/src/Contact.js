import React, { useEffect, useState } from 'react';
import "../css_modules/contact.module.css";
import { base_url } from "../utils/constants";

const Contact =()=> {
  const [Planets] = useState;

  async function fillPlanets(url) {
    const response = await fetch(url);
    const json = await response.json();
    const planets = json.map(item => item.name);
   Planets({ planets });

  }

  useEffect (() =>  {
   fillPlanets(`${base_url}/v1/planets`);
  
  })

  


    return (
      <div>
        <form onSubmit={(e) => {
          e.preventDefault();
        }}>
          <label>First Name
            <input type="text" name="firstname" placeholder="Your name.." />
          </label>
          <label>Planet
            <select name="planet">{
              this.state.planets.map((item, index) => <option value={item} key={index}>{item}</option>)
            }
            </select>
          </label>
          <label>Subject
            <textarea name="subject" placeholder="Write something.." />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }


export default Contact;
