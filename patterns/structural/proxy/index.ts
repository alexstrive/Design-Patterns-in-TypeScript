/**
 * Design Pattern Proxy
 *
 * A proxy, in its most general form, is a class functioning as an interface to something else. The proxy could interface to anything: a network connection, a large object in memory, a file, or some other resource that is expensive or impossible to duplicate. In short, a proxy is a wrapper or agent object that is being called by the client to access the real serving object behind the scenes. Use of the proxy can simply be forwarding to the real object, or can provide additional logic. In the proxy, extra functionality can be provided, for example caching when operations on the real object are resource intensive, or checking preconditions before operations on the real object are invoked. For the client, usage of a proxy object is similar to using the real object, because both implement the same interface.
 */

abstract class Subject {
    abstract request(): void;
}

class RealSubject extends Subject {
    request(): void {
        console.log("Called RealSubject.request method");
    }
}

class ProxySubject extends Subject {
    private realSubject: RealSubject;

    request(): void {
        // lazy load
        if (!this.realSubject) {
            this.realSubject = new RealSubject();
        }

        console.log("Called ProxySubject.request method")

        this.realSubject.request();
    }
}

export function run() {
    const proxy = new ProxySubject();
    proxy.request();
}