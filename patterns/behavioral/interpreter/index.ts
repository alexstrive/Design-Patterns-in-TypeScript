/**
 * Design Pattern Interpreter
 *
 * In computer programming, the interpreter pattern is a design pattern that specifies how to evaluate sentences in a language. The basic idea is to have a class for each symbol (terminal or nonterminal) in a specialized computer language. The syntax tree of a sentence in the language is an instance of the composite pattern and is used to evaluate (interpret) the sentence for a client.
 */

class Context {
    // some usefull stuff
}

abstract class AbstractExpression {
    abstract interpret(context: Context): void;
}

class TerminalExpression extends AbstractExpression {
    interpret(context: Context): void {
        console.log("Called Terminal#interpret()");
    }
}


class NonterminalExpression extends AbstractExpression {
    interpret(context: Context): void {
        console.log("Called NonterminalExpression#interpret()");
    }
}

export function run() {
    const context = new Context();
    const expressions: AbstractExpression[] = [];

    // Fill expressions
    expressions.unshift(
        new TerminalExpression(),
        new NonterminalExpression(),
        new TerminalExpression(),
        new NonterminalExpression()
    );

    for (let expression of expressions) {
        expression.interpret(context);
    }
}