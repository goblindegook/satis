# Satis - Package Repository Generator

Static Composer repository.

It uses any composer.json file as input and dumps all the required (according
to their version constraints) packages to a Composer Repository file.

## Usage

* Install dependencies: `npm install`
* Build the repository: `gulp [build]`
* Deploy the repository: `gulp deploy`

Find out more about Satis in the 
[documentation](http://getcomposer.org/doc/articles/handling-private-packages-with-satis.md).

## Updating

Updating is as simple as running `composer update` in the satis directory.
