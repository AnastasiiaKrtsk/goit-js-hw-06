document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();var r=new FormData(e.currentTarget),t={};r.forEach((function(e,r){t[r]=e})),t.email&&t.password?(console.log(t),e.currentTarget.reset()):alert("Всі поля повинні бути заповнені!")}));
//# sourceMappingURL=task-08.f56e24d5.js.map
