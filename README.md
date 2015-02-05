# Kanshu

<a href="https://assembly.com/kanshu/bounties?utm_campaign=assemblage&utm_source=kanshu&utm_medium=repo_badge"><img src="https://asm-badger.herokuapp.com/kanshu/badges/tasks.svg" height="24px" alt="Open Tasks" /></a>

## Reading Chinese should be this easy.

This is a product being built by the Assembly community. You can help push this idea forward by visiting [https://assembly.com/kanshu](https://assembly.com/kanshu).

### How Assembly Works

Assembly products are like open-source and made with contributions from the community. Assembly handles the boring stuff like hosting, support, financing, legal, etc. Once the product launches we collect the revenue and split the profits amongst the contributors.

Visit [https://assembly.com](https://assembly.com) to learn more.

## Getting Started

Kanshu-web is an [AngularJS](https://angularjs.org/) web application, using [npm](https://www.npmjs.com/) and [Bower](http://bower.io/) to manage packages and [Grunt](http://gruntjs.com/) for automation.

[Compass](http://compass-style.org/) and [Sass](http://sass-lang.com/) are used to simplify CSS maintenance. 

### Install Tools and Dependencies

First, make sure you have node and npm installed.

Next, install the toolset globally: 
```sh
npm install --global bower grunt-cli
```

Then, install Sass and Compass:
```sh
gem update --system
gem install sass
gem install compass 
```

Note: If you're on MacOSX and you see the error "You have to install development tools first", then do that with:
```sh
xcode-select --install 
```

Finally, clone the repo, and install project dependencies from the root folder.
```sh
npm install 
bower install
```

### Build and Development

Run `grunt` for building and `grunt serve` for preview.

### Testing

Running `grunt test` will run the unit tests with karma.

## Scaffolding

This project was generated with [yo angular generator](https://github.com/yeoman/generator-angular)
version 0.11.0.
