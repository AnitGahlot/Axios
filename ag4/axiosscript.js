document.getElementById("btn").addEventListener("click", makerequest);
// promise|then
// function makerequest(){
//   console.log("button clicked")
//   const config={
//     method :'POST',
//     url :'https://reqres.in/api/users',
//     headers :{'Content-Type':'application/json'},
//     data :'{"name":"Meenal","job":"Web Dev"}'
//   }
//   axios(config).then((res)=>{
//     console.log(res.data)
//   }).catch((error)=>{
//     console.log(error)})
// }

// promise|then|shorthand
//   function makerequest(){
//   console.log("button clicked")
//   const config={
//   headers :{'Content-Type':'application/json'},
//   }
//   axios.post('https://reqres.in/api/users','{"name":"luvkush","job":"trader"}',config).then((res)=>{
//     console.log(res.data)
//   }).catch((error)=>{
//     console.log(error)})
// }

// async and await
// async function makerequest() {
//   try {
//     console.log("button clicked");
//     const config = {
//       method: "POST",
//       url: "https://reqres.in/api/users",
//       headers: { "Content-Type": "application/json" },
//       data: '{"name":"Meenal","job":"Web Dev"}',
//     };
//     const res = await axios(config);
//     console.log(res.data);
//   } catch (error) {
//     console.log(error);
//   }
// }  

// async and await
async function makerequest() {
  
  try {
    console.log("button clicked");
    const config = {
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: { "Content-Type": "application/json" },
      data: '{"name":"Meenal","job":"Web Dev"}'
    };
    const res = await axios(config);
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
}
