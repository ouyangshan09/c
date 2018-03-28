/**
 * Svg矩形抽象
 * @author Ouyang
 * */
import Shape from './shape';

class Rect extends Shape {
    constructor () {
        super();
        this.state = {};
    }
}

export default Rect;

// const rect = new Rect();
//
// rect
//     .setWidth()
//     .setHeight()
//     .setX()
//     .setY()
//     .renderTo()
// const utils.renderTo('container', rect);
// const paper = new Paper('container');
// const paper.put(rect);
