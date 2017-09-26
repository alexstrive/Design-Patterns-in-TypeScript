/**
 * Design Pattern Command
 *
 * In object-oriented programming, the command pattern is a behavioral design pattern in which an object is used to encapsulate all information needed to perform an action or trigger an event at a later time. This information includes the method name, the object that owns the method and values for the method parameters.
 */

abstract class Command {
    protected switchable: Switchable;

    constructor(switchable: Switchable) {
        this.switchable = switchable;
    }

    abstract execute();
}

/* An interface that defines actions that the receiver can perform */
interface Switchable {
    powerOn();
    powerOff();
}

/* The Invoker class */
class Switch {
    private closeCommand;
    private openCommand;

    constructor(closeCommand, openCommand) {
        this.closeCommand = closeCommand;
        this.openCommand = openCommand;
    }

    close() {
        this.closeCommand.execute();
    }

    open() {
        this.openCommand.execute();
    }
}

/* The Receiver class */
class Light implements Switchable {
    powerOn() {
        console.log('The light is on');
    }

    powerOff() {
        console.log('The light is off');
    }

}

/* The Command for turning on the device - ConcreteCommand #1 */
class CloseSwitchCommand extends Command {
    execute() {
        this.switchable.powerOff();
    }
}

/* The Command for turning off the device - ConcreteCommand #2 */
class OpenSwitchCommand extends Command {
    execute() {
        this.switchable.powerOn();
    }
}

export function run() {
    const lamp: Switchable = new Light();
    const switchCloseCommand: Command = new CloseSwitchCommand(lamp);
    const switchOpenCommand: Command = new OpenSwitchCommand(lamp);
    const invoker = new Switch(switchCloseCommand, switchOpenCommand);

    invoker.open();
}
