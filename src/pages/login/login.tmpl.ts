const template = `<form class='form'>
  <h1 class='login-title'>{{title}}</h1>
    <label class='label-text login-label' for="login">Логин</label>
    {{{ inputLogin }}}    
    <label class='label-text login-label' for="password">Пароль</label>
    {{{ inputPassword }}}
    <div class='button-wrapper'>
    {{{ button }}}
    </div>
    </form>`;
export default template;
