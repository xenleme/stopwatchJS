const subjectOutput = document.getElementById('subjectOutput');

function addSubject() {
  let subjectInput = document.getElementById('subjectInput');
  subjectOutput.innerHTML = subjectInput.value;
  subjectInput.value = '';
}

function removeOutput() {
  subjectOutput.innerHTML = '';
}