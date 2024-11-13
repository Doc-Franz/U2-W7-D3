const row = document.querySelector(".row.row-cols-4");

fetch("https://striveschool-api.herokuapp.com/books")
  .then((response) => {
    console.log("response", response);
    return response.json();
  })
  .then((cards) => {
    cards.forEach((element) => {
      row.innerHTML += `
  <div class="col mb-4">
    <div class="card">
      <img src="${element["img"]}" class="card-img-top img-fluid" alt="..." />
      <div class="card-body">
        <h5 class="card-title">${element["title"]}</h5>
        <h5 class="card-price">${element["price"]} $</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>   
        <a href="#" class="btn btn-danger mt-4"> Scarta </a>
        <a href="#" class="btn btn-success mt-4"> Compra ora </a>  
      </div>
    </div>
  </div>`;
    });
    const deleteBtn = document.querySelectorAll(".btn.btn-danger");
    const buyBtn = document.querySelectorAll(".btn.btn-success");
    const ul = document.querySelector("ul");

    deleteBtn.forEach(
      (element) =>
        (element.onclick = () => {
          const cardContent = element.closest(".col.mb-4");
          cardContent.innerHTML = "";
        })
    );

    buyBtn.forEach(
      (element) =>
        (element.onclick = () => {
          const li = document.createElement("li");
          const cardShopped = element.closest(".card");
          const titleCardShopped = cardShopped.querySelector(".card-title");
          li.innerText = titleCardShopped.innerText;
          ul.appendChild(li);
        })
    );
  })
  .catch((error) => {
    console.log("error", error);
  });
