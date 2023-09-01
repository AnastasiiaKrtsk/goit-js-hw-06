document.querySelector(".login-form").addEventListener("submit",(function(e){e.preventDefault();const r=new FormData(e.currentTarget),t={};r.forEach(((e,r)=>{t[r]=e})),t.email&&t.password?(console.log(t),e.currentTarget.reset()):alert("Всі поля повинні бути заповнені!")}));
//# sourceMappingURL=task-08.a25a5d49.js.map
