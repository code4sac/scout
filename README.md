Data Sources
------------
Post data sources to https://docs.google.com/document/d/1VUgWGgmdIxcnESDtNNVzvbUuAvGlowoyTJyG-Rmx2jk/edit#
Installation guide (Mac OSX)
---------------------------
**Install Brew package manager**

    ruby -e "$(curl -fsSL https://raw.github.com/Homebrew/homebrew/go/install)"

First make sure you have MongoDB, Node, Npm, Bower and Grunt installed.<br>
**Install mongoDB with:**

    $ brew install mongodb 

Or visit http://www.mongodb.org/
###Visit http://nodejs.org to install node and NPM
**Install phantomJS with**

    $ brew install phantomjs

Or visit http://phantomjs.org/
<br>
**To install Bower and Grunt run:**

    $ npm install -g grunt-cli bower
Or visit http://gruntjs.com / http://bower.io
####Install Server dependencies
    npm install
####Install front-end dependencies
    bower install
####Start MongoDB
    mongod
####Start server
    grunt
