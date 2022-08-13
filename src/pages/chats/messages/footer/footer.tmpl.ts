const template = `<footer class="messages-footer">
    <button class="messages-footer__attache-files">
        <img src="{{attachFiles}}" class="messages-footer__attache-files-icon" alt="attache files icon">
    </button>
    <input class="input-flex messages-footer__input" type="text" placeholder="{{placeholder}}" name="message"/>
    <button class="messages-footer__send-message">
        <img src="{{sendMessage}}" class="messages-footer__send-message-icon" alt="send message icon">
    </button>
</footer>`;
export default template;
