interface Mediator {
    send(message: string, colleague: Colleague): void;
}

class ConcreteMediator implements Mediator {
    private _colleagueFirst: Colleague;
    private _colleagueSecond: Colleague;

    send(message: string, colleague: Colleague): void {
        if (colleague === this._colleagueFirst) {
            this._colleagueSecond.notify(message);
        }
        else {
            this._colleagueFirst.notify(message);
        }
    }

    set colleagueFirst(value: Colleague) {
        this._colleagueFirst = value;
    }

    set colleagueSecond(value: Colleague) {
        this._colleagueSecond = value;
    }
}

abstract class Colleague {
    protected mediator: Mediator;

    constructor(mediator: Mediator) {
        this.mediator = mediator;
    }

    send(message: string): void {
        this.mediator.send(message, this);
    }

    abstract notify(message: string): void;
}

class ConcreteColleagueFirst extends Colleague {
    notify(message: string): void {
        console.log(`Colleague First gets message: ${message}`)
    }
}

class ConcreteColleagueSecond extends Colleague {
    notify(message: string): void {
        console.log(`Colleague Second gets message: ${message}`)
    }
}

export function run() {
    const mediator = new ConcreteMediator();
    const colleagueFirst = new ConcreteColleagueFirst(mediator);
    const colleagueSecond = new ConcreteColleagueSecond(mediator);

    mediator.colleagueFirst = colleagueFirst;
    mediator.colleagueSecond = colleagueSecond;

    colleagueFirst.send('How are you?');
    colleagueSecond.send('Fine, thanks.');
}