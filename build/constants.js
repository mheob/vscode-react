"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require('path');
exports.ROOT_DIR = path.resolve(__dirname, '../');
exports.GENERAL_SNIPPETS_DIR = path.resolve(exports.ROOT_DIR, './snippets/general');
exports.JS_SNIPPETS_DIR = path.resolve(exports.ROOT_DIR, './snippets/javascript');
exports.TS_SNIPPETS_DIR = path.resolve(exports.ROOT_DIR, './snippets/typescript');
exports.JS_REACT_LANGUAGES = ['javascript', 'javascriptreact'];
exports.TS_REACT_LANGUAGES = ['typescript', 'typescriptreact'];
exports.ALL_REACT_LANGUAGES = [...exports.JS_REACT_LANGUAGES, ...exports.TS_REACT_LANGUAGES];