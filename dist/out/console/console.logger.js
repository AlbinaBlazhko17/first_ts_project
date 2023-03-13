export class ConsoleLogger {
    constructor() { }
    ;
    static getInstance() {
        if (!ConsoleLogger.logger)
            ConsoleLogger.logger = new ConsoleLogger();
        return ConsoleLogger.logger;
    }
    log(...args) {
        console.log(...args);
    }
    error(...args) {
        console.log(...args);
    }
    end() {
        console.log('Done');
    }
    ;
}
