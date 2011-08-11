test:
	expresso test/*.tests.js

checkamd:
	cat lib/check.js | sed 's/var check = exports;/define(function() {\nvar check = {};/' > check.js && echo "};" >> check.js

clean:
	rm -rf docs

docs:
	mkdir docs && dox -p --title "Daimyo API documentation" -i GETTING_STARTED lib/config.js lib/daimyo.js lib/check.js lib/xmlutils.js lib/authpost.js lib/messages.js lib/error.js > docs/daimyo.html

.PHONY: test
