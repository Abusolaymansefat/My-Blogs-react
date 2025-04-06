import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Navbar from './components/Navbar/Navbar'

function App() {
  const [bookMark, setbookMark] = useState([])
  const [readingCount, setReadingCount] = useState(0)
  const handleBookMark = (blog) => {
    setbookMark([...bookMark,blog])
    // console.log(blog)
  }
  // console.log(bookMark)
  const handleMarkAsRead = (time,id) =>{
    // console.log(time)
    const newTime = readingCount +time
    setReadingCount(newTime)
    // console.log(id)
    handleRemoveFromBookmark(id)
  }
// console.log(readingCount)

const handleRemoveFromBookmark = (id) => {
  const reainingBookmarrk = bookMark.filter((mark) => mark.id !== id)
  // console.log(reainingBookmarrk)
  setbookMark(reainingBookmarrk)
}


  return (
    <>
      <Navbar></Navbar>
      

      <div className="main-container flex text-center">
        <div className="left-container w-[70%]">
          

          <Blogs handleBookMark ={handleBookMark} handleMarkAsRead ={handleMarkAsRead}></Blogs>
        </div>
        <div className="right-container w-[30%]">
          <h1>Reading time: {readingCount}</h1>
          <h1>bookmark count: {bookMark.length}</h1>

          {
            bookMark.map((mark)=> <p key={bookMark.id} className='bg-red-600 p-2 shadow m-2 text-white'>{mark.title}</p>)
          }
        </div>
      </div>
    </>
  )
}

export default App
