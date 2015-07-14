/**
 * Created by vgoya2 on 7/14/15.
 */

export interface IRepository<T> {
    insert(T): void;
    remove(id: string): void;
    find(id: string): T | void;
    get(): Array<T> | any;
}
