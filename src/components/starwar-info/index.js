
import react from 'react';
import { useLocation } from 'react-router-dom';
import { Card, } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getFilmsName } from '../../redux/actions'

function StarwarInfo() {
    const location = useLocation();
    console.log("location", location.state.id);
    const starwarData = useSelector((state) => state.startwar.starwarInfo);
    const starwarFilterData = useSelector((state) => state.startwar);
    console.log("starwarData ", starwarData)
    console.log("starwarFilterData", starwarFilterData);
    const dispatch = useDispatch();


    const handleFilms = (url) => {
        console.log("url Callinh")
        dispatch(getFilmsName(url));
    }

    return (
        <div>
            <div className="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className="card p-4 w-75">
                    <div className="image d-flex flex-column justify-content-center align-items-center">
                        <button className="btn btn-secondary"> <img src="https://i.imgur.com/wvxPV9S.png" height={100} width={100} /></button>
                        <span className="name mt-3">{starwarData.name}</span>
                        <span className="idd">height: {starwarData.birth_year}</span>
                        <span className="idd">Weight: {starwarData.mass}</span>
                        <div className="d-flex flex-row justify-content-center align-items-center gap-2">
                            <span className="idd1">Age:{starwarData.birth_year}</span>
                        </div>
                        {starwarData && starwarData.films && <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                            {/* <span className="number">{starwarData.films.length}

                            </span> */}
                            <div>
                                {starwarData.films.map((ele, index) =>
                                    <div>
                                        <a onClick={() => handleFilms(ele)} key={index}>{ele}</a>
                                    </div>
                                )}
                            </div>
                        </div>
                        }

                        {starwarData && starwarData.species &&
                            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                                <span className="number">{starwarData.species.length} <span className="follow">Species</span></span>
                            </div>}
                        {starwarFilterData && starwarFilterData.filmsInfo &&  starwarFilterData.filmsInfo.title && 
                            <div className="d-flex flex-row justify-content-center align-items-center mt-3">
                                <span className="number">{starwarFilterData.filmsInfo.title} </span>
                            </div>}

                    </div>

                    
                </div>
            </div>

        </div>
    )
}


export default StarwarInfo