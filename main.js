function cargarTabla() {

  let tbody = document.querySelector("#bodyData")
  let name = document.querySelector("#name").value
  let status = document.querySelector("#status").value
  let gender = document.querySelector("#gender").value
  
  cons= `https://rickandmortyapi.com/api/character?name=${name}&status=${status}&gender=${gender}`
  console.log()

  fetch(cons)
  .then(res => res.json())
  .then(data => {
  let rowData = data.results.map(item => {

  return `<tr>
              <td>${item.name}</td>
              <td>${item.status}</td>
              <td>${item.gender}</td>
              <td><img src="${item.image}"></td>
          </tr>`
  }).join('')
  
  tbody.innerHTML = rowData

  
  })
}