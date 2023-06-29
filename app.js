function updateContent() {
    const updateButton = document.getElementById('updateButton');
    let date = new Date();
    updateButton.textContent = `Your vote accepted: ${date}`;

    fetch('/getData')
      .then((response) => response.text())
      .then((data) => {
        updateButton.textContent = `Your vote accepted: ${date}`;
      })
      .catch((error) => {
        console.error('Error:', error);
        updateButton.textContent = 'Error occurred';
      });
  }


  /*2*/
  function loadAuthors() {
    const authorList = document.getElementById('authorList');
    authorList.innerHTML = ''; 

    fetch('/books.json')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((book) => {
          const authorItem = document.createElement('li');
          authorItem.textContent = book.author;
          authorList.appendChild(authorItem);
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        authorList.innerHTML = 'Error occurred';
      });
  }


  /*3*/

document.addEventListener('DOMContentLoaded', getUserInformation);

    function getUserInformation() {
        fetch('https://randomuser.me/api/') 
          .then((response) => response.json())
          .then((data) => {
            const userDetails = document.getElementById('userDetails');
            userDetails.innerHTML = `
              <img src="${data.avatar}" alt="User Avatar">
              <p>Name: ${data.name}</p>
              <p>Age: ${data.age}</p>
              <p>Gender: ${data.gender}</p>
              <p>Country: ${data.country}</p>
              <p>Login: ${data.login}</p>
              <p>Password: ${data.password}</p>
              <p>Email: ${data.email}</p>
            `;
          })
          .catch((error) => {
            console.error('Error:', error);
            const userDetails = document.getElementById('userDetails');
            userDetails.innerHTML = 'Error occurred while fetching user information.';
          });
      }

