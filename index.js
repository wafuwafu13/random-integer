function RandomInterger() {
    this.create = function(min, max){
        return Math.floor(Math.random() * (max + 1 - min)) + min
    }
}

module.exports = RandomInterger