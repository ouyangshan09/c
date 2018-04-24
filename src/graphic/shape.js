/**
 * Svg形状抽象基类
 * @author Ouyang
 * */
import Element from './element';
// import Utils from '../core/utils';

class Shape extends Element {
    constructor (name) {
        super(name);
        this.state = {};
        this.transform = {
            translate: null,
            rotate: null,
            scale: null,
            matrix: null
        };
    }

    /**
     * 变换
     * */
    translate () {
        //
    }

    /**
     * 旋转
     * */
    rotate () {
        //
    }

    /**
     * 缩放
     * */
    scale () {
        //
    }

    /**
     * 倾斜
     * */
    skew () {
        //
    }

    /**
     * 绘制
     * */
    stroke () {
        //
    }

    /**
     * 填充
     * */
    fill () {
        //
    }
}

export default Shape;
