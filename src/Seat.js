// // import { useState } from "react"
// // import { useSelector } from "react-redux"

// // function Seat(props) {
// //     // console.log(props.seatsCount)
// //     const results = useSelector(function (outpet) {
// //         return outpet
// //     })
// //     console.log(results)  //seatNumber : n
// //     const [seatsSelected, setSeatsSelected] = useState(props.seatCount) //3
// //     const [seatSelected, setSeatSelected] = useState(false)

// //     function handleSeatButton() {
// //         setSeatSelected(true)
// //         console.log(seatsSelected)
// //     }

// //     return (
// //         <div>
// //             <button className={seatSelected == true ? 'seatbutton' : ''} onClick={handleSeatButton} style={{ border: "1px solid black", width: "30px", height: "30px", textAlign: "center" }}>
// //                 {props.seatnumber}
// //             </button>
// //         </div>

// //     )
// // }

// // export default Seat

// import React, { useState } from 'react';
// import { useSelector } from "react-redux"

// function Seat({ seatnumber, seatCount, onSelect }) {
//     const [isSelected, setIsSelected] = useState(false);

//     function toggleSeatSelection() {
//         setIsSelected(!isSelected);
//         onSelect(seatnumber);
//     }

//     return (
//         <button
//             className={`seat ${isSelected ? 'selected' : ''}`}
//             onClick={toggleSeatSelection}
//             style={{
//                 width: "50px",
//                 height: "50px",
//                 backgroundColor: isSelected ? "#aabeee" : "white",
//                 border: "1px solid black",
//                 borderRadius: "5px"
//             }}
//         >
//             {seatnumber}
//         </button>
//     );
// }

// export default Seat;


import { useState } from "react"
import { useSelector } from "react-redux"

function Seat(props) {
    console.log(props.seatsCount)
    const [seatsSelected, setSeatsSelected] = useState(props.seatCount)//3

    const [seatSelected, setSeatSelected] = useState(false)

    function handleSeatButton() {
        setSeatSelected(true)
    }

    return (
        <div>
            <button className={seatSelected == true ? 'seatbutton' : ''} onClick={handleSeatButton} style={{ border: "1px solid black", width: "30px", height: "30px", textAlign: "center" }}>
                {props.seatnumber}
            </button>
        </div>

    )
}

export default Seat