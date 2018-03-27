/**
 * SVG元素基本信息
 * @author Ouyang
 * */

class Svg {
    static defaults = {
        stroke: 'none',
        fill: 'none'
    };

    static xlink = 'http://www.w3.org/1999/xlink';
    static ns = 'http://www.w3.org/2000/svg';
    static version = '1.1';

    static createNode (name) {
        const node = document.createElementNS(Svg.ns, name);
        node.id = `c_${name}_${Date.now() + 1}`;
        return node;
    }
}

export default Svg;
