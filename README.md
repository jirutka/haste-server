# Haste

Haste is an open-source pastebin software written in node.js, which is easily
installable in any network. It can be backed by either redis or filesystem,
and has a very easy adapter interface for other stores. A publicly available
version can be found at [hastebin.com](http://hastebin.com).

Major design objectives:

* Be really pretty.
* Be really simple.
* Be easy to set up and use.


## Using from a terminal

Haste can be used very well even from terminal. There are many Haste clients
written in various languages:

*  [seejohnrun/haste-client](https://github.com/seejohnrun/haste-client) (Ruby)
*  [jirutka/haste-client](https://github.com/jirutka/haste-client) (Python)
*  [ajryan/winhaste](https://github.com/ajryan/WinHaste) (C#)
*  [flores/hastebin.sh](https://gist.github.com/flores/3670953) (Bash)


## Installation

1. Download the package, and expand it.
2. Explore the settings inside of `config.js`, but the defaults should be good.
3. `npm install`
4. `npm start`


## Settings

*  **host** ... the host the server runs on (default: localhost).
*  **port** ... the port the server runs on (default: 7777).
*  **keyLength** ... the length of the keys to use (default: 10).
*  **maxLength** ... maximum length of a paste in bytes (default: 400000).
*  **staticMaxAge** ... maximum age for static assets in seconds (default: 86400).
*  **recompressStatisAssets** ... whether to compile static JS assets (default: true).
*  **documents** ... static documents to serve (ex: http://hastebin.com/about.com)
                    in addition to static assets. These will never expire.
*  **storage** ... storage options (see below).
*  **logging** ... logging preferences.
*  **keyGenerator** ... key generator options (see below).

### Key Generation

#### Phonetic

Attempts to generate phonetic keys, similar to `pwgen`.

```json
{
  "type": "phonetic"
}
```

#### Random

Generates a random key.

```json
{
  "type": "random",
  "keyspace": "abcdef"
}
```

The _optional_ keySpace argument is a string of acceptable characters
for the key.

### Storage

#### File

To use file storage (the default) change the storage section in `config.js` to
something like:

```json
{
  "type": "file",
  "path": "./data"
}
```

Where `path` represents where you want the files stored.

#### Redis

To use redis storage you must install the `redis` package from npm:

    npm install redis

Once you’ve done that, change `storage` to something like:

```json
{
  "type": "redis",
  "host": "localhost",
  "port": 6379,
  "db": 2
}
```

You can also set an `expire` option to the number of seconds to expire keys in.
This is off by default, but will constantly kick back expirations on each view
or post.

All of which are optional except `type` with very logical default values.

#### Postgres

To use postgres storage you must install the `pg` package from npm:

    npm install pg

Once you’ve done that, change `storage` to something like:

```json
{
  "type": "postgres",
  "connectionUrl": "postgres://user:password@host:5432/database"
}
```

You can also just set the environment variable for `DATABASE_URL` to your database connection url.

You will have to manually add a table to your postgres database:

```sql
create table entries (
  id serial primary key,
  key varchar(255) not null,
  value text not null,
  expiration int,
  unique(key)
);
```

You can also set an `expire` option to the number of seconds to expire keys in.
This is off by default, but will constantly kick back expirations on each view
or post.

All of which are optional except `type` with very logical default values.

#### Memcached

To use memcached storage you must install the `memcache` package from npm:

    npm install memcache

Once you’ve done that, change `storage` to something like:

``` json
{
  "type": "memcached",
  "host": "127.0.0.1",
  "port": 11211
}
```

You can also set an `expire` option to the number of seconds to expire keys in.
This behaves just like the redis expirations, but does not push expirations
forward on GETs.

All of which are optional except `type` with very logical default values.


## Authors

* John Crepezzi <john.crepezzi@gmail.com> (the original author)
* Jakub Jirutka <jakub@jirutka.cz> (author of this fork)


## License

This project is licensed under [MIT License](http://opensource.org/licenses/MIT/).
For the full text of the license, see the [LICENSE](LICENSE) file.

### Other components:

* jQuery: MIT/GPL license
* highlight.js: Copyright © 2006, Ivan Sagalaev
* highlightjs-coffeescript: WTFPL - Copyright © 2011, Dmytrii Nagirniak
