const template = `{{!-- <img src="{{{imageSrc}}}" alt="avatar"> --}}
       <form class="form" action={{events}}>
        <h1 class='login-title'>{{title}}</h1>
        <label class="label-text" for="oldPassword"> 
            Старый пароль
         {{{inputOldPassword}}}
        </label>
        <label class="label-text" for="newPassword">
            Новый пароль
            {{{inputNewPassword}}}
        </label>
        <label class="label-text" for="passwordConfirm">
            Повторите новый пароль
             {{{inputRepeatNewPassword}}}
        </label> 
    </div>
    <div class='button-wrapper'>
    {{{button }}}
    </div>
    </form>`;
export default template;
