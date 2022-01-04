import './App.css';
import { useEffect, useState } from "react"
function App() {
  const [time, setTime]= useState(25)
    const [bgColor, setbgColor]=useState('green')
    const [textColor, setTextColor] = useState('white')
    useEffect(async()=>{
        setTimeout(()=> setTime(time -1), 1000)
        if (time<=20 && time>10){
            setbgColor('black ')
        }
    else if (time<=10 && time>5){
            setbgColor('yellow')
            setTextColor('red')
    }
    else if (time<=5 && time>0){
            setbgColor('white')
            setTextColor('black')
    }
    else if(time ==0){
        clearTimeout()
        setTime('Thanks')
    }
    // else{clearTimeout}    
    
})
    return(
        <div className='App' style={{backgroundColor:bgColor, color:textColor}}>
        <h1 style={{marginTop:'0px', paddingTop:'250px', fontSize:'80px'}}>{time}</h1>
        </div>
    )
}

export default App;
