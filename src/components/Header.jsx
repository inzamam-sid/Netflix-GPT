import { signOut } from 'firebase/auth';
import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/userSlice';


const Header = () => {
  const navigate = useNavigate();
  const user = useSelector(store => store.user)
  const dispatch = useDispatch();
  const handleSignOut = () => {
    signOut(auth).then(() => {
  // Sign-out successful.
  dispatch(removeUser());
  navigate("/")
}).catch((error) => {
   navigate("/error");
});
  }
  return (
    <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between'>
    <img 
      className='w-48'
    src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2025-08-26/consent/87b6a5c0-0104-4e96-a291-092c11350111/0198e689-25fa-7d64-bb49-0f7e75f898d2/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'
    alt='logo'/>
    {user && (
    <div className='flex p-2'>
        <img alt="usericon"
          src={user?.photoURL}
          className="w-8 h-8 rounded-full object-cover"
        />
        <button onClick={handleSignOut} className='font-bold text-white'>(Sign Out)</button>
    </div>
          )}
    </div>
  )
};

export default Header