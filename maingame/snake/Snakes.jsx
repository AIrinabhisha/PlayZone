import React from "react"; 

const Snake = ({ snakeDots }) => { 
    return ( 
        <div> 
            {snakeDots && snakeDots.map((dot, i) => { 
                const style = { 
                    left: `${dot[0]}%`, 
                    top: `${dot[1]}%`, 
                    position: "absolute", // Ensure snake segments are positioned absolutely
                    width: "2%", // Define a width for each snake segment
                    height: "2%", // Define a height for each snake segment
                    backgroundColor: "green" // Color of the snake
                }; 
                return <div className="snake" key={i} style={style} />; 
            })} 
        </div> 
    ); 
}; 

export default Snake;
