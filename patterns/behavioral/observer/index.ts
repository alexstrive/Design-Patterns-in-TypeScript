class Observer {
    protected subject: Subject;
    protected name: string;

    constructor(subject: Subject, name: string) {
        this.subject = subject;
        this.name = name;
        this.subject.attach(this);
    }

    update() {
        console.log(`Observer ${this.name}'s new state is ${this.subject.state}`)
    }
}

class Subject {
    private observers: Observer[] = [];
    private _state: string;

    attach(observer: Observer): void {
        this.observers.push(observer);
    }

    notify() {
        for (let observer of this.observers) {
            observer.update();
        }
    }

    get state(): string {
        return this._state;
    }

    set state(value: string) {
        this._state = value;
        this.notify();
    }
}

export function bootstrap() {
    console.log('Pattern Observer started executing...')
    let subjectFirst = new Subject();
    let subjectSecond = new Subject();

    let observerA = new Observer(subjectFirst, 'A');
    let observerB = new Observer(subjectFirst, 'B');
    let observerC = new Observer(subjectSecond, 'C');

    setTimeout(() => {
        subjectFirst.state = 'First Subject has been changed'
    }, 5000);
    setTimeout(() => {
        subjectSecond.state = 'Second Subject has been changed'
    }, 7500)
}