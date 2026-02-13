fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    data = JSON.stringify(data); // to json
    console.log(data); // string
    data = JSON.parse(data); // fron json to js object
    console.log(data); // array of objects
  });
