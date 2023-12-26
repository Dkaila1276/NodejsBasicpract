const repl = require('node:repl');
const fs = require('fs');
const msg = 'message';

repl.start('> ').context.m = msg;

fs.createReadStream("")