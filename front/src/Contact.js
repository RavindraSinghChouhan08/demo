import { useEffect, useState } from "react";
// import Image from "react-bootstrap/esm/Image";



function Contact() {

    // const [count,setCount] = useState(0);

    // function increase()
    // {
    //     if(count < 5)
    //     {
    //         setCount(count + 1);
    //     }
       
    // }
    // function decrease()
    // {
    //     if(count > 0)
    //     {
    //         setCount(count - 1)
    //     }
        
    // }

    const car = [{title:'bmw',color:'red',id:1},{title:'mercedez',color:'white'},{title:'audi',color:'blue'}];

    const pcar = car.map(car => 
       
      <p key={car.id}>{car.title},{car.color}</p>

       
    );

    
   

  return (

    <div><ul>{pcar}</ul>


      

      
     

      {/* <div>

      <button onClick={increase}>+</button> 
      
      {count} 

      <button onClick={decrease}>-</button>


      
      </div> */}
      

     






    </div>
   
  );
}
export default Contact;
