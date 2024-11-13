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
        <h5 class="card-title">${element["price"]} $</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-primary">
          Go somewhere
        </a>
        <a href="#" class="btn btn-danger mt-4">
          Scarta
        </a>
      </div>
    </div>
  </div>`;
    });
    const deleteBtn = document.querySelectorAll(".btn.btn-danger");

    deleteBtn.forEach(
      (element) =>
        (element.onclick = () => {
          const cardContent = element.closest(".col.mb-4");
          cardContent.innerHTML = "";
        })
    );
  })
  .catch((error) => {
    console.log("error", error);
  });
