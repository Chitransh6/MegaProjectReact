import './App.css'
import { useState,useEffect } from 'react';
import authService from "./appwrite/auth"
import { useDispatch } from 'react-redux';
import {login,logout} from "./store/authSlice"
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
  const [loading,setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(()=>{
   authService.getCurrentUser()
   .then((userData)=>{
    if(userData){
      dispatch(login({userData}));
    } else{
      dispatch(logout());
    }
   })

   .finally(()=>setLoading(false))
  },[])

 if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      {/* Your Header, Outlet (for routing), and Footer would go here */}
     <div className='w-full block'>
       <Header/>
       <main>
        <Outlet/>
        TODO:
       </main>
       <Footer/>
     </div>
    </div>
  );
}

export default App