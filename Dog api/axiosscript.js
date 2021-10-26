document.getElementById("btn").addEventListener("click", makerequest);



// Get request
function makerequest(){
  console.log("button clicked")
  axios.get('https://dog.ceo/api/breeds/image/random') 
  .then((res)=>{
    console.log(res)
    console.log("Data:",res.data)
    console.log(res.data.message)
    document.getElementById("image").setAttribute('src',res.data.message)
   
  }).catch((error)=>{console.log(error)})
}


