// import logo from './logo.svg';
import './App.css';
import MovieDetails from './MovieDetails';
import Movies from './Movies';
import Navbars from './Navbars';
import { Route, Routes, BrowserRouter, Link } from 'react-router-dom'
import React, {useState, useEffect} from 'react'
import TheatreDetail from './TheatreDetail';
import BookingList from './BookingList';
import BookSeat from './BookSeat';
import SeatLayout from './SeatLayout';
import Payment from './Payment';


function App() {

  const [particularMoviesDetails, setparticularMoviesDetails] = useState("")
  const [selectedSeatsCount, setSelectedSeatsCount] = useState(0)
  console.log(selectedSeatsCount + " from App component")
  return (
    <div className="App">
      <Navbars/>
      <h1 class="text-secondary text-xl ..."></h1>
<Routes>
<Route path='/movie' element={<Movies details={setparticularMoviesDetails}/>}></Route>
<Route path='/moviedetails' element={<MovieDetails info={particularMoviesDetails}/>}></Route>
<Route path='/theatre' element={<TheatreDetail />}></Route>
<Route path='/history' element={<BookingList/>}></Route>
<Route path='/bookseat' element={<BookSeat func={setSelectedSeatsCount}/>}></Route>
<Route path='/payment' element={<Payment/>}></Route>
<Route path='/seatlayout' element={<SeatLayout count={selectedSeatsCount}/>}></Route>
</Routes>
    </div>
  );
}

export default App;
