function handleGetFormData() {
  let name = document.getElementById("name").value;
  let city = document.getElementById("city").value;
  let email = document.getElementById("email").value;
  let zipCode = document.getElementById("zip-code").value;
  let status = document.getElementById("status").checked;

  return {
    name,
    city,
    email,
    zipCode,
    status,
  };
}

function isNumber(num) {
  if (isNaN(num)) {
    return true;
  } else {
    return false;
  }
}

function checkboxIsChecked() {
  let status = document.getElementById("status");
  return status.checked;
}

console.log(checkboxIsChecked);
