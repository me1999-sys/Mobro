//CALLBAK
//a.
function mandi() {
  console.log("Mandi");
}

//b.
/*function sarapan() {
 setTimeout(function () {
    console.log("Sarapan");
  
}, 3000);
} code sebelum menggunakan callback*/

//c.
function berangkatSekolah() {
  console.log("Berangkat Sekolah");
}

//d.
/*mandi();
sarapan();
berangkatSekolah();
*/
// e.
function sarapan(callback) {
  setTimeout(function () {
    console.log("Sarapan");
    callback();
  }, 3000);
}
//f.
mandi();
sarapan(berangkatSekolah);

//Promise

let condition = true;
function helloWorld() {
  return new Promise((resolve) => {
    setTimeout(function () {
      resolve("Hello World!");
    }, 2000);
  });
}

const messages = async () => {
  const msg = await helloWorld();
  console.log(msg);
};
messages();

//fetch

function ambilDataUser() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
      return response.json();
    })
    .then(function (users) {
      console.log(users);
    });
}
ambilDataUser();
