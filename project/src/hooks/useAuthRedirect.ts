import { useEffect } from 'react';
import { useAuth } from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

export const useAuthRedirect = (redirectTo: string = '/profile') => {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLoaded && isSignedIn) {
      // Use a small delay to ensure Clerk has finished processing
      const timer = setTimeout(() => {
        navigate(redirectTo, { replace: true });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [isSignedIn, isLoaded, navigate, redirectTo]);

  return { isSignedIn, isLoaded };
};
