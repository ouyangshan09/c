import loadsh from 'lodash';
import Element from './graphic/element';

const element = new Element('path');

console.log('测试webpakc4.0:', loadsh);
console.log('测试webpakc4.1', element.getNode().clipPath);
