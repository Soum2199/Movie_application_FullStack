// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addSeatNumber } from './redux';

// function BookSeat(props) {
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
//   const [seatCount, setSeatCount] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   const [selectedSeats, setSelectedSeats] = useState(null); // State to store the selected seat count

//   // Handle the selection of seats
//   function collectSeats(seatCountRecvd) {
//     setSelectedSeats(seatCountRecvd); // Update state with the selected seat count
//     dispatch(addSeatNumber(seatCountRecvd)); // Dispatch to Redux store
//     props.seatFunction(seatCountRecvd); // Pass to parent component function
//   }

//   // Navigate to the seat layout page
//   function chooseSeats() {
//     if (selectedSeats !== null) {
//       navigate("/seatlayout"); // Navigate only if a seat is selected
//     } else {
//       alert("Please select a seat first.");
//     }
//     console.log(selectedSeats)
//     // setSeatCount(selectedSeats)
    
//   }

//   return (
//     <>
//       <br />
//       {/* <button type="button" className="btn btn-outline-secondary" data-bs-toggle="modal" data-bs-target="#exampleModal">
//         Book your seats here
//       </button> */}

//       <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="false" data-bs-backdrop="static" data-bs-keyboard="false">
//         {/* <div className="modal-dialog">  <div className="modal-content"> */}
//             <div className="modal-header">
//               <h1 className="modal-title fs-5" id="exampleModalLabel">Select number of seats:</h1>
//               <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
//             </div>
//             <div className="modal-body" style={{ padding: "3px", display: "flex", justifyContent: "space-evenly", cursor: "pointer" }}>
//               {
//                 seatCount.map(function (hi) {
//                   return (
//                     <button
//                       key={hi}
//                       className={`btn ${selectedSeats === hi ? 'btn-primary' : 'btn-link'}`}
//                       style={{ margin: '5px', borderRadius: "16px" }}
//                       onClick={() => collectSeats(hi)}
//                     >
//                       {hi}
//                     </button>
//                   );
//                 })
//               }
//             </div>
//             <div className="modal-footer">
//               <div className="d-grid gap-2 col-6 mx-auto">
//                 <p className="text-center text-secondary">Price: 150</p>
//                 <small className="text-success">Available</small>
//                 <button type="button" className="btn btn-success" onClick={chooseSeats}>Select seats</button>
//               </div>
//             </div>
//           </div>
//         {/* </div> </div> */}
      
//     </>
//   );
// }

// export default BookSeat;

import React from 'react'
import { useNavigate } from 'react-router-dom'

function BookSeat(props) {

    const navigate = useNavigate()

    const [seatCount, setSeatCount] = React.useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    function fetchSeatCount(recievedSeatCount)
    {
        props.func(recievedSeatCount)
        navigate("/seatlayout")
    }

  return (
    <div>
        {
            seatCount.map(function(i)
            {
                return <button onClick={function()
                    {
                        fetchSeatCount(i)
                    }
                } style={{margin: "20px"}}>{i}</button> 
            })
        }
    </div>
  )
}

export default BookSeat