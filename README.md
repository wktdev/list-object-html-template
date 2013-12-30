list-object-html-template


This code is vulnerable to cross site scripting attacks and was done for educational purposes only. Do not use it.
=========================

	<ul id="list-TEMPLATE"></ul>     <!-- add     -TEMPLATE    to your id's -->

<script>



	obj = {
		Rich:"Clojour",
		Rasmus:"PHP",
		Brendon:"Javascript",
	};

	var list  = template(obj,"list","both"); 
	list;


The first parameter of list is an object or string. The next parmeter is the ID of the HTML element (no need to include -TEMPLATE in the Javascript but you do need to include it in the element. The last parameter is only relevent if the first parmeter is an object otherwise it is ignored. The last parameter allows you to specify output for "key", "val" or "both". 


The end result is a bullet list of your items. You can remove the bullets via regular CSS if you like

