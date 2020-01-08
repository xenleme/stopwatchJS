const subjectOutput = document.getElementById('subjectOutput');
const removeOutputBtn = document.getElementById('remove-output-btn');

function addSubject() {
  let subjectInput = document.getElementById('subjectInput');
  subjectOutput.innerHTML = subjectInput.value;
  subjectInput.value = '';
  removeOutputBtn.className = 'subject-btn remove-output';
}

function removeOutput() {
  subjectOutput.innerHTML = '';
  removeOutputBtn.className = 'subject-btn';
}