import React, {useEffect, useState} from 'react'

const UseEffectHook = () => {
    const [seconds, setSconds] = useState(0);
    useEffect(()=>{
        const interval = setInterval(() =>{
            setSconds((prevSecond) => prevSecond + 1)
        }, 1000)

        return () => clearInterval(interval);
    }, [])
  return (
    <div>
      {seconds}
    </div>
  )
}

export default UseEffectHook;

// secoond commit