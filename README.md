Satis - Package Repository Generator
====================================

Static Composer repository.

It uses any composer.json file as input and dumps all the required (according
to their version constraints) packages to a Composer Repository file.

Usage
-----

- Install satis: `php composer.phar install`
- Build a repository: `php vendor/bin/satis build satis.json dist`

Read the more detailed instructions in the 
[documentation](http://getcomposer.org/doc/articles/handling-private-packages-with-satis.md).

Updating
--------

Updating is as simple as running `php composer.phar update` in the satis directory.