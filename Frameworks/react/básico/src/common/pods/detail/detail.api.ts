export interface GetDetailInterface<T> {
    execute(id: string): Promise<T>;
}