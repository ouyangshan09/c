/**
 * 路径抽象类
 * */
import Shape from './shape';

class Path extends Shape {
    constructor () {
        super('path');
        this.state = {};
    }
}

export default Path;
