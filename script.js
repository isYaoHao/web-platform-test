(() => {
  const file = document.querySelector('#file-upload');
  const submit = document.querySelector('#comfire');
  let submitFiles;
  file.addEventListener('change', function (e) {
    submitFiles = e.target.files[0];
  });

  submit.addEventListener('click', function () {
    console.log(submitFiles);
  });
})();
