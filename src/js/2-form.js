//console.log("Form page loaded");

const VAULT_KEY = 'feedback-form-state';

const formData = {
  email: "",
  message: "",
};

const formEl = document.querySelector('.feedback-form');
if (!formEl) {
  throw new Error('Form ".feedback-form" not found in 2-form.html');
}

formEl.addEventListener('input', event => {
  const target = event.target;

  // Перевіряємо, чи це поле вводу
  if (target.name !== 'email' && target.name !== 'message')
     return;
    
    formData[target.name] = target.value.trim();
    localStorage.setItem(VAULT_KEY, JSON.stringify(formData));
 });

  const savedData = localStorage.getItem(VAULT_KEY);
  if (savedData) {
    try {
    const parsedData = JSON.parse(savedData);
 
    formEl.elements.email.value = parsedData.email || '';   //заповнюємо поля у формі, щоб користувач бачив їх у браузері
    formEl.elements.message.value = parsedData.message || '';

    Object.assign(formData, parsedData);  //оновлюємо об'єкт formData
    } catch (error) {
    // Якщо в сховищі зламана JSON-строка — очищаємо, щоб не падало
    localStorage.removeItem(VAULT_KEY);
  }
}

formEl.addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert ('Fill please all fields');
    return;
  }

  console.log('Form submitted with data:',{ ...formData});

  localStorage.removeItem(VAULT_KEY);
  formEl.reset();

  formData.email = '';
  formData.message = '';
});