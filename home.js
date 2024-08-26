function handleUpload(event) {
    event.preventDefault();
    // would Show confirmation section and hide upload section
    document.getElementById('uploadSection').classList.add('hidden');
    document.getElementById('confirmationSection').classList.remove('hidden');
  }

  function showUploadSection() {
    // this would Show  upload section & hide the confirmation section
    document.getElementById('uploadSection').classList.remove('hidden');
    document.getElementById('confirmationSection').classList.add('hidden');
  }

  function logout() {
    // would redirect to login page
    window.location.href = 'login.html';
  }