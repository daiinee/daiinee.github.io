console.log("Hello");
var request = new Request(
  "https://cors-anywhere.herokuapp.com/uinames.com/api",
  {
    method: "GET",
  }
);
let myFunction = () => {
  console.log(request);
  fetch(request)
    .then((e) => e.json())
    .then((e) => {
      console.log(e.name);
      document.getElementById("someText").innerHTML = e.name;
    })
    .catch((e) => console.log(e, "ERROR"));
};

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  cursor.setAttribute(
    "style",
    "top: " + (e.pageY - 15) + "px; left: " + (e.pageX - 15) + "px;"
  );
});

document.addEventListener("click", (e) => {
  cursor.classList.add("expand");
  setTimeout(() => {
    cursor.classList.remove("expand");
  }, 500);
});
