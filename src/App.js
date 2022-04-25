import React, {useEffect, useState}  from 'react';
import data from './data.js'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import './App.css';

function App() {
  const [people, setPeople] = useState(data)
  const [index,setIndex] = useState(0)


  useEffect(()=>{
    const lastIndex = people.length -1;
    if(index<0){
      setIndex(lastIndex)
    } 
    if(index >0){
      setIndex(lastIndex)
    }
  }, [index, people])

  return (
    <section className='section'>
      <div className='title'>
        <h2>
          <span>/</span>Reviews
        </h2>
      </div>
      <div className='section-center'>
        {
          people.map((person, personIndex) =>{
            const {id, image, name,title,quote} = person;
            
          let position = 'nextSlide'
            if(personIndex === index) {
              position = 'activeSlide'
            }
            if(personIndex === index -1 || (index === 0 && personIndex === people.lenth -1)){
              position = 'lastSlide'
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className='person-img'/>
                  <h4>{name}</h4>
                  <p className='title'>{ title}</p>
                  <p className='text'>
                    {quote}
                  <FaQuoteRight className='icons'/></p>
              </article>
            )
          })
        }
        <button className='prev' onClick={()=>setIndex(index-1)}>
          <FiChevronLeft/>
        </button>
        <button className='next' onClick={()=>setIndex(index-1)}>
          <FiChevronRight/>
        </button>
      </div>
    </section>
  );
}

export default App;
