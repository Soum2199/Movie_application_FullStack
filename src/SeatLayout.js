// import React, { useState } from "react"
// import Axios from 'axios'
// import { useNavigate } from 'react-router-dom'
// import "./App.css"
// import Seat from './Seat'

// function SeatLayout(props) {
// // console.log(props.seatsCount)
//     const navigate = useNavigate()
// const seatGrid = []
//     const [seatsSelected, setSeatsSelected] = useState(props.count)  // Number of seats selected
//     const [rowCount, setRowCount] = useState(10) 
//     const [colCount, setColCount] = useState(15) 
//     const totalSeats = rowCount * colCount 

//     for (let i = 1; i <= totalSeats; i++) {
//         seatGrid.push(<Seat seatnumber={i} seatCount={props.count} />)
//     }

//     const [count, setCount] = useState(0)

//     function collect() {
//         setCount(count + 1)
//     }
//     function handleSeatButton() {
//         console.log(seatsSelected)
//         setSeatsSelected(seatsSelected)
//     }
//     // Function to increment the number of selected seats
//  return(
// <>
// <h3 class="text-secondary text-xl ..." style={{ textAlign: "center" }}>PRICE: Rs. 150</h3>
// {seatsSelected === count ? (
//                 <div
//                     onClick={collect} className='disable' id='parent'
//                     style={{
//                         display: "grid",
//                         gridTemplateColumns: `repeat(${colCount}, 50px)`,
//                         gridGap: "10px",
//                         marginTop: "100px",
//                         marginLeft: "50px"
//                     }}
//                 >
//                     {seatGrid}
//                 </div>
//             ) : (
//                 <div
//                     onClick={collect}  className='parent'
//                     style={{
//                         display: "grid",
//                         gridTemplateColumns: `repeat(${colCount}, 50px)`,
//                         gridGap: "10px",
//                         marginTop: "100px",
//                         marginLeft: "50px"
//                     }}
//                 >
//                     {seatGrid}
//                 </div>
//             )}
//             <button className='btn btn-outline-primary' style={{margin: "7px"}} >Make Payment</button>
// </>
//  );
// }

// export default SeatLayout


// import React, { useState, useEffect } from "react";
// import Axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import "./App.css";
// import Seat from './Seat';

// function SeatLayout(props) {
//     const navigate = useNavigate();
//     const seatGrid = [];
    
//     // Initialize seatsSelected with the value from localStorage (if available)
//     const initialSeatsSelected = localStorage.getItem('seatsSelected') || props.count;

//     const [seatsSelected, setSeatsSelected] = useState(Number(initialSeatsSelected)); // Number() ensures it's a number
//     const [rowCount, setRowCount] = useState(10); 
//     const [colCount, setColCount] = useState(15); 
//     const totalSeats = rowCount * colCount;
//     const [count, setCount] = useState(0); // This keeps track of selected seats count

//     // Generate grid of seats
//     for (let i = 1; i <= totalSeats; i++) {
//         seatGrid.push(<Seat key={i} seatnumber={i} seatCount={count} onSelect={handleSeatSelect} />);
//     }

// console.log(count)
//     // Function to handle seat selection
//     function handleSeatSelect(seatNumber) {
//         if (count < seatsSelected) {
//             setCount(count + 1);
//         } else {
//             setCount(count - 1);  // Deselect seat if already selected
//         }
//     }

//     // Function to handle the payment
//     function handleSeatButton() {
//         console.log("Selected seats: ", count);
//         // Here you could handle the payment logic or navigation
//         navigate('/payment');
//     }

//     // Save seatsSelected to localStorage whenever it changes
//     useEffect(() => {
//         localStorage.setItem('seatsSelected', seatsSelected);
//     }, [seatsSelected]);

//     return (
//         <>
//             <h3 className="text-secondary text-xl" style={{ textAlign: "center" }}>PRICE: Rs. 150</h3>
            
//             <div
//                 style={{
//                     display: "grid",
//                     gridTemplateColumns: `repeat(${colCount}, 50px)`,
//                     gridGap: "10px",
//                     marginTop: "100px",
//                     marginLeft: "50px"
//                 }}
//             >
//                 {seatGrid}
//             </div>

//             <button 
//                 onClick={handleSeatButton} 
//                 className='btn btn-outline-primary' 
//                 style={{margin: "7px"}}
//             >
//                 Make Payment
//             </button>
//         </>
//     );
// }

// export default SeatLayout;

import Axios from 'axios'
import React, { useState } from 'react'
import "./App.css"
import Seat from './Seat'
import { useNavigate } from 'react-router-dom'

function SeatLayout(props) {

    const navigate = useNavigate()

    const [seatsSelected, setSeatsSelected] = useState(props.count)

    const [rowCount, setRowCount] = useState(10)
    // rowCount = 10
    const [colCount, setColCount] = useState(15)
    // colCount = 15

    const totalSeats = rowCount * colCount

    const seatGrid = []

    for (let i = 1; i <= totalSeats; i++) {
        seatGrid.push(<Seat seatnumber={i} seatCount={props.count} />)
    }

    const [count, setCount] = useState(0)

    function collect() {
        setCount(count + 1)
    }

    // 150 RS

    function pleaseMakeThePayment() {
        Axios.post("https://movie-booking-application-back-end.onrender.com/create/order", { amount: seatsSelected * 150 })
            .then(function (result) {
                handlePaymentVerify(result.data.output)
            })
    }

    async function handlePaymentVerify(recievedData)
    {
        console.log("Hi")
        // Logic to do the verification
        // const options = {
        //     key: "rzp_test_lHlNdrDCdx5Dmf",
        //     amount: recievedData.amount,
        //     currency: recievedData.currency,
        //     name: "Raju",
        //     description: "Openheimer",
        //     order_id: recievedData.id,
        //     handler: async function(output)
        //     {
        //         // Logic for verification
        //         console.log(output)
        //     }
        // }

        // new window.Razorpay(options).open()
        console.log(recievedData)
        navigate("/bookings")

    }

    return (
        <>
            <h3 style={{ textAlign: "center" }}>PRICE: 150</h3>
            {seatsSelected == count ? <>
                <div onClick={collect} className='disable' id='parent' style={{ display: "grid", gridTemplateColumns: `repeat(${colCount}, 50px)`, gridGap: "10px", marginTop: "100px", marginLeft: "50px" }}>
                    {seatGrid}
                </div></> : <div onClick={collect} className='parent' style={{ display: "grid", gridTemplateColumns: `repeat(${colCount}, 50px)`, gridGap: "10px", marginTop: "100px", marginLeft: "50px" }}>
                {seatGrid}
            </div>}
            <button className='btn btn-outline-primary' onClick={pleaseMakeThePayment}>Make Payment</button>
        </>
    )
}

export default SeatLayout
