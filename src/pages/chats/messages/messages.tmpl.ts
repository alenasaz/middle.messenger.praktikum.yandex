const template = `<div class="messages-layout">
    {{{header}}}
    <section>
        <ul class='messages'>
            {{#each messages}}
                <li class='message message_{{#if author}}outcoming{{else}}incoming{{/if}}'>
                    <span>{{text}}</span>
                </li>
            {{/each}}
        </ul>
        {{{footer}}}
    </section>
</div>`;
export default template;
