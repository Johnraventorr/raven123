const text = document.getElementById("text");

    const words = [
      "Frontend Developer",
      "Backend Developer",
      "Web Designer",
      "Freelancer"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let currentWord = "";
    let isDeleting = false;

    function typeEffect(){

      currentWord = words[wordIndex];

      if(isDeleting){
        text.textContent = currentWord.substring(0,charIndex--);
      }else{
        text.textContent = currentWord.substring(0,charIndex++);
      }

      if(!isDeleting && charIndex === currentWord.length){
        isDeleting = true;
        setTimeout(typeEffect,1000);
        return;
      }

      if(isDeleting && charIndex === 0){
        isDeleting = false;
        wordIndex++;

        if(wordIndex === words.length){
          wordIndex = 0;
        }
      }

      setTimeout(typeEffect, isDeleting ? 60 : 120);
    }
  typeEffect();
  