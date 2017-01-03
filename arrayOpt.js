var $ = window.jQuery = require('jquery');
//数组or对象 最大值
function arrayMax(array) {
    var values=arrayValues(array);
    var max= Math.max.apply(Math, values);
    // var max=arrayValues(array)[0] ;
    //
    // for (var i in array) {
    //     if (parseFloat(array[i]) > parseFloat(max)) {
    //         max = array[i];
    //     }
    // }
    return parseFloat(max);
}
//最小值
function arrayMin(array) {
    // var min = arrayValues(array)[0];
    //
    // for (var i in array) {
    //     if (parseFloat(array[i]) < parseFloat(min)) {
    //         min = array[i];
    //     }
    // }
    var values=arrayValues(array);
    var min= Math.min.apply(Math, values);
    return parseFloat(min);
}

//对象的key
function arrayKeys(obj) {
    var ar = [], i, _this = obj;
    for (i in _this) {
        ar.push(i)
    }

    return ar;
}


//对象的value
function arrayValues(obj) {
    var ar = [], i, _this = obj;
    for (i in _this) {
        ar.push(parseFloat(_this[i]))
    }

    return ar;
}


module.exports= {
    arrayMax:arrayMax,
    arrayMin:arrayMin,
    arrayKeys:arrayKeys,
}