"use strict";
exports.__esModule = true;
exports.getDays = void 0;
var getLastDay = function (year, month) {
    return new Date(year, month, 0).getDate();
};
var getStartDay = function (year, month) {
    var d = new Date(year, month - 1, 1);
    return d.getDay();
};
var getDays = function (year, month) {
    var startDay = getStartDay(year, month);
    var lastDay = getLastDay(year, month);
    return [];
};
exports.getDays = getDays;
