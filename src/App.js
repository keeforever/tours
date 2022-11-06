import {Tour} from './components/Tour';
import {useState,useEffect} from 'react';

const url='https://course-api.com/react-tours-project'

function App() {
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [tours, setTours] = useState([])
  // Fetch Tours
  const fetchTours=()=>{
    setIsLoading(true)
    fetch(url).then((res)=>{
      if((res.status>=200) && ( res.status<=299)){
        return res.json();
      }else{
        setIsLoading(false)
        setIsError(true)
        throw new Error('Something went to wrong.');
      }
    }).then((data)=>{
      setTours(data)
      console.log(data);
      setIsLoading(false)
    }).catch((err)=>{
      console.log(err)
    })
  }

  useEffect(() => {
    fetchTours()
  }, [])
  // remove item
  const removeItem=(item)=>{
    const balanceTour=tours.filter(({id})=>item!==id)
    setTours(balanceTour)
  }
  // loader
  if(isLoading){
    return (
      <main>
        <h1 style={{textAlign:'center',fontSize:'2.77rem'}}>Loading...</h1>
      </main>
    )
  }

  // err
  if(isError){
    return (
      <main>
        <h1  style={{textAlign:'center'}}>Error...<br></br>Something went to wrong.</h1>
      </main>
    )
  }
  //load main 
  return (
    <main>
      <section className='container'>
        <div className="tour-head">
          <h1>Our Tours</h1>
          <span ></span>
        </div>
        <div>
        {
        tours.length===0 ?<button className="btn-refresh btn" onClick={()=>{fetchTours()}}>Refresh</button>: ''
        }
        </div>
        {
        tours.map((place)=>{
          const {id,name,info,image,price}=place
          return  <Tour key={id} name={name} info={info} image={image} price={price} deleteItem={()=>{removeItem(id)}}/>
        })
        }

      </section>
    </main>
  );
}

export default App;
