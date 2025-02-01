const form = document.querySelector('form');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Bedankt voor je bericht! We zullen je bericht zo snel mogelijk beantwoorden.');
  form.reset();
});
