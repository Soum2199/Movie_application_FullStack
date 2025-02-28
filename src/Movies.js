import React, {useState, useEffect} from 'react'
import Axios from "axios"
import { useNavigate, useParams } from 'react-router-dom';

function Movies(props) {
    const [movieDetails, setMovieDetils] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
      Axios.get("http://localhost:9000/fetching/movies")
      .then(resi => {
        console.log(resi)
        console.log(resi.data)
        setMovieDetils(resi.data)
      })
      .catch(err => console.log(err))
        
    }, [])
    const showMovieDetails = (details) => {
      props.details(details)
      navigate("/moviedetails")
    }

    return (
      <>
        <h1>Welcome</h1>
        <div style={{ height: "210px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "16px" , margin: "2px"}}>
          {movieDetails.map(function(i) {
            return (
              <div className="card h-100">
                <img src={i.image_url} onClick={() => showMovieDetails(i)} className="card-img-top" alt="movie poster" style={{height: "175px", cursor: "pointer"}} />
                <div className="card-body">
                  <h5 className="card-title" style={{fontSize: "21px", fontWeight: 600}}>{i.movie_name}</h5>
                  <h6 className="card-text" style={{fontSize: "18px", fontWeight: 200}}>{i.genre}</h6>
                </div>
                <div className="card-footer">
                  <span className="text-body-secondary"><i className="fa-solid fa-star"></i> Rating: {i.rating}</span>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
}

export default Movies