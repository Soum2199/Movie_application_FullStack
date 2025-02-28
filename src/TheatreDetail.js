import React, {useState, useEffect} from 'react'
import Axios from "axios"
import { useNavigate } from 'react-router-dom';

function TheatreDetail() {
const navigate = useNavigate();
    const [locationTheatreData, setLocationTheatreData] = useState([])
    const [locationName, setLocationName] = useState('');
    const [dates, setDates] = useState([]);
const [displayTheatresInfo, setDisplayTheatresInfo] = useState(false)
const [enteredDayName, setEnteredDayName] = useState("")
 useEffect(() => {
        let info = [];
        for (let i = 0; i < 3; i++) {
            const currentDate = new Date();
            currentDate.setDate(currentDate.getDate() + i);

            const dayName = currentDate.toLocaleString('default', { weekday: 'short' });
            const monthName = currentDate.toLocaleString('default', { month: 'short' });
            const date = currentDate.getDate();

            info.push({
                dayName: dayName,
                monthName: monthName,
                date: date,
            });
        }
        setDates(info);
    }, []);

function dateClicked(recievedDayName) {
        setEnteredDayName(recievedDayName)
        // Logic to change boolen to true
        setDisplayTheatresInfo(true)
    }

    useEffect(() => {
        Axios.get("http://localhost:9000/locating")
        .then(outpt => {
            console.log(outpt)
            console.log(outpt.data.infos)
            setLocationTheatreData(outpt.data.infos)
        })
        .catch(err => console.log(err))
    }, [])

    function moveTowardsThatPlace(eve) {
        console.log(eve.target.value)
        setLocationName(eve.target.value)
    }
    function bookSeats() {
      navigate("/bookseat")
    }
  return (
    <>
        <div className="container mt-3">
      {locationName ? (
        <div className="d-flex gap-10 border border-secondary p-2 m-3">
          {dates.map((hi, index) => (
            <div
              key={index}
              style={{ cursor: "pointer" }}
              onClick={() => dateClicked(hi.dayName)}
              className={enteredDayName == hi.dayName ? "apply" : null}
            >
              <h4>{hi.dayName.toUpperCase()}</h4>
              <h2 class="text-lg font-bold">{hi.date}</h2>
              <h4>{hi.monthName.toUpperCase()}</h4>
            </div>
          ))}
        </div>
      ) : null}
    </div>
    <div class="d-grid gap-2 d-md-flex justify-content-md-end">
        {/* <button class="btn btn-success me-md-2" type="button">Book Tickets</button> */}
        <select onClick={moveTowardsThatPlace} class="form-select col-6 col-md-4" multiple aria-label="Multiple select example">
        <option selected>Choose Location...</option>
        {
            locationTheatreData.map(function (i) {
                return  <option value={i.location}>{i.location}</option>
            })
        }
        </select>
    </div>
    <div style={{marginTop: "10px",alignItems: "center", justifyContent: "center"}}>
        {
        locationTheatreData.map(function(j){
        if (locationName == j.location) {
            console.log(j.theatre)
        return j.theatre.map(function (k) {
            // {console.log(k)} {k.theatre_name}
            return  <div class="card" style={{width: "50rem", justifyContent: "center"}}>
                <div class="card-footer">
                {k.theatre_name}
                </div>
         <div className="timings-container">
             {    k.show_times.map(function(jd) {
                    return <button onClick={bookSeats} class="btn btn-primary list-group-item text-opacity-75">{jd}</button>
                })
                     }
         </div>
            </div>
        })
          }
        })
        }
    </div>
    </>
  )
}

export default TheatreDetail
