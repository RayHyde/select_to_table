<h1>SelectToTable</h1>
<h2>A jQuery plugin that turns select options into table cells</h2>
<p>This jQuery plugin takes the information from a select box and turns it into a look-alike selectbox, but its dropdown contains a table, allowing you to arrange the contents nicely.</p>
<p>The original is hidden, but it still remains active and is changed when the faux selectbox is used.</p>
<p>Any content in the options that is divide by a symbol or string of symbols can turned into a table.</p>
<p>The fake select box comes with a transparent clickable background the covers the entire window and which catches clicks beside the box in order to close it.</p>

<h2>How to use this plugin</h2>
<h3>1. Link the files you need</h3>
<p>Include the jQuery script at the bottom of your page, e.g. through a CDN:</p>
<p><code>	&lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;</code></p>
<p>Then include the minimized version of the script:</p>
<p><code>&lt;script src="[path to your script]/jquery.select_to_table.min.js"&gt;&lt;/script&gt;</code></p>
<p>Change [path to your script] to where it resides, eg "js".</p>
<h3>2. Create your HTML table markup</h3>
<p>This is very simple: create a table:</p>

<pre>

&lt;select id="select-1"&gt;
		&lt;option selected="selected" value="1"&gt;06-09-2017 • Q4 2017 • SELL • 13 MWh&lt;/option&gt;
		&lt;option value="2"&gt;06-09-2017 • Q4 2017 • BUY • 1.251 MWh&lt;/option&gt;
		&lt;option value="3"&gt;06-09-2017 • Q4 2017 • BUY • 0 MWh&lt;/option&gt;
	&lt;/select&gt;
</pre>

<h3>3. Call the plugin</h3>
<p>Then initialize the plugin, telling it in which select box it needs to affect:</p>
<pre>
&lt;script&gt;
	$(&lt;name of the select here, e.g. "#mySelect"&gt;).selectToTable();
&lt;/script&gt;
</pre>
<p>You can run the plugin on multiple select boxes:</p>
<pre>
&lt;script&gt;
	$('.select_to_table').selectToTable();
&lt;/script&gt
</pre>
<h3>4. The CSS</h3>

<p>The zebra striping is simply done by giving each second row and each second column an RGBA colour with an opacity. Where they overlap, the opacity is doubled or even trebled, thus making them darker and creating the plaid effect: </p>
<pre>
tr:nth-child(even),
td:nth-child(even) {
	background: rgba(172, 242, 172, 0.4);
}
</pre>
<p>Load the css file "hide_cols.css" into the &lt;HEAD&gt; section of your page:</p>
<code>
	&lt;link rel="stylesheet" href="[path to your css file]/hide_cols.css"&gt;
</code>
<p>Change [path to your css file] to where it resides, eg "css/".</p>



<h2>My Playground</h2>

<p>This project is part of my Playground - a collection of fun (and dare I say it: clever) stuff I made in the past, from jQuery games and plugins to CSS animation tricks.</p>

<p>Please drop in on my portfolio site <a href="http://www.rayhyde.nl">www.rayhyde.nl</a>!</p>
