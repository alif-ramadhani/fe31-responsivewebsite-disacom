function nextPage() {
	var email = document.getElementById("email").value;
	if (email == "") {
	  alert("Email harus diisi");
	  return false;
	} else {
	  document.getElementById("page-1").style.display = "none";
	  document.getElementById("page-2").style.display = "block";
	}
  }
  
  function resetPassword() {
	var newPassword = document.getElementById("new-password").value;
	var confirmPassword = document.getElementById("confirm-password").value;
	if (newPassword == "" || confirmPassword == "") {
	  alert("Kata sandi baru dan konfirmasi kata sandi baru harus diisi");
	  return false;
	} else if (newPassword != confirmPassword) {
	  alert("Kata sandi baru dan konfirmasi kata sandi baru harus sama");
	  return false;
	} else {
	  alert("Kata sandi Anda telah berhasil direset");
	  return true;
	}
  }
  