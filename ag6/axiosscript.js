document.getElementById("btn").addEventListener("click", makerequest);

// Global axios default
axios.defaults.headers.common['Authorization'] ='dhjkadaak3678lskdjfsllsel' ;

// Get request
// function makerequest(){
//   console.log("button clicked")
//   axios('https://jsonplaceholder.typicode.com/posts/1').then((res)=>{
//     console.log("Data:",res.data)
//     console.log("id:",res.data.id)
//     console.log("title:",res.data.title)
//     console.log("body:",res.data.body)
//   }).catch((error)=>{console.log(error)})
// }

// Post request
function makerequest(){
  console.log("button clicked")
  config={
    method :'POST',
    url :'https://reqres.in/api/users',
    headers:{'Content-Type':'application/json'},
    data:'{"name":"Meenal","job":"Bsc Med"}'
  }
  axios('https://reqres.in/api/users').then((res)=>{
    console.log("Data:",res.data)
    
  }).catch((error)=>{console.log(error)})
}

