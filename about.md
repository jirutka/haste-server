Haste
=====

Sharing code is a good thing, and it should be _really_ easy to do it.
A lot of times, I want to show you something I’m seeing -- and that’s where we
use pastebins.

Haste is the prettiest, easiest to use pastebin ever made.


Basic Usage
-----------

Type or copy & paste what you want me to see, click “Save”, and then copy
the URL. Send that URL to someone and they’ll see what you see.

Haste tries to guess the code syntax and highlight it for you. If it detects
the syntax incorrectly, then just rewrite a file extension in the URL that
specifies the syntax. For example:

    http://hastebin.com/foobar.java -> http://hastebin.com/foobar.js


Shortcuts
---------

*  New paste:        Ctrl + N / Cmd + N
*  Save paste:       Ctrl + S / Cmd + S
*  Duplicate & Edit: Ctrl + E / Cmd + E
*  Just text (raw):  Ctrl + D / Cmd + D


From the Console
----------------

Most of the time I want to show you some text, it’s coming from my current
console session. We should make it really easy to take code from the console
and send it to people.

`cat something | haste`  # http://hastebin.com/1238193

You can even take this a step further, and cut out the last step of copying the
URL with:

*  OS X: `cat something | haste | pbcopy`
*  Linux: `cat something | haste | xsel`
*  Windows: check out [WinHaste](https://github.com/ajryan/WinHaste)

After running that, the STDOUT output of `cat something` will show up at a URL
which has been conveniently copied to your clipboard.

There are many Haste clients written in various languages, just pick
your favourite:

*  <https://github.com/seejohnrun/haste-client> (Ruby)
*  <https://github.com/jirutka/haste-client> (Python)
*  <https://github.com/ajryan/WinHaste> (C#)
*  <https://gist.github.com/flores/3670953> (Bash)


Duration
--------

Pastes will stay here forever, but don’t count on it. They may be removed
some day and without notice!


Privacy
-------

While the contents of hastebin.com are not directly crawled by any search robot
that obeys “robots.txt”, there should be no great expectation of privacy. Post
things at your own risk. Not responsible for any loss of data or removed
pastes.


Open Source
-----------

Haste can easily be installed behind your network, and it’s all open source!

<https://github.com/jirutka/haste-server>


Authors
-------

Code by John Crepezzi <john.crepezzi@gmail.com> and Jakub Jirutka <jakub@jirutka.cz>.
Key Design by Brian Dawson <bridawson@gmail.com>.
