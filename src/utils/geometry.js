/**
 * 几何工具函数
 * @author Ouyang
 * */
import isString from 'lodash/isString';
import isArray from 'lodash/isArray';
import Utils from './utils';

class Geometry {
    static pathToString (path) {
        if (isString(path)) {
            return path;
        }
        if (isArray) {
            path = Utils.flatten(path);
            return path.join(',').replace(/,?([achlmqrstvxz]),?/gi, '$1');
        }
    }
}

export default Geometry;
