/**
 * Svg形状抽象基类
 * @author Ouyang
 * */
import SvgElement from './element';

class Shape extends SvgElement {
    constructor (name) {
        super(name);
        this.state = {};
    }
}

export default Shape;
