declare namespace array {
    export {
        baseLoop,
        baseLoopAsync,
        baseLoopRight,
        baseLoopRightAsync,
        GenerateBaseLoopCallback,
        BaseLoopCallback,
        BaseLoopCallbackAsync,
        map,
        mapAsync
    }
}
export { array }

/**
 *  Like Array.ForEach.But it can break the loop
 */
declare const baseLoop: <T>(arr: T[], callback: BaseLoopCallback<T>) => void;

declare const baseLoopAsync: <T>(arr: T[], callback: BaseLoopCallbackAsync<T>) => Promise<void>;

declare type BaseLoopCallback<T> = GenerateBaseLoopCallback<T>;

declare type BaseLoopCallbackAsync<T> = GenerateBaseLoopCallback<T, void | LockKey | Promise<void | LockKey>>;

/**
 * rtl version of baseLoop
 */
declare const baseLoopRight: <T>(arr: T[], callback: BaseLoopCallback<T>) => void;

/**
 * rtl version of baseLoopAsync
 */
declare const baseLoopRightAsync: <T>(arr: T[], callback: BaseLoopCallbackAsync<T>) => Promise<void>;

declare type GenerateBaseLoopCallback<T, R = void | LockKey> = (value: T, index: number, 
/** 'return breakKey' break the Loop */
breakKey: LockKey) => R;

declare type LockKey = {
    flag?: string;
};

/**
 *  Like Array.map.But it can break the loop
 */
declare const map: <T, U = any>(array: T[], fn: MapCallback<T, U>) => U[];

declare const mapAsync: <T, U = any>(array: T[], callback: MapCallbackAsync<T, U>) => Promise<U[]>;

declare type MapCallback<T, U> = GenerateBaseLoopCallback<T, U>;

declare type MapCallbackAsync<T, U> = GenerateBaseLoopCallback<T, Promise<U>>;

export { }
