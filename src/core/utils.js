/**
 * 工具函数
 * @author Ouyang
 * */

class Utils {
    /**
     * @method each()
     * @param {Object|Array} value 需要迭代对象或数据
     * @param {Function} fn 迭代函数
     * @param {Object} context 迭代函数上下文
     * */
    static each (value, fn, context) {
        if (value === null) {
            return;
        }
        if (value.length === +value.length) {
            for (let i = 0; i < value.length; i++) {
                if (fn.call(context, value[i], i, value) === false) {
                    return false;
                }
            }
        } else {
            for (const key in value) {
                if (value.hasOwnProperty(key)) {
                    if (fn.call(context, value[key], key, value) === false) {
                        return false;
                    }
                }
            }
        }
    }
}

/**
 * @method isString()
 * @method isFunction()
 * @method isArray()
 * @method isNumber()
 * @method isRegExp()
 * @method isObject()
 * @method isBoolean()
 * */
Utils.each(['String', 'Function', 'Array', 'Number', 'RegExp', 'Object', 'Boolean'], function (type) {
    Utils['is' + type] = function typeCheck (obj) {
        return Object.prototype.toString.apply(obj) === `[object ${type}]`;
    }
});

export default Utils;
