list = document.querySelector("ul");
fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    list.innerHTML = `
    <li>ID: ${data[0].id}</li>
    <li>Name: ${data[0].name}</li>
    <li>Career: ${data[0].career}</li>
    <li>Skills: ${data[0].skills.join(", ")}</li>
    `;
  });
