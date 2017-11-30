webpackJsonp([0xeb1214dd206c],{337:function(n,a){n.exports={data:{markdownRemark:{html:'<p>Now we\'re building an app. A simple app without <em>proper</em> state management, but an app non-the-less.</p>\n<p>It\'s Morty\'s Mindblowers 🤓</p>\n<p><a href="http://mortysmindblowers.fun"><img src="/83ade7f706e30abc7d6bdf762c76423b.gif"></a></p>\n<p>Here\'s the plan:</p>\n<ul>\n<li>fetch gifs from Imgur</li>\n<li>keep track in top-level state</li>\n<li>allow skipping with a click</li>\n<li>show Rick quotes as titles</li>\n<li>use error boundaries to recover from API errors</li>\n</ul>\n<p>If you\'re reading this later, you can watch me build this <a href="https://www.youtube.com/watch?v=a4g81widnGM">from scratch on Youtube</a>. I recorded the whole session.</p>\n<p>If you\'re here in person, I\'m building it with you :)</p>\n<h1 id="what-goes-in-which-component"><a href="#what-goes-in-which-component" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>What goes in which component</h1>\n<p>So, how do you decide what should be a component and what shouldn\'t? When do you break a file into two? How do you structure your code?</p>\n<p>The answers are subjective and often boil down to <em>"It felt right"</em>. I can explain this better by drawing pictures and waving my arms.</p>\n<p>Ultimately it boils down to this 👇</p>\n<blockquote>\n<p>If you have to use "and" to describe what your component is for, you should split it up</p>\n</blockquote>\n<h3 id="practical-exercise"><a href="#practical-exercise" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Practical exercise</h3>\n<p>Let\'s build the basic structure for our Morty\'s Mindblowers app. </p>\n<h2 id="unidirectional-flow--props--events-"><a href="#unidirectional-flow--props--events-" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Unidirectional flow – props 👇 events 👆</h2>\n<p>Remember that picture from the last section?</p>\n<p>\n  <a\n    class="gatsby-resp-image-link"\n    href="/intro-to-react-workshop/static/unidirectional-f83af28dbd4b915220104b0858cf9bc4-4ba34.png"\n    style="display: block"\n    target="_blank"\n    rel="noopener"\n  >\n  \n  <span\n    class="gatsby-resp-image-wrapper"\n    style="position: relative; display: block; ; max-width: 960px; margin-left: auto; margin-right: auto;"\n  >\n    <span\n      class="gatsby-resp-image-background-image"\n      style="padding-bottom: 67.65625%; position: relative; bottom: 0; left: 0; background-image: url(\'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB/ElEQVQ4y53T7UtTURwHcP+m3hXYm+p173oVPiA9EEm9CRNdpYsKt4k5iwwp0BAc9KJGiy2lZGNZeN0K1DYxvTp3cel1c7t39+Gc8+3cIzhka9MOfOFy7rmfc+79/W4TGgxqGDDSaeg/krBVtdFyNNW76QB/nj+D3N4Kua0FWVcPNEn6fzAffI/Nmzcgd7Rj40oH1lsuI+cfBrPtk4GEMuQZoExMInOrk5+sF4q7X+CKZwC6WoBJjwnahMGyGbgHPZlA9p5LvK445fWr2AtMHW5qEdYYdDDKKgvLS4vYeTmKbZ8XxS+fQU3zoFgcNC2+MWP1QdMBKWtYTQdy1uY1Whvc0lT4UxF0LQQQ2kqiaJX/iRFCkVkrIDSVxodAGusre0fBvKnhUtSPM+E+kVOhXoz/jkKzjZrg6vIuhlxx+O7G4OUZ6Z8Tc4dgMLOAc9OPBdoaH0VzxI1r314hVVCqMK1kYTa0JqDxpwm8HpQw0jeH4OSvCjijLOLCzBOc57k4O4jT4Qe4Pf8Gq8XtKtAo24hPyxi4E8WLR99Fhu9/RfjtSgWkjArg7Ce3wJojD/Ex81O0Rq2R3djHmFeCpysKX3cMY5557Ob0o0UhHI3lUni3KUEu7UAtEZTNatDpU4NXt1S0sJzIYYlH55/hWL+e6DX+sGEdxLkmpH5L/QVd0wPYUDaytQAAAABJRU5ErkJggg==\'); background-size: cover; display: block;"\n    >\n      <img\n        class="gatsby-resp-image-image"\n        style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;"\n        alt="unidirectional"\n        title=""\n        src="/intro-to-react-workshop/static/unidirectional-f83af28dbd4b915220104b0858cf9bc4-f2ed7.png"\n        srcset="/intro-to-react-workshop/static/unidirectional-f83af28dbd4b915220104b0858cf9bc4-c09c9.png 240w,\n/intro-to-react-workshop/static/unidirectional-f83af28dbd4b915220104b0858cf9bc4-1f569.png 480w,\n/intro-to-react-workshop/static/unidirectional-f83af28dbd4b915220104b0858cf9bc4-f2ed7.png 960w,\n/intro-to-react-workshop/static/unidirectional-f83af28dbd4b915220104b0858cf9bc4-4ba34.png 1280w"\n        sizes="(max-width: 960px) 100vw, 960px"\n      />\n    </span>\n  </span>\n  \n  </a>\n    </p>\n<p>That\'s actually a Vue picture. The unidirectional data flow that React popularized was such a great idea that everyone wants to use it now.</p>\n<p>At its core the idea is that you can always know what\'s going on with your app. You have one source of state, you have a set of actions that change it, and your UI reacts to those changes.</p>\n<p>I like to think of it as a state machine.</p>\n<p><code>&#x3C;insert arm waving explanation></code></p>\n<h3 id="practical-exercise-1"><a href="#practical-exercise-1" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Practical exercise</h3>\n<p>Let\'s 👇</p>\n<ul>\n<li>talk to Imgur to get a list of gifs</li>\n<li>listen for <code>click</code> events to advance</li>\n<li>listen for video <code>ended</code> events to do the same</li>\n<li>fetch new gifs before we run out</li>\n</ul>\n<h2 id="generalized-components"><a href="#generalized-components" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Generalized components</h2>\n<p>HOCs – higher order components – and Render callbacks.</p>\n<p>Here is an example of a HOC</p>\n<p><a href="https://codepen.io/swizec/pen/woNjVw">CodePen link</a></p>\n<p>This particular HOC wraps non-React code in a React component. You can use this approach for all sorts of things where you need to embrace and extend a component.</p>\n<p>Although I find that plain old <code>extend</code> works just as well in many cases. </p>\n<p>Another approach to building generalized components is the render callback pattern. Famously used by Kent C. Dodds\' <a href="https://codepen.io/swizec/pen/woNjVw">downshift</a> library.</p>\n<p>The idea there is to have a component that deals with logic and instrumentation, but defers rendering to others. Some prefer explicitly calling functions, others just render the children prop.</p>\n<p>React Router does this also.</p>\n<h1 id="routing"><a href="#routing" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Routing</h1>\n<p>Here\'s a fun true fact: I have read about React Router, but haven\'t used it before. In my React Native projects, I used a project that\'s similar but not the same. At the day job, I used a homegrown solution based on <a href="https://hackernoon.com/how-to-decouple-state-and-ui-a-k-a-you-dont-need-componentwillmount-cc90b787aa37">M Westsrate\'s recommendation</a>.</p>\n<p>BUT! React Router is specifically designed to be simple. You declare your routes like this 👇</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">const</span> routes <span class="token operator">=</span> <span class="token punctuation">(</span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>/<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>App<span class="token punctuation">}</span></span><span class="token punctuation">&gt;</span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>IndexRoute</span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>Home<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n\t\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Route</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>/stuff<span class="token punctuation">&quot;</span></span> <span class="token attr-name">component</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>stuff<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n\t<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Route</span><span class="token punctuation">&gt;</span></span>\n<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Router</span> <span class="token attr-name">routes</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>routes<span class="token punctuation">}</span></span> <span class="token attr-name">history</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>browserHistory<span class="token punctuation">}</span></span> <span class="token punctuation">/&gt;</span></span>\n</code></pre>\n      </div>\n<p>Your URL structure then follows the structure of these routes. ReactRouter swaps around what it\'s rendering based on the route.</p>\n<p>And you use <code>&#x3C;Link></code> to link between pages.</p>\n<p>This workshop page is built using <a href="https://www.gatsbyjs.org/">GatsbyJS</a> and uses ReactRouter behind the scenes.</p>\n<h1 id="server-side-rendering"><a href="#server-side-rendering" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Server-side rendering</h1>\n<p>Copy approach from <a href="https://swizec.com/blog/server-side-rendering-d3-chart-react-16/swizec/7824">Swizec\'s blogpost</a> and explore it together.</p>\n<p>Server side rendering is a popular buzzword, but it probably doesn\'t matter as much as you think it does. Yes it can make your webapp feel snappier in some cases, and it has a marginal effect on SEO, but it\'s often more trouble than it\'s worth.</p>\n<p>I suggest using it when setting up the initial render takes a long time.</p>\n<h1 id="interop-with-backbone-jquery-and-friends"><a href="#interop-with-backbone-jquery-and-friends" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Interop with Backbone, jQuery, and Friends</h1>\n<p>React becomes truly spectacular once you realize that a React component is just a function that returns some HTML. That realization opens you up to fun things.</p>\n<p>You can <a href="https://swizec.com/blog/using-react-in-the-real-world/swizec/6710">wrap React components in jQuery plugins</a>. Albeit the example is old and needs updating to modern React, but the gist of it still works.</p>\n<p>And you can <a href="https://github.com/Swizec/react-backbone-proof-of-concept">interop with Backbone</a> really well. At the day job I even built a HOC for it, but I never got around to opensourcing.</p>\n<p>Looks like this 👇</p>\n<div class="gatsby-highlight">\n      <pre class="language-jsx"><code><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">backbone</span><span class="token punctuation">(</span>BackboneView<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token keyword">function</span><span class="token punctuation">(</span>WrappedComponent<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> <span class="token keyword">class</span> <span class="token class-name">Backbone</span> <span class="token keyword">extends</span> <span class="token class-name">WrappedComponent</span> <span class="token punctuation">{</span>\n            <span class="token function">constructor</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">super</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n                <span class="token keyword">this</span><span class="token punctuation">.</span>killAutorun <span class="token operator">=</span> <span class="token function">autorun</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>_render<span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token function">componentDidUpdate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span>\n            <span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">super</span><span class="token punctuation">.</span>componentDidMount<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">super</span><span class="token punctuation">.</span><span class="token function">componentDidMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n            <span class="token function">componentWillUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_cleanup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">killAutorun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token function">_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span>backbone <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BackboneView</span><span class="token punctuation">(</span>Object<span class="token punctuation">.</span><span class="token function">assign</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n                                                               <span class="token keyword">this</span><span class="token punctuation">.</span>props<span class="token punctuation">,</span>\n                                                               <span class="token keyword">this</span><span class="token punctuation">.</span>backboneProps<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token function">_render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_cleanup</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span>_<span class="token punctuation">.</span><span class="token function">isUndefined</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>renderIf<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>renderIf<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                    <span class="token keyword">this</span><span class="token punctuation">.</span>backbone<span class="token punctuation">.</span><span class="token function">setElement</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>refs<span class="token punctuation">.</span>anchor<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token function">_cleanup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>backbone<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                    <span class="token keyword">this</span><span class="token punctuation">.</span>backbone<span class="token punctuation">.</span><span class="token function">undelegateEvents</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n                <span class="token punctuation">}</span>\n            <span class="token punctuation">}</span>\n\n            <span class="token keyword">get</span> <span class="token function">anchor</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n                <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">&quot;</span>anchor<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span><span class="token punctuation">)</span>\n            <span class="token punctuation">}</span>\n        <span class="token punctuation">}</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>Generally speaking, you can either use React as the renderer and wrap it in other stuff. Or you can use React as the component and wrap it around your other stuff.</p>\n<p>Depends on the approach you prefer. Each has different drawbacks.</p>',timeToRead:5,tableOfContents:'<ul>\n<li>\n<p><a href="/intro-to-react-workshop/3-your-first-app/#what-goes-in-which-component">What goes in which component</a></p>\n<ul>\n<li>\n<ul>\n<li><a href="/intro-to-react-workshop/3-your-first-app/#practical-exercise">Practical exercise</a></li>\n</ul>\n</li>\n<li>\n<p><a href="/intro-to-react-workshop/3-your-first-app/#unidirectional-flow--props--events-">Unidirectional flow – props 👇 events 👆</a></p>\n<ul>\n<li><a href="/intro-to-react-workshop/3-your-first-app/#practical-exercise-1">Practical exercise</a></li>\n</ul>\n</li>\n<li><a href="/intro-to-react-workshop/3-your-first-app/#generalized-components">Generalized components</a></li>\n</ul>\n</li>\n<li><a href="/intro-to-react-workshop/3-your-first-app/#routing">Routing</a></li>\n<li><a href="/intro-to-react-workshop/3-your-first-app/#server-side-rendering">Server-side rendering</a></li>\n<li><a href="/intro-to-react-workshop/3-your-first-app/#interop-with-backbone-jquery-and-friends">Interop with Backbone, jQuery, and Friends</a></li>\n</ul>',frontmatter:{title:"Your First App"}}},pathContext:{slug:"/3-your-first-app/",_PARENT:"SOURCE"}}}});
//# sourceMappingURL=path---3-your-first-app-5b5f32512e5a1360d085.js.map