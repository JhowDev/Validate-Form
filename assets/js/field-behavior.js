const inputs = document.querySelectorAll('.input');

const checkbox = document.querySelector('.checkbox');
const checkboxImg = document.querySelector('.check-img');

let checkboxIsActive = false;

function setPurpleOnLabel(e) {
  const el = e.target;
  const label = el.previousElementSibling;
  label.style.color = '#7F26A4';
}

function setGrayOnLabel(e) {
  const el = e.target;
  const label = el.previousElementSibling;
  label.style.color = '#cecbcb';
}

function setComportamentoDoInput(input) {
  input.addEventListener('focus', (e) => {
    setPurpleOnLabel(e);
  });
  
  input.addEventListener('blur', (e) => {
    setGrayOnLabel(e);
  });
}

inputs.forEach((input) => {
  setComportamentoDoInput(input);
})

checkbox.addEventListener('click', (e) => {
  if (checkboxIsActive) {
    checkbox.style.background = 'transparent';
    checkboxImg.style.display = 'none';
    checkboxIsActive = false;
   
  } else {
    checkbox.style.background = '#7F26A4';
    checkboxImg.style.display = 'block';
    checkboxIsActive = true;
  }
});
