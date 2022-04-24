"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
var Player = /** @class */ (function () {
    function Player(id, nickname, photo) {
        this.id = id;
        this.nickname = nickname;
        this.photo = photo;
    }
    Player.prototype.getId = function () {
        return this.id;
    };
    Player.prototype.getNickname = function () {
        return this.nickname;
    };
    Player.prototype.getPhoto = function () {
        return this.photo;
    };
    return Player;
}());
exports.Player = Player;
//# sourceMappingURL=player.js.map