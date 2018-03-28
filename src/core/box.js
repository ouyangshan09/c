/**
 * 矩形区域数据模型
 * @author Ouyang
 * */

class Box {
    /**
     * @param {Number} x
     * @param {Number} y
     * @param {Number} width
     * @param {Number} height
     * */
    constructor (x, y, width, height) {
        const box = arguments[0];
        if (box && typeof box === 'object') {
            x = box.x;
            y = box.y;
            width = box.width;
            height = box.height;
        }
        if (width < 0) {
            x -= (width = -width);
        }
        if (height < 0) {
            y -= (height = -height);
        }

        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 0;
        this.height = height || 0;
        this.left = this.x;
        this.right = this.x + this.width;
        this.top = this.y;
        this.bottom = this.y + this.height;
        this.cx = this.x + this.width / 2;
        this.cy = this.y + this.height / 2;
    }

    getRangeX () {
        return [this.left, this.right];
    }

    getRangeY () {
        return [this.top, this.bottom];
    }

    merge () {
        //
    }

    intersect () {
        //
    }

    expand () {
        //
    }

    valueOf () {
        return [this.x, this.y, this.width, this.height];
    }

    toString () {
        return this.valueOf().join(' ');
    }

    isEmpty () {
        return !this.width || !this.height;
    }

    /**
     * 解析一个数组或字符串为Box对象
     * @param {Number[]|String} any
     * */
    static parse (any) {
        if (typeof any === 'string') {
            return Box.parse(any.split(/[\s,]+/).map(parseFloat));
        }
        if (any instanceof Array) {
            return new Box(any[0], any[1], any[2], any[3]);
        }
        if ('x' in any) return new Box(any);
        return null;
    }
}

export default Box;
