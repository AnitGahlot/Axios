document.getElementById("btn").addEventListener("click",makerequest);
// promise then and error handling
// function makerequest(){
// console.log("button clicked")
//   axios.get('data.json')
//    .then((res)=>{
//    console.log(res)
//   console.log(res.data)
//   console.log(res.data.name)
//   console.log(res.data.roll)
// }).catch((error)=>{console.log(error)
// }).then(()=>{console.log("clean")})
// }


//promise then and showing data in browser 
// function makerequest(){
// console.log("button clicked")
// axios.get('data.json')
// .then((res)=>{  
// console.log(res)
// console.log(res.data)
// document.getElementById("divdata1").innerText=res.data.name
// document.getElementById("divdata2").innerText=res.data.roll

// }).catch((error)=>{console.log(error)
// })
// }

//async and  await 
// async function makerequest(){
//   console.log("button clicked")
//   const res=await axios.get('data.json')
//   console.log(res)
//   console.log(res.data)
//  }



// async and await |error handling and show data in browser
//  async function makerequest(){
//   try {console.log("button clicked")
//   const res=await axios.get('data.json')
//   console.log(res)
//   console.log(res.data) 
//   document.getElementById("divdata1").innerText=res.data.name 
//  document.getElementById("divdata2").innerText=res.data.roll
//   } catch (error) {
//     console.log(error)
//   }
//  }


  
