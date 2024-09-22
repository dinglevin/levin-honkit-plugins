# honkit-plugin-tooltips

Tooltips Plugin for honkit

Add the plugin to your `book.json`:

```
{
	"plugins" : [ "tooltips" ]
}
```

How to use it:

```
{% tooltips delimiter="@@" direction="bottom" %}
《学习 JavaScript：初学者版》是一本全面探讨 JavaScript 的书，展示了它作为不断变化的数字领域中一门重要语言的地位。该书注重基础和实用性，适合所有希望学习 JavaScript 编程语言的人。
@@
"Learn JavaScript: Beginner's Edition" is a book that offers a comprehensive exploration of JavaScript, positioning it as a vital language in the ever-changing digital landscape. With a focus on foundation and practicality, this resource caters to everyone who wishes to learn the JavaScript programming language.
{% endtooltips %}
```

> delimiter is optional, default is "@@", if "@@" already exists in the content, you can choose other delimiter
> direction is optional, default is "bottom", you can use "top" on the last paragraph