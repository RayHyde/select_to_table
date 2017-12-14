<h1>A jQuery plugin that hides and shows table columns</h1>
<h3>Bonus: a nifty CSS table striping</h3>

<p>This jQuery plugin adds a "hide" button to each column of a normal table, that hides the column when clicked. A button appears beneath the table for each hidden column allowing you to restore it, plus an "unhide all" button.</p>
<p>The zebra striping is done with just one CSS entry, layering the opacity of each second row and column.</p>

<p>See it in action: <a href="http://rayhyde.github.io/hide_columns/">http://rayhyde.github.io/hide_columns/</a></p>

<h2>How to use this plugin</h2>
<h3>1. Link the files you need</h3>
<p>Include the jQuery script at the bottom of your page, e.g. through a CDN:</p>
<p><code>	&lt;script src="//code.jquery.com/jquery-2.1.3.min.js"&gt;&lt;/script&gt;</code></p>
<p>Then include the minimized version of the script:</p>
<p><code>&lt;script src="[path to your script]/jquery.hide_cols.min.js"&gt;&lt;/script&gt;</code></p>
<p>Change [path to your script] to where it resides, eg "js".</p>
<h3>2. Create your HTML table markup</h3>
<p>This is very simple: create a table:</p>
						
<pre>

&lt;table id="myTable"&gt;
  &lt;tr&gt;
    &lt;th&gt;Column 1&lt;/th&gt;
    &lt;th&gt;Column 2&lt;/th&gt;
    &lt;th&gt;Column 3&lt;/th&gt;
    &lt;th&gt;Column 4&lt;/th&gt;
    &lt;th&gt;Column 5&lt;/th&gt;
    &lt;th&gt;Column 6&lt;/th&gt;
  &lt;/tr&gt;
  &lt;tr&gt;
    &lt;td&gt;First Row 1&lt;/td&gt;
    &lt;td&gt;First Row 1&lt;/td&gt;
		
    etc.
</pre>
				
<h3>3. Call the plugin</h3>
<p>Then initialize the plugin, telling it in which table it needs to affect:</p>
<pre>
&lt;script&gt;
  $(&lt;name of the table here, e.g. "#myTable"&gt;).hideCols();
&lt;/script&gt;
</pre>
<p>You can run the plugin on multiple tables:</p>
<pre>
&lt;script&gt;
  $('#myTable, #myTable2, #myTable3').hideCols();
&lt;/script&gt
</pre>
					
<p>You can change the text in the buttons via the settings:</p>
<pre>
&lt;script&gt;
  $(&lt;name of the table here, e.g. "#myTable"&gt;).hideCols({
    hideColumn: '&amp;times;', // this creates the &times; character
    unhideColumn: 'Unhide Column',
    unhideAll: 'Unhide All Columns'
  });
&lt;/script&gt;
</pre>
<p>The buttons to unhide the columns are sorted automatically. To turn this off and add a sort button, set the autoSort to "false":</p>
<pre>
&lt;script&gt;
  $(&lt;name of the table here, e.g. "#myTable"&gt;).hideCols({
    autoSort: false
  });
&lt;/script&gt;
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
	<p><a class="btn btn-lg btn-success" href="https://github.com/RayHyde/hide_columns">Download from Github</a></p>

<p>See it in action: <a href="http://rayhyde.github.io/hide_columns/">http://rayhyde.github.io/hide_columns/</a></p>

<h2>My Playground</h2>

<p>This project is part of my Playground - a collection of fun (and dare I say it: clever) stuff I made in the past, from jQuery games and plugins to CSS animation tricks.</p>

<p>Please drop in on my portfolio site <a href="http://www.rayhyde.nl">www.rayhyde.nl</a>!</p>