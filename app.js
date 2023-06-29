// function updateContent() {
//     const updateButton = document.getElementById('updateButton');
//     let date = new Date();
//     updateButton.textContent = `Your vote accepted: ${date}`;

//     fetch('/getData')
//       .then((response) => response.text())
//       .then((data) => {
//         updateButton.textContent = `Your vote accepted: ${date}`;
//       })
//       .catch((error) => {
//         console.error('Error:', error);
//         updateButton.textContent = 'Error occurred';
//       });
//   }


  /*2*/
  function loadAuthors() {
    const authorList = document.getElementById('authorList');
    authorList.innerHTML = ''; // Clear the previous list

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
