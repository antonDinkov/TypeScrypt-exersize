/* class Data {
    public method: string;
    public uri: string;
    public version: string;
    public message: string;
    public response: string | undefined = undefined;
    public fulfilled: boolean = false;

    constructor(method:string, uri:string, version:string, message:string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
    }
};

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData); */


class Data {
    public method: string;
    public uri: string;
    public version: string;
    public message: string;
    public response: string | undefined;
    public fulfilled: boolean;

    constructor(method:string, uri:string, version:string, message:string) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false
    }
};

let myData = new Data('GET', 'http://google.com', 'HTTP/1.1', '');
console.log(myData);