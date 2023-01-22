import { useCallback, useState } from 'react';


function useHttp(requestFunction) {
  const [loading, setLoading] = useState();
  const [status, setStatus] = useState();
  const [error, setError] = useState();

  const sendRequest = useCallback(
    async function (reduxDispatch) {
      setLoading(true);
      try {
        await requestFunction(reduxDispatch);
        setLoading(false);
        setStatus('Success')
      } catch (error) {
        setLoading(false);
        setError(error.message || 'Something went wrong!')
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    loading,
    status,
    error
  };
}

export default useHttp;
