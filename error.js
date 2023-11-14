class ExpressError extends Error {
    constructor(msg, status){
        super();
        this.msg = msg
        this.status = status
        console.log(this.stack)
        console.log(this.msg)
    }
}

module.exports = ExpressError; 