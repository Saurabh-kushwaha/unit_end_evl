 fetch("http://localhost:3000/dataBase", {
  method: "GET",
  headers: { "Content-type": "application/json;charset=UTF-8" },
  })
  .then((response) => response.json())
  .then((json) => console.log(json))
  .catch((err) => console.log(err));


function display() {
    let book = document.getElementById("book").value;
    let author = document.getElementById("author").value;
    let comments = document.getElementById("comment").value;
        let data = {
            "book": book,
            "author": author,
            "comments":comments
        }
        data = JSON.stringify(data);
        fetch("http://localhost:3000/dataBase", {
            method: "POST",
            body: data,
            headers:{
                'Content-Type': 'application/json'
            }
        })
}

// function edit_com() {
//    let url = "http://localhost:3000/dataBase"
//     fetch(url)
//         .then(function (res) {
//             // console.log('res:', res);

//             return res.json();
//         })

//         .then(function (final_res) {

//             appendProducts(final_res);
//         })

//         .catch(function (err) {
//             console.log('err:', err);

//         })

//     appendProducts(data=>{ 
//         data.forEach(el => {
//             el.comments = document.getElementById("edit").value;
//         });
//     }) 
// }


