/**
 * 路径抽象类
 * */
import SvgElement from './element';

class Path extends SvgElement {
    constructor () {
        super('path');
        this.state = {};
    }
}

export default Path;
