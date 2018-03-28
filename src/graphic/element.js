/**
 * Svg抽象基类
 * @author Ouyang
 * */
import Svg from './svg';
import Utils from '../core/utils';

class Element {
    constructor (name) {
        this.node = Svg.createNode(name);
    }

    setId (id) {
        this.node.id = id;
        return this;
    }

    getId () {
        return this.node.id;
    }

    getNode () {
        return this.node;
    }

    getBoundaryBox () {
        let box;
        try {
            box = '';
        } catch (e) {
            box = {
                x: this.node.clientLeft,
                y: this.node.clientTop,
                width: this.node.clientWidth,
                height: this.node.clientHeight
            };
        }
        return box;
    }

    setAttar (attribute, value) {
        const self = this;
        if (Utils.isObject(attribute)) {
            Utils.each(attribute, (val, key) => {
                self.setAttar(key, val);
            })
        }

        if (value === undefined || value === null || value === '') {
            this.node.removeAttribute(attribute);
        } else {
            this.node.setAttribute(attribute, value);
        }

        return this;
    }

    getAttar (attribute) {
        return this.node.getAttribute(attribute);
    }
}

export default Element;
