


class IterLoad {
    constructor(iter, step=10) {
        this.iter = iter;
        this.items = [];
        this.step = 10;
        this.done = false;

    }
    item(index) {
        if(!this.done && index >= this.items.length)
            this.load(index);
        return this.items[index] || null;
    }
    load(index) {
        let count = Math.max(index + 1 - this.items.length, this.step);
        while (count > 0) {
            let {value, done} = this.iter.next();
            if(!done) {
                this.items.push(this.bind(value));
                count--;
            } else {
                this.done = true;
                break;
            }
        }
    }
    bind(value) {
        return value;
    }
}

class Run {
    constructor(run) {
        this.run = run;
    }
}

class Runs extends IterLoad {
    constructor(iter) {
        super(iter);
    }
    bind(value) {
        return new Run(value);
    }
}
class WordBreaker {
    constructor(runs) {
        this.runs = runs;
    }
}
class Words {

    wrap(width) {

    }
}

class Div {
    constructor() {
    }
}
