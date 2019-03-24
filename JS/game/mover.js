'use strict';
let mover = {
    getNextPoint(direction) {
        let nextPoint = {
            x: player.x,
            y: player.y
        };

        /*
        123
        456
        789
        */

        //2, 6, 8, 4, 1, 3, 7, 9
        switch (direction) {
            case '2':
                nextPoint.y--;
                break;
            case '6':
                nextPoint.x++;
                break;
            case '8':
                nextPoint.y++;
                break;
            case '4':
                nextPoint.x--;
                break;
            case '1':
                nextPoint.x-- && nextPoint.y--;
                break;
            case '3':
                nextPoint.x++ && nextPoint.y--;
                break;
            case '7':
                nextPoint.x-- && nextPoint.y++;
                break;
            case '9':
                nextPoint.x++ && nextPoint.y++;
                break;
            default:
                console.log('такого направления нет')
        }

        return nextPoint;
    }
};
