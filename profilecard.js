var reviews = [
    {
       id: 0,
       name: "imran shah",
       work: "data analytics",
       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYdiS6o83xt08rKMnams6WzHDiETtxkYcTg&usqp=CAU",
       details: "n larger projects, CSS files can quickly grow in size and become difficult to maintain. It can be helpful to organize your CSS into distinct sections with a table of contents to make it easier to find certain rules in the future:",
    },
    {
       id: 1,
       name: "Gowtham",
       work: "manager",
       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTisiyvbCZpcDTGYaGLY1ZtY_pG46ROws0eXw&usqp=CAU",
       details: "n larger projects, CSS files can quickly grow in size and become difficult to maintain. It can be helpful to organize your CSS into distinct sections with a table of contents to make it easier to find certain rules in the future:",
    },
    {
       id: 2,
       name: "lakshmi",
       work: "Team Leader",
       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-DfHpYeqiq9bsGeGsTr2gi-SH6R6B6925Hg&usqp=CAU",
       details: "hdkdf dskfh ksdfh lk  aslkdfh ldhf lasdkf kl asfl dlfh flsadfh fhiofae hfe ewfoi erfhaweo f d98he f afohefn larger projects, CSS files can quickly grow in size and become difficult to maintain. It can be helpful to organize your CSS into distinct sections with a table of contents to make it easier to find certain rules in the future:",
    },
    {
       id: 3,
       
       name: "santoosh",
       work: "Trainer",
       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZYdiS6o83xt08rKMnams6WzHDiETtxkYcTg&usqp=CAU",
       details: "n larger projects, CSS files can quickly grow in size and become difficult to maintain. It can be helpful to organize your CSS into distinct sections with a table of contents to make it easier to find certain rules in the future:",
    },
    {
       id: 4,
       name: "seetharam",
       work: "trainer",
       img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&usqp=CAU",
       details: "n larger projects, CSS files can quickly grow in size and become difficult to maintain. It can be helpful to organize your CSS into distinct sections with a table of contents to make it easier to find certain rules in the future:",
    },
    {
        id: 5,
        name: "Tajamul shah",
        work: "developer",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&usqp=CAU",
        details: "n larger projects, CSS files can quickly grow in size and become difficult to maintain. It can be helpful to organize your CSS into distinct sections with a table of contents to make it easier to find certain rules in the future:",
     },
     {
     id: 6,
     name: "feroz shah",
     work: "lecturer",
     img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS92eisuWOx3tEjeW14mT9ACVgXDwIRBGtnww&usqp=CAU",
     details: "n larger projects, CSS files can quickly grow in size and become difficult to maintain. It can be helpful to organize your CSS into distinct sections with a table of contents to make it easier to find certain rules in the future:",
  },
 ];
 
 
 var imgElement = document.getElementById('person-img');
 var author = document.getElementById('author');
 var work = document.getElementById('work');
 var details = document.getElementById('details');
 var prevBtn = document.querySelector("#prev-btn");
 var nextBtn = document.querySelector("#next-btn");
 var randomBtn = document.querySelector(".random-btn");
 
 
 
 var currentIndex = 0;

 prevBtn.addEventListener("click", prevClick);
 
 
 function prevClick() {
    if(currentIndex === 0 ) {
       currentIndex = reviews.length - 1;
    } else {
       currentIndex --;
    }
    updateUserDetails();
 }
 
 
 
 nextBtn.addEventListener("click", nextClick);
 
 
 function nextClick() {
    if(currentIndex === reviews.length - 1) { 
       currentIndex = 0;
    } else {
       currentIndex ++;
    }
    updateUserDetails();
 }
 
 
 function updateUserDetails() {
    imgElement.src = reviews[currentIndex].img;
    author.innerText = reviews[currentIndex].name;
    work.innerText = reviews[currentIndex].job;
    details.innerText = reviews[currentIndex].text;
 }
 
 
 randomBtn.addEventListener("click",randomlypic);
 
 function randomlypic() {
    currentIndex = Math.floor(Math.random() * reviews.length);
    updateUserDetails();
  }
 