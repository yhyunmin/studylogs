import React, { useCallback, useState } from "react";
//
// const useFetch = async (taskText) => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [data, setData] = useState(null);
//   const [loadedTasks, setLoadedTasks] = useState([]);
//   setIsLoading(true);
//   setError(null);
//   try {
//     const response = await fetch(
//       "https://react-http-1adf2-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
//       taskText && {
//         method: "POST",
//         body: JSON.stringify({ text: taskText }),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       }
//     );
//     if (!response.ok) {
//       throw new Error("Request failed!");
//     }
//
//     const res = await response.json();
//     if (taskText) {
//       const generatedId = res.name; // firebase-specific => "name" contains generated id
//       const createdTask = { id: generatedId, text: taskText };
//       taskText.onAddTask(createdTask);
//     } else {
//       for (const taskKey in res) {
//         setLoadedTasks((prev) => [{ id: taskKey, text: res[taskKey].text }]);
//       }
//     }
//     setData(res);
//   } catch (err) {
//     setError(err.message || "Something went wrong!");
//   }
//   setIsLoading(false);
//
//   return {
//     isLoading,
//     error,
//     data,
//     loadedTasks,
//   };
// };
//
// export default useFetch;

const useHttp = (applyData, taskText) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [loadedTasks, setLoadedTasks] = useState([]);
  setIsLoading(true);
  setError(null);
  const sendRequest = useCallback(
    async (requestConfig) => {
      try {
        const response = await fetch(
          requestConfig.url,
          taskText && {
            method: requestConfig.method ? requestConfig.method : "Get",
            headers: requestConfig.headers ? requestConfig.headers : {},
            body: requestConfig.body
              ? JSON.stringify(requestConfig.body)
              : null,
          }
        );
        if (!response.ok) {
          throw new Error("Request failed!");
        }
        const res = await response.json();
        applyData(res);
      } catch (err) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    [applyData, taskText]
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
