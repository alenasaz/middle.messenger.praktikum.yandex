const template = `{{{header}}}
<ul class="chats">
  {{#each chats}}
    <li class="chat">
      <img class="avatar" src="{{imageSrc}}" alt="chat picture" />
      <div class="last-message">
        <span>{{chatName}}</span>
        <span class="message_name"><b>{{message.author}}</b>:
          {{message.text}}</span>
      </div>
    </li>
  {{/each}}
</ul>`;
export default template;
