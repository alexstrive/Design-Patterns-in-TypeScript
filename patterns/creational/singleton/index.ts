class Singleton {
    private static instance;

    // Disable constructor to public usage
    private constructor() {}

    // Method uses lazy loading
    public static getInstance() {

        if (!this.instance) {
            this.instance = new this();
        }

        return this.instance;
    }
}

export function bootstrap() {
    // let singletonInstance = new Singleton(); // cause an error because constructor is private
    let singletonInstance = Singleton.getInstance();

    // always happens
    if (singletonInstance == Singleton.getInstance()) {
        console.log('Objects are same')
    }
    // never happens
    else {
        console.log('Objects are different')
    }
}