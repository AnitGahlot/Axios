document.getElementById("btn").addEventListener("click", makerequest);

// promise|then

function makerequest(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let job = document.getElementById("job").value;
  console.log("button clicked");
  const config = {
    method: "POST",
    url: "https://reqres.in/api/users",
    headers: { "Content-Type": "application/json" },
    data: JSON.stringify({ name: name, job: job }),
  };
  axios(config).then((res) => {
    console.log(res.data);
  }).catch((error)=>{console.log(error)})
}

// async and await
async function makerequest(e) {
  e.preventDefault()
  let name = document.getElementById("name").value
  let job = document.getElementById("job").value
  try {
    console.log("button clicked");
    const config = {
      method: "POST",
      url: "https://reqres.in/api/users",
      headers: { "Content-Type": "application/json" },
      data: JSON.stringify({name:name,job:job})
    }
    const res = await axios(config)
    console.log(res.data)
  } catch (error) {
    console.log(error);
  }
}

