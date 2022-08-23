import React, {useState} from 'react'
import axios from 'axios';
import Card from './Card';
import bg3 from './img/bg3.png';

const Main = () => {
  const [search, setSearch] = useState('');
  const [bookdata, setbookdata] = useState([]);
  const searchBook = (evt) => {
    if(evt.key==='Enter'){
     axios.get(`https://www.googleapis.com/books/v1/volumes?q=`+search+`&key=AIzaSyBZzUTsomsVhC1lyS5MCaQprNg2caGUk9k`+`&maxResults=40`).then(res=>setbookdata(res.data.items)).catch(err=>console.log(err))
     setSearch('')
    }
  }

  return (
    <>
    <div className='header'>
        <div className="row1">
            <h1>A ROOM WITHOUT BOOKS IS LIKE <br/>A BODY WITHOUT A SOUL</h1>
        </div>
        <div className="row2">
            <h1>Find Your Book</h1>
            <div className="search">
                <input
                value={search} onChange={e=>setSearch(e.target.value)} onKeyPress={searchBook}
                type="text" placeholder="Enter Book's Name" />
            </div>
            <img src={bg3} alt="" />
        </div>
    </div>
    <div className="container">
   {
         <Card book={bookdata} />

   }
   
    </div>
    </>
  )
}

export default Main