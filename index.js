const h1 = document.getElementById(`h1`)
const reqClientes = fetch(`http://localhost:8091/categorias`).then((resp)=>
    {
    resp.json().then((data)=>{
      console.log(data)
      const[a] = data
      h1.innerHTML = a
    })
  }).catch(console.warn(` `))