import fs from 'fs';
import path from 'path';
import { flatten } from '../src';
import tree from '../test/fixtures/tree.json';

const checkNodes = [
    '<root>',
    'bravo',
    'charlie',
    'hotel',
    'india'
];

flatten(tree.children, { openAllNodes:true, checkNodes: checkNodes }).forEach((node, index) => {
    console.log('%s: path=%s, parent=%s, children=%d, total=%d, depth=%d, prefix=%s, open=%d, checked=%d, lastChild=%d',
        node.label,
        JSON.stringify(node.state.path),
        node.parent !== null ? JSON.stringify(node.parent.state.path) : null,
        Object.keys(node.children).length,
        node.state.total,
        node.state.depth,
        JSON.stringify(node.state.prefixMask),
        node.state.open,
        node.state.checked,
        node.isLastChild()
    );
});
