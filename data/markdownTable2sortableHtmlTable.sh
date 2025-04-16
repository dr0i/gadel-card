pandoc -s spells.md -o spells_tmp.html
cat spells_tmp.html |
	sed  's#max-width: 36em#max-width: 1280px#g' |
	sed 's#^<.*col.*>##g'|
	sed  's#/title>#/title><script src="sortable-table.js"></script><link rel="stylesheet" href="sortTable.css">#g'|
	sed 's#<th>kategorie</th>#<th><button>kategorie<span aria-hidden="true"></span></button></th>#g'|
	sed 's#<th>ingredienz</th>#<th><button>ingredienz<span aria-hidden="true"></span></button></th>#g'|
	sed 's#<th>spruch</th>#<th><button>spruch<span aria-hidden="true"></span></button></th>#g'|
	sed 's#<table>#<div class="table-wrap"><table class="sortable" id="myTable">#g' > spells.html
 # xmllint --format spells.html  > spells_schoen.html
