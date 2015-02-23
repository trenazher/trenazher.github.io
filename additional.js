//перемешивает массив
Array.prototype.shuffle = function() {
    for (var i = this.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = this[i];
        this[i] = this[j];
        this[j] = temp;
    }
    return this;
}

//возвращает массив из how случайных чисел от 0 до max-1
function randoms (max, how) {
    var result = [];
    
}