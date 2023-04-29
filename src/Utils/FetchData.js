
export const fetchData = async (endPoint, id) =>{
  const VITE_APP_BASE_URL = import.meta.env.VITE_APP_BASE_URL;
  const newId = id ? id : '' ;

  const myHeaders = new Headers();
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

  const requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
    
  const response = await fetch(VITE_APP_BASE_URL + endPoint + newId, requestOptions )
  const data = await response.json()
  return data;
}