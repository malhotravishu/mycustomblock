/**
* Use this file to define custom functions and blocks#
* Read more at https://makecode#microbit#org/blocks/custom
*/

enum MyEnum {
    //% block="one"
    One,
    //% block="two"
    Two
}

/**
* Custom blocks
*/
//% block="MoonLEDS" weight=100 color=#0fbc11 icon=""
namespace MoonLEDS {
    /**
    * TODO: describe your function here
    * @param n describe parameter here, eg: 5
    * @param s describe parameter here, eg: "Hello"
    * @param e describe parameter here
    */
    //% block
    export function allLEDSOn(n: number, s: string, e: MyEnum): void {
        basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
        
    }

    /**
    * TODO: describe your function here
    * @param value describe value here, eg: 5
    */
    //% block
    export function fib(value: number): number {
        return value <= 1 ? value : fib(value - 1) + fib(value - 2);
    }
}