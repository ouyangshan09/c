/**
 * 路径抽象类
 * */
import Shape from './shape';
import Geometry from '../utils/geometry';

/**
 * 路径绘制数据模型
 * */
class PathDrawer {
    constructor (path) {
        this.segment = [];
        this._transation = [];
        this.path = path;
        this._clear = false;
    }

    getPath () {
        return this.path;
    }

    /**
     * 重绘
     * */
    redraw () {
        this._transation = this._transation || [];
        return this.clear();
    }

    doen () {
        const transition = this._transation;
        this._transation = null;
        this.push(transition);
        return this;
    }

    push () {
        const segment = Array.prototype.slice.call(arguments);
        let originData = '';
        if (this._transation) {
            this._transation.push(segment);
            return this;
        }

        if (this._clear) {
            originData = '';
            this._clear = false;
        } else {
            originData = this.path.getPathData();
        }

        originData = originData || '';
        this.path.setPathData(originData + Geometry.pathToString(segment));
        return this;
    }

    clear () {
        if (this._transation) {
            this._transation = [];
        } else {
            this.path.setPathData('M 0 0');
        }
        this._clear = true;
        return this;
    }

    moveTo () {
        //
    }

    moveBy () {
        //
    }

    lineTo () {
        //
    }

    lineBy () {
        //
    }

    arcTo () {
        //
    }

    arcBy () {
        //
    }

    carcTo () {
        //
    }

    carcBy () {
        //
    }

    bezierTo () {
        //
    }

    bezierBy () {
        //
    }

    close () {
        //
    }
}

class Path extends Shape {
    type = 'path';

    constructor () {
        super('path');
        this.state = {};
    }
}

export { Path, PathDrawer };
export default Path;
