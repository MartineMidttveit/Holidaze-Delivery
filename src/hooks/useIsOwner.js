import { useState, useEffect } from 'react';

const storedProfileEmail = localStorage.getItem('profile_email');

const useIsOwner = (userEmail) => {
  const [isOwner, setIsOwner] = useState(() => userEmail === storedProfileEmail);

  useEffect(() => {
    const correctedLocalStorageEmail = storedProfileEmail?.replace(/"/g, '')
    setIsOwner(userEmail === correctedLocalStorageEmail);
  }, [userEmail]);


  return isOwner;
};

export default useIsOwner;
