document.getElementById("btn").addEventListener("click",makerequest);
// Promise then |Single data
// function makerequest(){
//   console.log("button clicked")
//   axios('https://jsonplaceholder.typicode.com/posts/1')
//   .then((res)=>{console.log(res)
//   console.log(res.data)
//   console.log("User Id: ",res.data.userId)
//   console.log("Id: ",res.data.id)
//   console.log("Title: ",res.data.title)
//   console.log("Body: ",res.data.body)
//   }).catch((error)=>{console.log(error)})
// }

// Promise then|single data using params
// function makerequest(){
//   console.log("button clicked")
//   config={
//     params :{id:1}
//   }
//   axios('https://jsonplaceholder.typicode.com/posts/',config)
//   .then((res)=>{console.log(res)
//   console.log(res.data)
//   console.log("Data[0]",res.data[0])
//   console.log("User Id: ",res.data[0].userId)
//   console.log("Id: ",res.data[0].id)
//   console.log("Title: ",res.data[0].title)
//   console.log("Body: ",res.data[0].body)
//   }).catch((error)=>{console.log(error)})
// }

// Promise then |Single data|showing data in browser
// function makerequest(){
//   console.log("button clicked")
//   axios('https://jsonplaceholder.typicode.com/posts/1')
//   .then((res)=>{console.log(res)
//   console.log(res.data)
//   document.getElementById("id1").innerText=res.data.id
//   document.getElementById("title").innerText=res.data.title
//   document.getElementById("body").innerText=res.data.body
//   console.log("User Id: ",res.data.userId)
//   console.log("Id: ",res.data.id)
//   console.log("Title: ",res.data.title)
//   console.log("Body: ",res.data.body)
//   }).catch((error)=>{console.log(error)})
// }

// Promise then |Multiple data
// function makerequest(){
//   console.log("button clicked")
//   axios('https://jsonplaceholder.typicode.com/posts/')
//   .then((res)=>{console.log(res)
//   console.log("Data: ",res.data)
//   res.data.forEach(element => {
//   console.log("Id: ",element.id)
//   console.log("Title: ",element.title)
//   console.log("Body: ",element.body)
    
//   });
  
//   }).catch((error)=>{console.log(error)})
// }

// promise then|Multiple data|showing data in browser
// function makerequest(){
//   console.log("button clicked")
//   axios('https://jsonplaceholder.typicode.com/posts/')
//   .then((res)=>{console.log(res)
//   console.log("Data: ",res.data)
//   let output=document.getElementById("allpost")
//  res.data.forEach(element => {
//    output.innerHTML +=`<div>Id: ${element.id}</div>
//    <div>title: ${element.title}</div>
//    <div>body: ${element.body}</div><hr>`
   
//  });
 
  
//   }).catch((error)=>{console.log(error)})
// }

// Async Await |Single data
// async function makerequest(){
//   try {
//     console.log("button clicked")
//     const res =await axios('https://jsonplaceholder.typicode.com/posts/1')    
//     console.log(res.data)
//     console.log("Id: ",res.data.id)
//     console.log("Title: ",res.data.title)
//     console.log("Body: ",res.data.body) 
//   } catch (error) {
//     console.log(error)
//   }
// }
 
// Async Await |Single data|showing data in browser
// async function makerequest(){
//   try {
//     console.log("button clicked")
//     const res =await axios('https://jsonplaceholder.typicode.com/posts/1')    
//     console.log("Data",res.data)
//     document.getElementById("id1").innerText=res.data.id
//     document.getElementById("title").innerText=res.data.title
//     document.getElementById("body").innerText=res.data.body
   
//   } catch (error) {
//     console.log(error)
//   }
// }

// Async Await |Multiple  data
// async function makerequest(){
//   try {
//     console.log("button clicked")
//     const res =await axios('https://jsonplaceholder.typicode.com/posts')    
//     console.log("Data",res.data)
//     res.data.forEach(element => {
//    console.log("Id: ",element.id)
//    console.log("Title: ",element.title)
//    console.log("Body: ",element.body)     
//     });
   
//   } catch (error) {
//     console.log(error)
//   }
// }

// Async Await |Multiple  data|data showing in webpage
async function makerequest(){
  try {
    console.log("button clicked")
    const res =await axios('https://jsonplaceholder.typicode.com/posts')    
    console.log("Data",res.data)
    let output=document.getElementById("allpost")
    res.data.forEach(element => {
      output.innerHTML +=`<div>Id: ${element.id}</div>
      <div>title: ${element.title}</div>
      <div>body: ${element.body}</div><hr>`
       
    });
   
  } catch (error) {
    console.log(error)
  }
}



 

  
