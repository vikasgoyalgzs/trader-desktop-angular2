System.config({
    "baseURL": "/trader-desktop-angular2/",
    "transpiler": "traceur",
    "paths": {
        "*": "*.js",
        "github:*": "jspm_packages/github/*.js",
        "npm:*": "jspm_packages/npm/*.js",
        "rx": "jspm_packages/npm/rx@2.5.1/dist/rx.js",
        "process": "jspm_packages/npm/process@0.10.1.js"
    }
});

System.config({
    "map": {
        "angular2": "npm:angular2@2.0.0-alpha.28",
        "gulp": "npm:gulp@3.9.0",
        "gulp-compass": "npm:gulp-compass@2.1.0",
        "process": "npm:process@0.11.1",
        "reflect-metadata": "npm:reflect-metadata@0.1.0",
        "traceur": "github:jmcriffey/bower-traceur@0.0.88",
        "traceur-runtime": "github:jmcriffey/bower-traceur-runtime@0.0.88",
        "zone.js": "npm:zone.js@0.5.1",
        "github:jspm/nodelibs-assert@0.1.0": {
            "assert": "npm:assert@1.3.0"
        },
        "github:jspm/nodelibs-buffer@0.1.0": {
            "buffer": "npm:buffer@3.3.0"
        },
        "github:jspm/nodelibs-constants@0.1.0": {
            "constants-browserify": "npm:constants-browserify@0.0.1"
        },
        "github:jspm/nodelibs-crypto@0.1.0": {
            "crypto-browserify": "npm:crypto-browserify@3.9.14"
        },
        "github:jspm/nodelibs-events@0.1.1": {
            "events": "npm:events@1.0.2"
        },
        "github:jspm/nodelibs-http@1.7.1": {
            "Base64": "npm:Base64@0.2.1",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "url": "github:jspm/nodelibs-url@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "github:jspm/nodelibs-net@0.1.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "http": "github:jspm/nodelibs-http@1.7.1",
            "net": "github:jspm/nodelibs-net@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "timers": "github:jspm/nodelibs-timers@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "github:jspm/nodelibs-os@0.1.0": {
            "os-browserify": "npm:os-browserify@0.1.2"
        },
        "github:jspm/nodelibs-path@0.1.0": {
            "path-browserify": "npm:path-browserify@0.0.0"
        },
        "github:jspm/nodelibs-process@0.1.1": {
            "process": "npm:process@0.10.1"
        },
        "github:jspm/nodelibs-stream@0.1.0": {
            "stream-browserify": "npm:stream-browserify@1.0.0"
        },
        "github:jspm/nodelibs-timers@0.1.0": {
            "timers-browserify": "npm:timers-browserify@1.4.1"
        },
        "github:jspm/nodelibs-url@0.1.0": {
            "url": "npm:url@0.10.3"
        },
        "github:jspm/nodelibs-util@0.1.0": {
            "util": "npm:util@0.10.3"
        },
        "github:jspm/nodelibs-vm@0.1.0": {
            "vm-browserify": "npm:vm-browserify@0.0.4"
        },
        "npm:angular2@2.0.0-alpha.28": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "reflect-metadata": "npm:reflect-metadata@0.1.0",
            "rx": "npm:rx@2.5.1",
            "url": "github:jspm/nodelibs-url@0.1.0",
            "zone.js": "npm:zone.js@0.5.1"
        },
        "npm:asn1.js@2.1.1": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "bn.js": "npm:bn.js@2.2.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "inherits": "npm:inherits@2.0.1",
            "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
            "vm": "github:jspm/nodelibs-vm@0.1.0"
        },
        "npm:assert@1.3.0": {
            "util": "npm:util@0.10.3"
        },
        "npm:beeper@1.1.0": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:brace-expansion@1.1.0": {
            "balanced-match": "npm:balanced-match@0.2.0",
            "concat-map": "npm:concat-map@0.0.1"
        },
        "npm:browserify-aes@1.0.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.1",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inherits": "npm:inherits@2.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:browserify-rsa@2.0.1": {
            "bn.js": "npm:bn.js@2.2.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "constants": "github:jspm/nodelibs-constants@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "randombytes": "npm:randombytes@2.0.1"
        },
        "npm:browserify-sign@3.0.2": {
            "bn.js": "npm:bn.js@2.2.0",
            "browserify-rsa": "npm:browserify-rsa@2.0.1",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.1",
            "create-hmac": "npm:create-hmac@1.1.3",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "elliptic": "npm:elliptic@3.1.0",
            "inherits": "npm:inherits@2.0.1",
            "parse-asn1": "npm:parse-asn1@3.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:buffer@3.3.0": {
            "base64-js": "npm:base64-js@0.0.8",
            "ieee754": "npm:ieee754@1.1.6",
            "is-array": "npm:is-array@1.0.1"
        },
        "npm:camelcase-keys@1.0.0": {
            "camelcase": "npm:camelcase@1.1.0",
            "map-obj": "npm:map-obj@1.0.1"
        },
        "npm:chalk@1.1.0": {
            "ansi-styles": "npm:ansi-styles@2.1.0",
            "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
            "has-ansi": "npm:has-ansi@2.0.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "strip-ansi": "npm:strip-ansi@3.0.0",
            "supports-color": "npm:supports-color@2.0.0"
        },
        "npm:clone-stats@0.0.1": {
            "fs": "github:jspm/nodelibs-fs@0.1.2"
        },
        "npm:clone@0.1.19": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0",
            "vm": "github:jspm/nodelibs-vm@0.1.0"
        },
        "npm:clone@0.2.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0",
            "vm": "github:jspm/nodelibs-vm@0.1.0"
        },
        "npm:clone@1.0.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "vm": "github:jspm/nodelibs-vm@0.1.0"
        },
        "npm:constants-browserify@0.0.1": {
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:core-util-is@1.0.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:create-ecdh@2.0.1": {
            "bn.js": "npm:bn.js@2.2.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "elliptic": "npm:elliptic@3.1.0"
        },
        "npm:create-hash@1.1.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inherits": "npm:inherits@2.0.1",
            "ripemd160": "npm:ripemd160@1.0.1",
            "sha.js": "npm:sha.js@2.4.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:create-hmac@1.1.3": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.1",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "inherits": "npm:inherits@2.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:crypto-browserify@3.9.14": {
            "browserify-aes": "npm:browserify-aes@1.0.1",
            "browserify-sign": "npm:browserify-sign@3.0.2",
            "create-ecdh": "npm:create-ecdh@2.0.1",
            "create-hash": "npm:create-hash@1.1.1",
            "create-hmac": "npm:create-hmac@1.1.3",
            "diffie-hellman": "npm:diffie-hellman@3.0.2",
            "inherits": "npm:inherits@2.0.1",
            "pbkdf2": "npm:pbkdf2@3.0.4",
            "public-encrypt": "npm:public-encrypt@2.0.1",
            "randombytes": "npm:randombytes@2.0.1"
        },
        "npm:dateformat@1.0.11": {
            "get-stdin": "npm:get-stdin@4.0.1",
            "meow": "npm:meow@3.3.0"
        },
        "npm:defaults@1.0.2": {
            "clone": "npm:clone@0.1.19"
        },
        "npm:diffie-hellman@3.0.2": {
            "bn.js": "npm:bn.js@2.2.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "miller-rabin": "npm:miller-rabin@2.0.1",
            "randombytes": "npm:randombytes@2.0.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:duplexer2@0.0.2": {
            "readable-stream": "npm:readable-stream@1.1.13"
        },
        "npm:elliptic@3.1.0": {
            "bn.js": "npm:bn.js@2.2.0",
            "brorand": "npm:brorand@1.0.5",
            "hash.js": "npm:hash.js@1.0.3",
            "inherits": "npm:inherits@2.0.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:end-of-stream@0.1.5": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "net": "github:jspm/nodelibs-net@0.1.2",
            "once": "npm:once@1.3.2",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:findup-sync@0.2.1": {
            "glob": "npm:glob@4.3.5",
            "path": "github:jspm/nodelibs-path@0.1.0"
        },
        "npm:first-chunk-stream@1.0.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:flagged-respawn@0.3.1": {
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:gaze@0.5.1": {
            "events": "github:jspm/nodelibs-events@0.1.1",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "globule": "npm:globule@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "timers": "github:jspm/nodelibs-timers@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:get-stdin@4.0.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:glob-stream@3.1.18": {
            "glob": "npm:glob@4.3.5",
            "glob2base": "npm:glob2base@0.0.12",
            "minimatch": "npm:minimatch@2.0.8",
            "ordered-read-streams": "npm:ordered-read-streams@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "through2": "npm:through2@0.6.5",
            "unique-stream": "npm:unique-stream@1.0.0"
        },
        "npm:glob-watcher@0.0.6": {
            "events": "github:jspm/nodelibs-events@0.1.1",
            "gaze": "npm:gaze@0.5.1"
        },
        "npm:glob2base@0.0.12": {
            "find-index": "npm:find-index@0.1.1",
            "path": "github:jspm/nodelibs-path@0.1.0"
        },
        "npm:glob@3.1.21": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "graceful-fs": "npm:graceful-fs@1.2.3",
            "inherits": "npm:inherits@1.0.0",
            "minimatch": "npm:minimatch@0.2.14",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:glob@4.3.5": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inflight": "npm:inflight@1.0.4",
            "inherits": "npm:inherits@2.0.1",
            "minimatch": "npm:minimatch@2.0.8",
            "once": "npm:once@1.3.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:glob@4.5.3": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inflight": "npm:inflight@1.0.4",
            "inherits": "npm:inherits@2.0.1",
            "minimatch": "npm:minimatch@2.0.8",
            "once": "npm:once@1.3.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:globule@0.1.0": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "glob": "npm:glob@3.1.21",
            "lodash": "npm:lodash@1.0.2",
            "minimatch": "npm:minimatch@0.2.14",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:graceful-fs@1.2.3": {
            "constants": "github:jspm/nodelibs-constants@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:graceful-fs@3.0.8": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "constants": "github:jspm/nodelibs-constants@0.1.0",
            "module": "github:jspm/nodelibs-module@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "util": "github:jspm/nodelibs-util@0.1.0",
            "vm": "github:jspm/nodelibs-vm@0.1.0"
        },
        "npm:gulp-compass@2.1.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "gulp-util": "npm:gulp-util@3.0.6",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "through2": "npm:through2@0.6.5",
            "which": "npm:which@1.1.1"
        },
        "npm:gulp-util@3.0.6": {
            "array-differ": "npm:array-differ@1.0.0",
            "array-uniq": "npm:array-uniq@1.0.2",
            "beeper": "npm:beeper@1.1.0",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "chalk": "npm:chalk@1.1.0",
            "dateformat": "npm:dateformat@1.0.11",
            "lodash._reescape": "npm:lodash._reescape@3.0.0",
            "lodash._reevaluate": "npm:lodash._reevaluate@3.0.0",
            "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
            "lodash.template": "npm:lodash.template@3.6.2",
            "minimist": "npm:minimist@1.1.1",
            "multipipe": "npm:multipipe@0.1.2",
            "object-assign": "npm:object-assign@3.0.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "replace-ext": "npm:replace-ext@0.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "through2": "npm:through2@2.0.0",
            "util": "github:jspm/nodelibs-util@0.1.0",
            "vinyl": "npm:vinyl@0.5.0"
        },
        "npm:gulp@3.9.0": {
            "archy": "npm:archy@1.0.0",
            "chalk": "npm:chalk@1.1.0",
            "deprecated": "npm:deprecated@0.0.1",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "gulp-util": "npm:gulp-util@3.0.6",
            "interpret": "npm:interpret@0.6.3",
            "liftoff": "npm:liftoff@2.1.0",
            "minimist": "npm:minimist@1.1.1",
            "orchestrator": "npm:orchestrator@0.3.7",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "pretty-hrtime": "npm:pretty-hrtime@1.0.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "semver": "npm:semver@4.3.6",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0",
            "tildify": "npm:tildify@1.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0",
            "v8flags": "npm:v8flags@2.0.9",
            "vinyl-fs": "npm:vinyl-fs@0.3.13"
        },
        "npm:has-ansi@2.0.0": {
            "ansi-regex": "npm:ansi-regex@2.0.0"
        },
        "npm:hash.js@1.0.3": {
            "inherits": "npm:inherits@2.0.1"
        },
        "npm:indent-string@1.2.1": {
            "get-stdin": "npm:get-stdin@4.0.1",
            "minimist": "npm:minimist@1.1.1",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "repeating": "npm:repeating@1.1.3",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:inflight@1.0.4": {
            "once": "npm:once@1.3.2",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "wrappy": "npm:wrappy@1.0.1"
        },
        "npm:inherits@2.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:is-absolute@0.1.7": {
            "is-relative": "npm:is-relative@0.1.3"
        },
        "npm:is-finite@1.0.1": {
            "number-is-nan": "npm:number-is-nan@1.0.0"
        },
        "npm:is-utf8@0.2.0": {
            "fs": "github:jspm/nodelibs-fs@0.1.2"
        },
        "npm:liftoff@2.1.0": {
            "events": "github:jspm/nodelibs-events@0.1.1",
            "extend": "npm:extend@2.0.1",
            "findup-sync": "npm:findup-sync@0.2.1",
            "flagged-respawn": "npm:flagged-respawn@0.3.1",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "rechoir": "npm:rechoir@0.6.1",
            "resolve": "npm:resolve@1.1.6",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:lodash._basetostring@3.0.1": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:lodash.escape@3.0.0": {
            "lodash._basetostring": "npm:lodash._basetostring@3.0.1"
        },
        "npm:lodash.keys@3.1.2": {
            "lodash._getnative": "npm:lodash._getnative@3.9.1",
            "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
            "lodash.isarray": "npm:lodash.isarray@3.0.4"
        },
        "npm:lodash.template@3.6.2": {
            "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
            "lodash._basetostring": "npm:lodash._basetostring@3.0.1",
            "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
            "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
            "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
            "lodash.escape": "npm:lodash.escape@3.0.0",
            "lodash.keys": "npm:lodash.keys@3.1.2",
            "lodash.restparam": "npm:lodash.restparam@3.6.1",
            "lodash.templatesettings": "npm:lodash.templatesettings@3.1.0"
        },
        "npm:lodash.templatesettings@3.1.0": {
            "lodash._reinterpolate": "npm:lodash._reinterpolate@3.0.0",
            "lodash.escape": "npm:lodash.escape@3.0.0"
        },
        "npm:lodash@1.0.2": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:meow@3.3.0": {
            "camelcase-keys": "npm:camelcase-keys@1.0.0",
            "indent-string": "npm:indent-string@1.2.1",
            "minimist": "npm:minimist@1.1.1",
            "object-assign": "npm:object-assign@3.0.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:miller-rabin@2.0.1": {
            "bn.js": "npm:bn.js@2.2.0",
            "brorand": "npm:brorand@1.0.5"
        },
        "npm:minimatch@0.2.14": {
            "lru-cache": "npm:lru-cache@2.6.5",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "sigmund": "npm:sigmund@1.0.1"
        },
        "npm:minimatch@2.0.8": {
            "brace-expansion": "npm:brace-expansion@1.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0"
        },
        "npm:mkdirp@0.5.1": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "minimist": "npm:minimist@0.0.8",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:multipipe@0.1.2": {
            "duplexer2": "npm:duplexer2@0.0.2",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:once@1.3.2": {
            "wrappy": "npm:wrappy@1.0.1"
        },
        "npm:orchestrator@0.3.7": {
            "end-of-stream": "npm:end-of-stream@0.1.5",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "sequencify": "npm:sequencify@0.0.7",
            "stream-consume": "npm:stream-consume@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:ordered-read-streams@0.1.0": {
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:os-browserify@0.1.2": {
            "os": "github:jspm/nodelibs-os@0.1.0"
        },
        "npm:os-homedir@1.0.0": {
            "os": "github:jspm/nodelibs-os@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:parse-asn1@3.0.1": {
            "asn1.js": "npm:asn1.js@2.1.1",
            "browserify-aes": "npm:browserify-aes@1.0.1",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.1",
            "pbkdf2": "npm:pbkdf2@3.0.4",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:path-browserify@0.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:pbkdf2@3.0.4": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "create-hmac": "npm:create-hmac@1.1.3",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:process-nextick-args@1.0.1": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:process@0.11.1": {
            "assert": "github:jspm/nodelibs-assert@0.1.0"
        },
        "npm:public-encrypt@2.0.1": {
            "bn.js": "npm:bn.js@2.2.0",
            "browserify-rsa": "npm:browserify-rsa@2.0.1",
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "create-hash": "npm:create-hash@1.1.1",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "parse-asn1": "npm:parse-asn1@3.0.1",
            "randombytes": "npm:randombytes@2.0.1"
        },
        "npm:punycode@1.3.2": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:randombytes@2.0.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:readable-stream@1.0.33": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "core-util-is": "npm:core-util-is@1.0.1",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "isarray": "npm:isarray@0.0.1",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "stream-browserify": "npm:stream-browserify@1.0.0",
            "string_decoder": "npm:string_decoder@0.10.31"
        },
        "npm:readable-stream@1.1.13": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "core-util-is": "npm:core-util-is@1.0.1",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "isarray": "npm:isarray@0.0.1",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0",
            "stream-browserify": "npm:stream-browserify@1.0.0",
            "string_decoder": "npm:string_decoder@0.10.31",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:readable-stream@2.0.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "core-util-is": "npm:core-util-is@1.0.1",
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "isarray": "npm:isarray@0.0.1",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "process-nextick-args": "npm:process-nextick-args@1.0.1",
            "string_decoder": "npm:string_decoder@0.10.31",
            "util": "github:jspm/nodelibs-util@0.1.0",
            "util-deprecate": "npm:util-deprecate@1.0.1"
        },
        "npm:rechoir@0.6.1": {
            "path": "github:jspm/nodelibs-path@0.1.0",
            "resolve": "npm:resolve@1.1.6"
        },
        "npm:reflect-metadata@0.1.0": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "crypto": "github:jspm/nodelibs-crypto@0.1.0"
        },
        "npm:repeating@1.1.3": {
            "is-finite": "npm:is-finite@1.0.1",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:replace-ext@0.0.1": {
            "path": "github:jspm/nodelibs-path@0.1.0"
        },
        "npm:resolve@1.1.6": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:ripemd160@1.0.1": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:rx@2.5.1": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:semver@4.3.6": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:sha.js@2.4.2": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:sigmund@1.0.1": {
            "http": "github:jspm/nodelibs-http@1.7.1",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:stream-browserify@1.0.0": {
            "events": "github:jspm/nodelibs-events@0.1.1",
            "inherits": "npm:inherits@2.0.1",
            "readable-stream": "npm:readable-stream@1.1.13"
        },
        "npm:string_decoder@0.10.31": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0"
        },
        "npm:strip-ansi@3.0.0": {
            "ansi-regex": "npm:ansi-regex@2.0.0"
        },
        "npm:strip-bom@1.0.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "first-chunk-stream": "npm:first-chunk-stream@1.0.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "is-utf8": "npm:is-utf8@0.2.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:supports-color@2.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:through2@0.6.5": {
            "process": "github:jspm/nodelibs-process@0.1.1",
            "readable-stream": "npm:readable-stream@1.0.33",
            "util": "github:jspm/nodelibs-util@0.1.0",
            "xtend": "npm:xtend@4.0.0"
        },
        "npm:through2@2.0.0": {
            "process": "github:jspm/nodelibs-process@0.1.1",
            "readable-stream": "npm:readable-stream@2.0.1",
            "util": "github:jspm/nodelibs-util@0.1.0",
            "xtend": "npm:xtend@4.0.0"
        },
        "npm:tildify@1.1.0": {
            "os-homedir": "npm:os-homedir@1.0.0"
        },
        "npm:timers-browserify@1.4.1": {
            "process": "npm:process@0.11.1"
        },
        "npm:unique-stream@1.0.0": {
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:url@0.10.3": {
            "assert": "github:jspm/nodelibs-assert@0.1.0",
            "punycode": "npm:punycode@1.3.2",
            "querystring": "npm:querystring@0.2.0",
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:user-home@1.1.1": {
            "process": "github:jspm/nodelibs-process@0.1.1",
            "systemjs-json": "github:systemjs/plugin-json@0.1.0"
        },
        "npm:util-deprecate@1.0.1": {
            "util": "github:jspm/nodelibs-util@0.1.0"
        },
        "npm:util@0.10.3": {
            "inherits": "npm:inherits@2.0.1",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:v8flags@2.0.9": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "child_process": "github:jspm/nodelibs-child_process@0.1.0",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "os": "github:jspm/nodelibs-os@0.1.0",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "user-home": "npm:user-home@1.1.1"
        },
        "npm:vinyl-fs@0.3.13": {
            "defaults": "npm:defaults@1.0.2",
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "glob-stream": "npm:glob-stream@3.1.18",
            "glob-watcher": "npm:glob-watcher@0.0.6",
            "graceful-fs": "npm:graceful-fs@3.0.8",
            "mkdirp": "npm:mkdirp@0.5.1",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "strip-bom": "npm:strip-bom@1.0.0",
            "through2": "npm:through2@0.6.5",
            "vinyl": "npm:vinyl@0.4.6"
        },
        "npm:vinyl@0.4.6": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "clone": "npm:clone@0.2.0",
            "clone-stats": "npm:clone-stats@0.0.1",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:vinyl@0.5.0": {
            "buffer": "github:jspm/nodelibs-buffer@0.1.0",
            "clone": "npm:clone@1.0.2",
            "clone-stats": "npm:clone-stats@0.0.1",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1",
            "replace-ext": "npm:replace-ext@0.0.1",
            "stream": "github:jspm/nodelibs-stream@0.1.0"
        },
        "npm:vm-browserify@0.0.4": {
            "indexof": "npm:indexof@0.0.1"
        },
        "npm:which@1.1.1": {
            "fs": "github:jspm/nodelibs-fs@0.1.2",
            "is-absolute": "npm:is-absolute@0.1.7",
            "path": "github:jspm/nodelibs-path@0.1.0",
            "process": "github:jspm/nodelibs-process@0.1.1"
        },
        "npm:zone.js@0.5.1": {
            "process": "github:jspm/nodelibs-process@0.1.1"
        }
    }
});

