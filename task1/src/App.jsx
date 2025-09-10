import { useState } from 'react'
import axios from 'axios';
import { LoaderCircle } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import Prism from './Prism';

function App() {
  const [Inputtext,setInputtext]= useState("")
  const [selectlang,setselectlang]=useState("")
  const[result,setresult]=useState("")
  const[loading,setloading]=useState(false)

  console.log(Inputtext)
  console.log(selectlang)

  const textHandler = async() =>{
    
    try{
      setloading(true)
      const options = {
  method: 'POST',
  url: 'https://google-translator9.p.rapidapi.com/v2',
  headers: {
    'x-rapidapi-key': 'e11eee83e6msh4807d51d838af92p108babjsn1a55f2440e94',
    'x-rapidapi-host': 'google-translator9.p.rapidapi.com',
    'Content-Type': 'application/json'
  },
  data: {
    q: `${Inputtext}`,
    source: 'en',
    target: `${selectlang}`,
    format: 'text'
  }
};
  const response = await axios.request(options);
  setloading(false)
	console.log(response?.data?.data?.translations?.[Number(0)]?.translatedText);
  setresult(response?.data?.data?.translations?.[Number(0)]?.translatedText)

    }catch(error){
      setloading(false)
      console.log(error)
    }
  } 
  
  return (
   
    <div className=' h-screen w-screen flex flex-col  items-center justify-center bg-black '>
      <Prism
      animationType="rotate"
      timeScale={1}
      height={3.5}
      baseWidth={5.5}
      scale={3.6}
      hueShift={0}
      colorFrequency={1}
      noise={0}
      glow={1}
      />
     
      <div className=' p-15 bg-gray-400/40  flex flex-col items-center justify-center gap-10 border border-slate-500 rounded-lg absolute top-20 '>
      <h1 className='font-bold text-4xl '>Text Translator</h1>

      <div className='flex flex-row gap-4'>
        <textarea placeholder='Enter the text' className='bg-white border border-slate-500 rounded-lg p-2' onChange={(e) => setInputtext(e.target.value)} />
        <div className='py-10'><ArrowRight /></div>
        <textarea placeholder='Your Translated text displays here' className='bg-white border border-slate-500 rounded-lg p-2'value={result} readOnly/>
      </div>

      <div className='flex flex-row gap-2'>
      <label className='text-[20px]'>Select language you want to convert to:</label>
      <select value={selectlang} className='border border-slate-500 rounded-lg bg-blue-300' onChange={(e)=>setselectlang(e.target.value)}>
          <option value="select">Select</option>
          <option value="ta">Tamil</option>
          <option value="hi">Hindi</option>
          <option value="bn">Bengali</option>
      </select>
      </div>
      
      <button className='bg-green-500 border border-slate-500 px-[100px] py-1 font-serif cursor-pointer rounded-lg'onClick={textHandler}>
        {loading ? <LoaderCircle className='animate-spin'/> : "Translate"}
      </button>
      </div>
    </div>
  )
}

export default App