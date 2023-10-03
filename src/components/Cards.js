import React, { useState } from 'react'
// import 'font-awesome/css/font-awesome.min.css';

import "./Cards.css"

const Cards = (props) => {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredCars = props.information.filter((car) => {
        return car.name.toLowerCase().includes(searchTerm.toLowerCase());
    });




    return (
        <div>
            <section>
                <div className='container'>
                    <div className='search'>
                        <input id="searchinput" type="text" placeholder='search here' onChange={(event) => {
                            setSearchTerm(event.target.value);
                        }} />
                        <i class="fa-solid fa-magnifying-glass"></i>

                    </div>

                    <div className='cards'>
                        {
                            filteredCars.map((card, i) => (

                                // if(searchTerm == ""){
                                //   return val;
                                // }
                                // else if
                                <div key={i} className='card'>

                                    <img src={card.image} alt={card.name} className='images' />
                                    <div className='container1'>
                                        <h3 className='name'>{card.name}</h3>
                                        <h3 className='year'>{card.year}</h3>
                                    </div>

                                    <div className='container2'>

                                        <h4 className='people'><i class="fa-solid fa-users" style={{ color: '#9dc3eb', margin: '0.3rem' }}></i>{card.people}</h4>
                                        <h4 className='type'><i class="fa-solid fa-gas-pump" style={{ color: '#9dc3eb', margin: '0.3rem' }}></i>{card.type}</h4>
                                    </div>

                                    <div className='container3'>
                                        <h4 className='kilometer'><i class="fa-solid fa-gauge" style={{ color: '#9dc3eb', margin: '0.3rem' }}></i>{card.kilometer}</h4>
                                        <h4 className='mode'><i class="fa-solid fa-gear" style={{ color: '#9dc3eb', margin: '0.3rem' }}></i>{card.mode}</h4>
                                    </div>


                                    <div className='container4'>
                                        <h4 className='price'>{card.price}</h4>
                                        <div className="image-button-container">
                                            <img className="image2" src={card.image2} alt={card.like} />
                                            <button className='btn'>Rent Now</button>
                                        </div>

                                    </div>




                                </div>
                            ))


                        }

                    </div>
                </div>
            </section>


        </div>
    )
}

export default Cards







