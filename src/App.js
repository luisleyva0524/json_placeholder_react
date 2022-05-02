import  Table from 'react-bootstrap/Table'; 

fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(data => viewdata(data))
  .catch(error => console.log(error));

const viewdata = ((data) => {
  let body = "";
  for (var i = 0; i < data.length; i++) {
    body += `<tr>    
        <td>${data[i].id}</td>
        <td>${data[i].name}</td>
        <td>${data[i].username}</td>
        </tr>`
  }
  document.getElementById('table').innerHTML = body
});

function App() {
  return (
    <div className='App'>
    <h3>All data of API JSON Placeholder.</h3>
   <Table striped bordered hover="md" variant='dark'> 
      <thead>
        <tr>
          <th>ID</th>
          <th>NAME</th>
          <th>USERNAME</th>
        </tr>
      </thead>
      <tbody id="table">
      </tbody>
    </Table> 
  </div>
  );
}

export default App;
