import fs from 'fs';
import path from 'path';
import { flatten } from '../src';
import tree from '../test/fixtures/tree.json';

const pad = (n = 0, chars) => {
    let s = '';
    while (n > 0) { s += chars; --n }
    return s;
};

flatten(tree.children).forEach((node, index) => {
    const { label = '', _state = {}, children = [] } = node;

    let padding = pad(_state.depth, '  ');
    if (_state.folded) {
        padding += '+ ';
    } else if (children.length > 0) {
        padding += '- ';
    } else {
        padding += '  ';
    }

    console.log('%s%s (%s)', padding, label, _state.path);
});
