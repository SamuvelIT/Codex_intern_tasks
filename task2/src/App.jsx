import { CircleArrowRight } from 'lucide-react';
import DotGrid from './DotGrid';
import { useState } from 'react';



function App() {

  const [inputNumber, setInputNumber] = useState(0);
  const [String,setString]=useState("");


  const Generator=()=>{
    const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%&?/';
    let result = '';
    const charactersLength = characters.length;
    for ( let i = 0; i < inputNumber; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    setString(result);
    
  }

  const handleClick=(e)=>{
    e.preventDefault();
    if(inputNumber<=0){
      alert("Please enter a valid number greater than 0");
    }
    else{
      Generator(String);
    }
  }

  return (
    
    <div className=' h-screen w-screen flex flex-col justify-center items-center'>
       <DotGrid className='h-screen w-screen  bg-black '
    dotSize={5} 
    gap={15}
    baseColor="#5227FF"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
         
         <div className='h-70 w-100 z-10 bg-blue-500 flex flex-col items-center justify-center gap-10 absolute rounded-lg '>

        <h1 className='text-2xl font-bold'>Random String Generator</h1>

        <div className='flex flex-row gap-4'>

        <input type="number" className='bg-white rounded-lg p-3 h-10 w-40 outline-none text-center' placeholder='Enter number' onChange={(e) => setInputNumber(e.target.value)} />
        <div className='flex flex-row gap-2 items-center justify-center'>
          <CircleArrowRight />   
        <button className='bg-green-400 w-20 p-1 font-serif rounded-lg cursor-pointer' onClick={handleClick} >Generate</button>
        </div>

      </div>
      <input type="text" className='bg-white h-10 w-80 rounded-lg p-3 outline-none border-slate-950 border text-center' placeholder='Output String'value={String} readOnly />
      
      </div>

    </div>
   
  )
}

export default App