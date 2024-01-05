

var typed = new Typed('#element', {
    strings: ['Student','Developer','Analyst','Student','Developer','Analyst','Student','Developer','Analyst','Student','Developer','Analyst','Student','Developer','Analyst'],
    typeSpeed: 100,
  });

  document.getElementById("git").onclick = function () {
    location.href = "https://github.com/Arnidh";
};

document.getElementById("lkn").onclick = function () {
    location.href = "https://www.linkedin.com/in/mehul-goyal-2842a6292?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app";
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbyW0xKbAyyXhnagbt6G4MZBok-ZzLQMLSeXoMf65gOB6-tjjgwBZj8UJ0xvlpRniICC/exec'
  const form = document.forms['submit-to-google-sheet']
  const msg = document.getElementsByClassName['msg']
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response =>{
        msg.innerHTML = "Message sent succesfully!"
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  })