// let Name = document.querySelector("#name");
// let myName = document.querySelector(".myName");

// Name.addEventListener("change",()=>{
//       myName.innerHTML = Name.value
// })


let skills = document.querySelector(".skills-list");
let button = document.querySelector(".btn");

button.addEventListener("click",()=>{
      if(skills.style.display === "none"){
            skills.style.display = "block";
            button.innerHTML = "Hide Skills"
      }else {
            skills.style.display = "none";
            button.innerHTML = "Show Skills"
      };
});

  skills.style.display = "none";

