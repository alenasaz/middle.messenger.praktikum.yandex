const template = `<h1>Routes</h1>
<div class="links">
    <ul>
        {{#each pages}}
        <li>
            <a href="{{url}}">{{title}}</a>
        </li>
        {{/each}}
    </ul>
</div>`;
export default template;
