const authBtn = document.getElementById('auth-btn');
const activityFormSection = document.getElementById('activity-form-section');
const activityTab = document.getElementById('activity-tab');

authBtn.addEventListener('click', () => {
activityFormSection.classList.remove('hidden');
activityTab.removeAttribute('disabled');
authBtn.textContent = 'Logout';
});