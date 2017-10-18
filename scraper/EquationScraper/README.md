
<html>
<head>
</head>
<body>

<p>
Equation scraper identifies math LaTex on
Wikipedia articles by searching image tags
for the unique set of classes associated
with SVG rendered latex:
</p>

<ul>
<li>[class]=</li>
<ul>
<li>img.mwe-math-fallback-image-inline</li>
<li>img.mwe-math-fallback-image-display</li>
<li>img.mwe-math-mathml-a11y</li>
</ul>
</ul>

<p>
Only LaTex relationships are scraped i.e.
expressions that contains a left-hand side
and right-hand side related by some
operator: =, <, >, <=. -->, <-->, and so on
</p>
<br/>
<p>
Scraped relationships are stored as nodes
within a graph database. If Calculus article
contains equation A and Calculus article links
to Algebra article which in turn contains
equation B then following directed path
is created:
</p>

<br/>

<div style="text-align:center">
{Equation A} LINKS_TO {Equation B}
</div>
<br/>

<p>
Every equation within calculus article will
form an undirected connected subgraph with
paths of the form:
</p>
<br/>
<div style="text-align:center">
{Equation A<sub>i</sub>} SAME_PAGE_AS
{Equation A<sub>j</sub>}
</div>
<br/>


</body>
</html>
