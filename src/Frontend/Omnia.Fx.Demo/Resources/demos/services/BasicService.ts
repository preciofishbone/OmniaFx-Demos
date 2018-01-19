
export class BasicService {

    public doSomething(keyword: string): Promise<string> {
        return Promise.resolve("I did something");
    }

}