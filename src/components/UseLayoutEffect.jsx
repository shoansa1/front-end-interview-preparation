import React, {use, useEffect, useLayoutEffect} from "react";



const UseLayoutEffect = () => {
    useEffect(() => {
        console.log('use effect executed');
        
    }, [])

    useLayoutEffect(() => {
        console.log('use layout effect executed');
        
    }, [])
 
    

  return (
    <div>
    
    </div>
  )
}

export default UseLayoutEffect;
