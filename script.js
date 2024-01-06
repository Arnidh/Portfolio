

var typed = new Typed('#element', {
    strings: ['Student','Developer','Analyst','Student','Developer','Analyst','Student','Developer','Analyst','Student','Developer','Analyst','Student','Developer','Analyst'],
    typeSpeed: 100,
  });

  document.getElementById("git").onclick = function () {
    location.href = "https://github.com/Arnidh";
};

document.getElementById("lkn").onclick = function () {
    location.href = "Resume.html";
};

const scriptURL = 'https://script.google.com/macros/s/AKfycbyJPg97r_inItneq6e5JmfICjmjZihmZdF9fOqiiSgehsEigyV7-q4pUTueO4278SNWNw/exec'
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

  const MyButton = document.getElementById('submit-btn');
MyButton.addEventListener('click', function() {
    document.getElementById('btn-txt').innerText = "Message sent!!.."
})
