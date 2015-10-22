/**
* Created by itankoua on 21/10/15.
*/
/// <reference path='../_all.ts' />
var meeting;
(function (meeting) {
    var Guid = (function () {
        function Guid() {
        }
        Guid.prototype.get = function () {
            var d = new Date().getTime();
            var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = (d + Math.random() * 16) % 16 | 0;
                d = Math.floor(d / 16);
                return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
            });
            return uuid;
        };
        return Guid;
    })();
    meeting.Guid = Guid;
})(meeting || (meeting = {}));
