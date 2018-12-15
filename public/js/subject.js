const subjectOutput = document.getElementById('subjectOutput');

function getSubject() {
  const subjectInput = document.getElementById('subjectInput').value;
  subjectOutput.innerHTML = subjectInput;
}

function removeOutput() {
  subjectOutput.parentNode.removeChild(subjectOutput);
}