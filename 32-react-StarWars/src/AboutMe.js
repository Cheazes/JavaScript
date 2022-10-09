import React, { useContext, useEffect,useState } from 'react';
import styles from "../css_modules/aboutMe.module.css";
import { characters, periodMonth } from './utils/constants';
import {HeroContext} from '../src/utils/context'


const AboutMe = ()=> {
  const {hero: currentHero} = useContext(HeroContext);
  const [state,setState] = useState({});

  useEffect (() =>{
    let hero = JSON.parse(localStorage.getItem(currentHero));
    if(!hero || (Date.now()-hero.time)>periodMonth){
    fetch(characters[currentHero].url)
      .then(response => response.json())
      .then(data => {
        let info = {
          "name": data.name,
          "height": data.height,
          "mass": data.mass,
          "hair_color": data.hair_color,
          "skin_color": data.skin_color,
          "eye_color": data.eye_color,
          "birth_year": data.birth_year,
          "gender": data.gender
        };
        setState({hero: info});
        hero = {
          payload: info,
          time: Date.now()
        };
        localStorage.setItem(currentHero,JSON.stringify(hero));
      });
    }else{
      setState({ hero: hero.payload });
    }
      return () => console.log('Component AboutMe unvounted');
  },[currentHero])

    return (
      <div>
        {(state.hero) &&
          <div className={`farGalaxy ${styles.hero_box}`}>
            <p><span className={styles.hero_titles}>name:</span> {this.state.hero.name}</p>
            <p><span className={styles.hero_titles}>height:</span> {this.state.hero.height}</p>
            <p><span className={styles.hero_titles}>birth year:</span> {this.state.hero.birth_year}</p>
            <p><span className={styles.hero_titles}>gender:</span> {this.state.hero.gender}</p>
            <p><span className={styles.hero_titles}>mass:</span> {this.state.hero.mass}</p>
            <p><span className={styles.hero_titles}>hair color:</span> {this.state.hero.hair_color}</p>
            <p><span className={styles.hero_titles}>skin color:</span> {this.state.hero.skin_color}</p>
            <p><span className={styles.hero_titles}>eye color:</span> {this.state.hero.eye_color}</p>
          </div>
        }
      </div>
    )

  }



export default AboutMe;