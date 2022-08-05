const template = `<main class="container">
        <div class="user_data">
            <button class="button-change">
                Поменять аватар
            </button>
            <img class="photo" src="{{imageSrc}}" alt="avatar" />
            <p class="name">{{firstName}}</p>
            <button class="exit">Выйти</button>
        </div>
        <form class="form_profile">
            <div class="wrapper">
            <label class="label-profile" for="email">
            Почта
            {{{textEmail}}}
        </label>
        </div>
            <label class="label-profile" for="login">
            Логин
             {{{textLogin}}}
        </label>
        <label class="label-profile" for="first_name">
            Имя
             {{{textName}}}
        </label>  
         <label class="label-profile" for="second_name">
            Фамилия
            {{{textSecondName}}}
        </label>
        <label class="label-profile" for="display_name">
            Имя в чате
            {{{textChatName}}}
        </label>
        <label class="label-profile" for="phone">
            Телефон
            {{{textPhone}}}
        </label>
            

            <div class='button-wrapper'>
                <a class="link" href="/button-change-password">Изменить пароль</a>
                <a class="link" href="/button-change-password">Изменить данные</a>
            </div>
        </form>
       <div class='button-wrapper'>
           {{{ button }}}
        </div>
        </main>`;
export default template;
