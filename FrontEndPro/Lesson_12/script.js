function Calculator(base) {
    this.base = base,
    this.add = function(num) {
        if (isNumberValidation(num)) {
            this.base += Number(num)
        }
    };
    this.sub = function(num) {
        if (isNumberValidation(num)) {
            this.base -= num
        }
    };
    this.set = function(num) {
        if (isNumberValidation(num)) {
            this.base = num
        }
    };
    this.get = function() {
        return this.base
    }
}

function isNumberValidation(num) {
    if (isNaN(num)) {
        return false
    } else {
        return true
    }
}