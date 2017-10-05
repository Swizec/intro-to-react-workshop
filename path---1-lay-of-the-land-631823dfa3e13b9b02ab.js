webpackJsonp([0xe76e96904a67],{"./node_modules/json-loader/index.js!./.cache/json/1-lay-of-the-land.json":function(n,a){n.exports={data:{markdownRemark:{html:'<h1 id="reacts-biggest-innovation"><a href="#reacts-biggest-innovation" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React\'s biggest innovation</h1>\n<p>I like to say React is the biggest revolution in writing code for browsers since jQuery. You probably don\'t remember what life was like before jQuery. It was bad.</p>\n<p>Before jQuery we spent a lot of time worrying about the DOM and how to talk to it. Each browser was different and you had to take that into account.</p>\n<p>jQuery solved that.</p>\n<p>Then webapps became bigger and more complex. jQuery code started to look like spaghetti. You couldn\'t tell the difference between code that\'s worrying about <em>how</em> to render something and code that\'s deciding <em>what</em> to render.</p>\n<p>Backbone helped but it was cumbersome and awkward. Been using it professionally since before version 1 ... 0.6, I think. If you\'re still using Backbone and you\'re struggling, I share your pain. My day job is 80% Backbone.</p>\n<p>Angular wasn\'t much better. </p>\n<h2 id="enter-react-stage-left"><a href="#enter-react-stage-left" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Enter React, stage left</h2>\n<p>And then there was React. In my opinion the best thing that\'s happened to the web in the past 10 years.</p>\n<p>React\'s big innovation is that it solves our most painful problem 👇</p>\n<blockquote>\n<p>How to achieve good rendering performance without ever thinking about how things are rendered</p>\n</blockquote>\n<p>Unlike jQuery or Backbone or even Angular, React uses something called the virtual DOM. An in-memory presentation of your document that it can play with <em>before</em> rendering the page. </p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/378915df0294335ca51cf7dd51d69288-9e2ab.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 56.663941128372855%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAADAUlEQVQozx2Sa1NTVxSGz48wtrWtiEyLF2zqhRAUUTGYBjghOUnI/eQeGokhSakRCPYqQ4oUi2gtDIxx2o6CGhxAAypoB2OLfOg/errTD+/M3jN7Petde73Si/YAf5lCLDRaydY5GD5g47sDDgoNMlfq7eSEfjliJLPfyzeHFBI1Pu7rzxL92MOY1kHvXpWpehNre05S+fAU0qw+wa1jaR5+ZhQgK1M6E6OHbdw4Xj3LFLQyN7UG+ms8PDhv5Ou6HpbPtJCpsRP7wEdwd5Sbn3awtquRN5ompCcftbAsLkvadn46prJksfBE7qSsdFEyC1hzD8XWbrK1QTZcMqUuE29sRla6jIwe9ZCpi3H3iMzfAvZOo0d6uUvHhtDmSRN/djtY8zpYD/qpJBNsxb0su4Ujf4hHipOthJ/tS27+SalUEk7KXjNPVZXHrYqANbFVdVh191wA3xnNvAj2sBnz8tuFHv5Qwmwk06ynA2xGvGz3+/l3KMp23MNrp4OdgQjlgHgfdVFx2akI2IZGh7QkgCtCbzvM7GSDrIZ8TLcp3JVVfnfFKDis3HLaKdWfZkVnYG23jrfv6SkdbOXeaZNw7WVHGFluMLL6SRtSqfYMxVNWnrsDPI5HmPD5GPcHKNjd3IhHmcmlWExn2VSTrAoH62Ka2fcbmdqjY3JvM4sWO3e+qDY8x7ZoJBXrDIwddzDd5OaqEiMT+4rZUIiMv5dsKMlwOMlINs9U//c8E7pqiDPyeSeZjjD5Tj9DHRFyxl5+bAlwr/Y80sODZq6ZMoQS08j5RVLpCebDaRL5OSb6rzGRLRAd+JVY6jbDsR8IDc5x2dpH1JbBH5/EOrKIPzJN2DDA8FEnUnmfgfGWEPOHu/lZa2asWWW+TWSub5DxwGWuh/OMR4a4cinHt3KMO3ofz/adY1TUFBssLBwyc/1ijkJ6kAWRAumpWEhJ00hZ/E1Rc4I5fTtzspWZCwqTBg8zcoT7nhQPLvbxyqGyWn/2/9xWVa19Lbb7yG5hxuZi5UuF/wCziudLD3M+DgAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="diffing algorithms"\n        title=""\n        src="/static/378915df0294335ca51cf7dd51d69288-ebd70.png"\n        srcset="/static/378915df0294335ca51cf7dd51d69288-89969.png 240w,\n/static/378915df0294335ca51cf7dd51d69288-9e0c3.png 480w,\n/static/378915df0294335ca51cf7dd51d69288-ebd70.png 960w,\n/static/378915df0294335ca51cf7dd51d69288-14e2d.png 1440w,\n/static/378915df0294335ca51cf7dd51d69288-0b20b.png 1920w,\n/static/378915df0294335ca51cf7dd51d69288-9e2ab.png 2446w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>As a result, React triggers repaints and reflows only when it needs to. Your changes are batched and committed to the page when necessary.</p>\n<p>And because React uses an advanced tree diffing algorithm, it can avoid re-rendering elements that didn\'t change. The fewer repaints, the faster the webapp.</p>\n<p>A lot of heavy research has gone into tree diffing algorithms over the years (decades). You don\'t want to reinvent all of that every time your Backbone View has a child View. 😉</p>\n<h1 id="components-are-the-future"><a href="#components-are-the-future" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Components are the future</h1>\n<p>Now I don\'t know what React is going to look like 10 years from now, or if we\'re still going to use React, but I can tell you one thing</p>\n<blockquote>\n<p>The component is here to stay</p>\n</blockquote>\n<p>Think about how you build user interfaces. You\'re probably concerned about separation of concerns, right?</p>\n<p>And just like I used to, you like to think of separation of concerns in terms of technology:</p>\n<ul>\n<li>JS for behavior</li>\n<li>CSS for styling </li>\n<li>HTML for structure</li>\n</ul>\n<p>You dream of the day when a designer will write your HTML and your CSS so you can focus on the <em>real</em> code – JavaScript.</p>\n<p>Yet the day never comes. You keep writing all of it, they keep being tightly coupled, and you\'re just annoyed that you have to build your stuff in a bazillion different files.</p>\n<p>It turns out "separation of concerns" in UI is more about separation of usecase than technology.</p>\n<p><a href="http://www.didoo.net/2017/10/let-there-be-peace-on-css/">\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/783551b7330b6a476348b5b7e29895f7-63b17.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 65.234375%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAIAAAAmMtkJAAAACXBIWXMAAAsSAAALEgHS3X78AAABFUlEQVQoz5WSy0rEMBSG8zK+zODSlWs3I/gIPoKIgl3PgBfEndiFuPAFbOllWoQpDi5cdVqoTU7SmmnMYshNqHr4QhaHj5+THCRGq+u6kS6SZ7V6C8MwiuI8y4pimabpsiiU3DEWBMFLEMRJkud5kqRZlq2reiv/njwMLSYtxq28CHxxrpNlVS1N39cmfLNR8keFHbRMKfUeE7R3blI2oOTD2b2DlexHr5OTuUkDTMs3Mwc7OfbQKTIpoVTy0cOxg5b7vn8q/P27XZNP1ij5+nLqsJU551VdiytP7CCLWicvzqYO1szi2RcHE4tWJ8PthYMtj/6zfBQAoIwyxgiA5B8yIQQTDBSGYSBA1M6iP+62zPzZ/QZxkJUJ6eGHmAAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="separation of concerns"\n        title=""\n        src="/static/783551b7330b6a476348b5b7e29895f7-ebd70.png"\n        srcset="/static/783551b7330b6a476348b5b7e29895f7-89969.png 240w,\n/static/783551b7330b6a476348b5b7e29895f7-9e0c3.png 480w,\n/static/783551b7330b6a476348b5b7e29895f7-ebd70.png 960w,\n/static/783551b7330b6a476348b5b7e29895f7-63b17.png 1024w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </a></p>\n<p>A button is always a button, a date picker is a date picker. Your UI is a series of components most of which you can develop separately and reuse over and over again.</p>\n<h1 id="a-gentle-introduction-to-jsx"><a href="#a-gentle-introduction-to-jsx" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>A gentle introduction to JSX</h1>\n<p>Where React truly shines is that it makes components practical.</p>\n<p>With JSX – JavaScript eXtension – HTML becomes a first-class citizen in your code. You can, for example, assign a chunk of HTML to a variable.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> chunk <span class="token operator">=</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">></span></span>Hello world<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>I\'m a paragraph<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>Behind the scenes JSX compiles into a series of <code>createElement</code> function calls. Our <code>chunk</code> turns into something like this:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> chunk <span class="token operator">=</span> <span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>\n\t<span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'h1\'</span><span class="token punctuation">,</span> <span class="token string">"Hello world"</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n\t<span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'p\'</span><span class="token punctuation">,</span> <span class="token string">"I\'m a paragraph"</span><span class="token punctuation">)</span>\n<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>I find JSX a lot easier to read. You can look at my code and see that it\'s a div with a title and a paragraph.</p>\n<blockquote>\n<p>If you can read HTML, you can read JSX.</p>\n</blockquote>\n<p>Here\'s where it gets interesting. Now that we have a <code>chunk</code> of HTML, we can use it in other HTML.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t<span class="token punctuation">{</span>chunk<span class="token punctuation">}</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>I am another paragraph<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>With JSX, you can put any JavaScript expression in <code>{}</code>. It evaluates and puts the result in your HTML.</p>\n<p>You can even do it in props!</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token comment" spellcheck="true">// this works too</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">getSlug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n\t<span class="token punctuation">{</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>And you can define custom elements.</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> Article <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span> <span class="token attr-name">id</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token function">getSlug</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span><span class="token function">getTitle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">></span></span>\n\t\t<span class="token punctuation">{</span><span class="token function">getContent</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>That\'s actually a React functional stateless component. You can use it like any other HTML element. Don\'t worry about the details right now, we\'ll talk more about components in the next section.</p>\n<p>Here\'s how you render a component:</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Article</span> <span class="token punctuation">/></span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Article</span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n</code></pre>\n      </div>\n<p>HTML elements are lower case, React components must start with a capital. That\'s how you tell them apart.</p>\n<p>As you\'ll see in future sections, bringing HTML into JavaScript is powerful. You get all the benefits and power of JavaScript combined with the declarative nature and readability of HTML. 👌</p>\n<h1 id="modern-build-tools"><a href="#modern-build-tools" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Modern build tools</h1>\n<p>JSX, however, is not a part of JavaScript 👉 we have to use a compiler to make it work.</p>\n<p>JavaScript used to be something you write in a simple text editor, open in your browser, and see what happens. Nowadays it\'s becoming more and more a compiled language.</p>\n<p>Your code often runs through multiple compilers before it reaches the user. Everything from transforming ES5 into ES6 and beyond, to minifying your code and splitting it into bundles.</p>\n<h2 id="start-with-create-react-app"><a href="#start-with-create-react-app" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Start with create-react-app</h2>\n<p>To avoid the pain of setting all that stuff up from scratch, we\'re using a toolkit: <a href="https://github.com/facebookincubator/create-react-app"><code>create-react-app</code></a>. It\'s the officially recommended way to bootstrap a new React application.</p>\n<p>Workshop code from this point onward assumes you\'re running inside a <code>create-react-app</code> project.</p>\n<p>In your terminal, run:</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ create-react-app intro-to-react-workshop-project\n$ cd intro-to-react-workshop-project</code></pre>\n      </div>\n<p><img src="/00958c766743748722d06cdf01f248e5.gif"></p>\n<p>This creates a new directory with your app, uses <code>npm</code> or <code>yarn</code> to install dependencies, and comes with a great default config.</p>\n<p>Our code goes in <code>src/</code>, which right now contains a basic App, some CSS, an SVG image, and a test file. The environment is fully set up for you to write modern JavaScript code without worrying that this or that feature is unsupported.</p>\n<p>Run the development server.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>$ npm/yarn start</code></pre>\n      </div>\n<p><img src="/6b61abf799c75d3275ac4490c1d57701.gif"></p>\n<p>The two most important tools <code>create-react-app</code> set up for us are <a href="https://webpack.js.org/">Webpack</a> and <a href="https://babeljs.io/">Babel</a>. Webpack is our bundler and Babel is our JavaScript transpiler. Let me explain.</p>\n<h2 id="webpack"><a href="#webpack" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Webpack</h2>\n<p><img src="https://webpack.js.org/bf093af83ee5548ff10fef24927b7cd2.svg"></p>\n<p>Webpack calls itself a module bundler. Its core task is to give us JavaScript modules.</p>\n<p>You write code in many different files, use <code>import</code> and <code>export</code> statements, and it all gets bundled up in one huge file for the browser to run. We\'ve had this before Webpack with Browserify and tools like that.</p>\n<p>What we didn\'t have before Webpack is the ability to import <em>anything</em>. You can use Webpack to import CSS, images, video, any sort of file that you\'d want to serve to your user.</p>\n<p>This happens through loaders, which are a lot like plugins. They\'re called loaders because they load things. 🤷‍♀️</p>\n<p>For example, when you import an image file, it turns into a URL string that you can use.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">import</span> Morty <span class="token keyword">from</span> <span class="token string">\'images/morty.png\'</span><span class="token punctuation">;</span>\n\nconsole<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>Morty<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment" spellcheck="true">// /static/media/1.40869a28.mp4</span>\n</code></pre>\n      </div>\n<p>Fingerprinted for cache busting, moved into a <code>static/media</code> structure ... everything you need. 👌</p>\n<p>CSS turns into <code>&#x3C;style>&#x3C;/style></code> tags, you can set up code splitting to avoid loading code your users don\'t need, throw away unused code and a bunch of other fun tweaks. I\'ve been able to use Webpack configuration to send up to 50% less code to our users, for example.</p>\n<p>Webpack is great. ❤️</p>\n<h2 id="babel"><a href="#babel" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Babel</h2>\n<p><img src="/5cf5755cd74a4f12ae5d3e496809896a.gif"></p>\n<p>Babel is a transpiler. It takes your modern JavaScript and returns old school JavaScript that works on all browsers.</p>\n<p>Like Webpack, it also comes in the shape of piles upon piles of plugins. Unlike Webpack, I find that it requires a lot less configuration and thinking about.</p>\n<p>Personally I like to rely on a couple of preset plugins and leave it at that. In theory you can start removing Babel plugins as browsers improve and you can ship more and more modern code.</p>\n<p>The fewer transforms you use, the smaller your code can become, but the newer the browser it requires. You are not likely to go without Babel any time soon.</p>\n<h1 id="react-ecosystem"><a href="#react-ecosystem" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>React ecosystem</h1>\n<p>My favorite part about React is its vast ecosystem. I\'m hoping for a future where <em>"There\'s an open source component for that"</em> becomes the answer to almost everything.</p>\n<p>You know, like we used to have with jQuery, but better.</p>\n<p>Right now you can already find a lot of pre-configured, pre-styled, widget components for almost anything you can think of. </p>\n<p>NPM currently lists 38,692 packages containing the word <code>react</code>.</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/static/3dc4add64bbfa1c426a722da398f2444-c336f.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 723px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 39.14246196403873%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABAElEQVQoz6WPu04CQRSG9320oNDEAgoTC2OrBTyABB+A0EkhRK14GJ6BR7DahnDfS/aSvczsZfZ35iBkMBQEJvnyn/znMucYrYcn9F5aRPe5idpN/SKMwesbfkYjTIafGLc7uL5t4O7+EVcyeQ7G+8cXdPqDb/SH52NAe2Wagq9WyCwLbD6HyDLyBWNg0yn4cgk2m5HyxYLqss0GfL3ezzgYyBiHJYscx0EYhqiqinylhBCoynKrO++PowOFLPR9H57n6TZSublpmpRzXRdxHCNJEtJdHEUR8jz/d7L8XTWoLTnn2uYMtm1To2pSFEVB6LHqPxioVg+CgE5Wqvun8gv7swAPJaJtswAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="react npm"\n        title=""\n        src="/static/3dc4add64bbfa1c426a722da398f2444-c336f.png"\n        srcset="/static/3dc4add64bbfa1c426a722da398f2444-e2c1d.png 240w,\n/static/3dc4add64bbfa1c426a722da398f2444-a1a96.png 480w,\n/static/3dc4add64bbfa1c426a722da398f2444-c336f.png 723w"\n        sizes="(max-width: 723px) 100vw, 723px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<h2 id="some-common-dependencies"><a href="#some-common-dependencies" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Some common dependencies</h2>\n<p>React on its own gives you just the view layer. The part that creates visual components and renders them to the browser.</p>\n<p>You can use it with any framework, even Angular or Backbone, or you can build your own out of tools available in the ecosystem. That\'s what most people do.</p>\n<p>Some common pieces that people use are 👇</p>\n<ol>\n<li>A state management library (usually Redux or MobX)</li>\n<li>A routing solution (often ReactRouter)</li>\n<li>A styling approach</li>\n<li>Some way to talk to APIs (often GraphQL or fetch calls)</li>\n</ol>\n<p>Those 4 choices in some ways dictate the rest of the libraries you\'re going to use. Redux likes one way of handling forms, MobX another, for example. The styling library you choose, defines which helper libraries you can use, different data layers have different tooling etc.</p>\n<p>We\'ll talk more about styling when we build our first component, routing when we build our first app, and state management next week.</p>\n<h2 id="debuggingtesting"><a href="#debuggingtesting" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Debugging/Testing</h2>\n<p>One of the benefits of building webapps the React way is that they are easier to work with. That means testing and debugging.</p>\n<p>You should install the <a href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en">React DevTools Chrome extension</a>. It allows you to inspect React components on the page, see their current state and props, observe redraws etc.</p>\n<p>Because React components rely only on their props and render in a virtual DOM, it\'s easy to write good test. Facebook has created a test runner called Jest designed specifically for testing React components.</p>\n<p>Here\'s an example test that <code>create-react-app</code> creates for us</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">import</span> App <span class="token keyword">from</span> <span class="token string">\'./App\'</span><span class="token punctuation">;</span>\n\n<span class="token function">it</span><span class="token punctuation">(</span><span class="token string">\'renders without crashing\'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> div <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">\'div\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  ReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>App</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> div<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div>\n<p>A lot of the time you don\'t even need to render into a DOM node. You can test drive a component on its own.</p>\n<p>We won\'t write tests in this workshop because I think we should focus on React itself.</p>\n<p>It\'s also a good idea to setup your text editor to support JSX syntax. Some are better at this than others, but I think most have at least <em>some</em> support by now.</p>\n<p>Oh and <code>create-react-app</code> comes with a bunch of creature comforts. You get automatic reloads when code changes, a linter watching your back, and beautiful error overlays when something goes wrong.</p>',
timeToRead:9,tableOfContents:'<ul>\n<li>\n<p><a href="#reacts-biggest-innovation">React\'s biggest innovation</a></p>\n<ul>\n<li><a href="#enter-react-stage-left">Enter React, stage left</a></li>\n</ul>\n</li>\n<li><a href="#components-are-the-future">Components are the future</a></li>\n<li><a href="#a-gentle-introduction-to-jsx">A gentle introduction to JSX</a></li>\n<li>\n<p><a href="#modern-build-tools">Modern build tools</a></p>\n<ul>\n<li><a href="#start-with-create-react-app">Start with create-react-app</a></li>\n<li><a href="#webpack">Webpack</a></li>\n<li><a href="#babel">Babel</a></li>\n</ul>\n</li>\n<li>\n<p><a href="#react-ecosystem">React ecosystem</a></p>\n<ul>\n<li><a href="#some-common-dependencies">Some common dependencies</a></li>\n<li><a href="#debuggingtesting">Debugging/Testing</a></li>\n</ul>\n</li>\n</ul>',frontmatter:{title:"Lay of the React Land"}}},pathContext:{slug:"/1-lay-of-the-land/"}}}});
//# sourceMappingURL=path---1-lay-of-the-land-631823dfa3e13b9b02ab.js.map