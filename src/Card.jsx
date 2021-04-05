import React from 'react';

import { NavLink } from 'react-router-dom';

const Card  = (props) => {
    return (
      <>  

            <div className="col-md-4 col-10 mx-auto my-3">
                    <div className="card" >
                            <img className="card-img-top" src={props.imgsrc} width='200px' height='200px' alt="Card image cap" />
                            <div className="card-body">
                                <h5 className=" font-weight-bold card-title">{props.title}</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="" className="btn btn-primary">Go somewhere</NavLink>
                            </div>
                    </div>
            </div>
                     


                 
      </>
    )
}

export default Card ;