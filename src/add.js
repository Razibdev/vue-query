// import axios from 'axios';

export const addContentDocument = async (form) =>{
    const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form)
  };

    fetch("http://localhost:8000/test", requestOptions)
      .then((response) => response.json())
      .then((res) => (console.log(res)));
}
