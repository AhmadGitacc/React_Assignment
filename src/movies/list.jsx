import React, { useEffect, useState } from "react";
import axios from "axios";

import '../css/style.css';

const List = () => {


    const [popular, setPopular] = useState([])
    const [topRated, setTopRated] = useState([])

    // let config = {
    //     headers: { 'content': 'multipart/form-data' }
    // }

    const FetchData = () => {
        let url = "https://www.omdbapi.com/?apikey=6be3b297&s=action";

        axios.get(url).then(result => {
            if (result.data.length !== 0) {
                console.log(result.data)
                setPopular(result.data.Search)
            }
        })
            .catch((error) => {
                console.log(error)
            })

    }

    const FetchRated = () => {
        let url = "https://www.omdbapi.com/?apikey=6be3b297&s=comedy";

        axios.get(url).then(result => {
            if (result.data.length !== 0) {
                console.log(result.data)
                setTopRated(result.data.Search)
            }
        })
            .catch((error) => {
                console.log(error)
            })

    }

    useEffect(() => {
        FetchData()
        FetchRated()
    }, [])




    return (
        <div>
            <header>
                <div className="search_area">
                    <input type="text" placeholder="Search movies..." />
                    <span>X</span>
                </div>
            </header>

            {/* <div className="hidden_list">
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
                <a href="#">Movie name <span>2024</span></a>
            </div> */}

            <div className="body">
                <h1>Popular</h1>

                <div className="cards_container">

                    {popular && popular.map((ls, index) =>

                        <div className="card_wrapper" key={index}>
                            <span className="rating">64</span>
                            <img src={ls.Poster} alt="Image poster" />
                            <h5>{ls.Title}</h5>
                            <p>Year: {ls.Year}</p>
                        </div>
                    )}
                </div>


                <h1>Top Rated</h1>

                <div className="cards_container">

                    {topRated && topRated.map((lst, index) =>

                        <div className="card_wrapper" key={index}>
                            <span className="rating">64</span>
                            <img src={lst.Poster} alt="Image poster" />
                            <h5>{lst.Title}</h5>
                            <p>Year: {lst.Year}</p>
                        </div>
                    )}

                </div>

            </div>

        </div>
    );
}

export default List;