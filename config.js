{

  "host": "0.0.0.0",
  "port": 7777,

  "keyLength": 10,

  "maxLength": 400000,

  "staticCache": {
    "content": {
      "max": 2097152,
      "maxAge": 86400,
      "cacheControl": "public, max-age=86400"
    }
  },

  "recompressStaticAssets": true,

  "logging": [
    {
      "level": "verbose",
      "type": "Console",
      "colorize": true
    }
  ],

  "keyGenerator": {
    "type": "phonetic"
  },

  "storage": {
    "type": "file",
    "path": "./data"
  },

  "documents": {
    "about": "./about.md"
  }

}
