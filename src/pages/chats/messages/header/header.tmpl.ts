const template = `<header class="messages-header">
    <div class='messages-header__person'>
        <img src="{{avatar}}" class=" messages-header__person-photo" alt="avatar">
        <div class="messages-header__person-info">
            <span class="messages-header__person-name">{{nickname}}</span>
            <span class="messages-header__person-status">{{status}}</span>
        </div>
    </div>
</header>`;
export default template;
