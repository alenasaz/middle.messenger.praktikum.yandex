const template = `<form class="form">
    <h1 class='login-title'>{{title}}</h1>
    <label class="label-text" for="email">Почта</label>
    {{{inputEmail}}}
    <label class="label-text" for="login">Логин</label>
    {{{inputLogin}}}
    <label class="label-text" for="first_name">Имя</label>
    {{{inputName}}}
    <label class="label-text" for="second_name">Фамилия</label>
    {{{inputSecondName}}}
    <label class="label-text" for="phone">Телефон</label>
    {{{inputPhone}}}
    <label class="label-text" for="password">Пароль</label>
    {{{inputPassword}}}
    <label class="label-text" for="passwordConfirm">Пароль (ещё раз)</label>
    {{{inputRepeatPassword}}}
    <div class='button-wrapper'>
    {{{ button }}}
    </div>
    </form>`;
export default template;
