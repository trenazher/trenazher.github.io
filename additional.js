//перемешивает массив
function shuffle(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
    return arr;
}

//возвращает массив из how случаных элементов от 0 до max-1
function randomArray(how, max){
    if (how > max) how = max;
    var arr = [];
    for (var i=0; i<max; i++)
        arr.push(i);
    return shuffle(arr).slice(0, how);
}

//генератор списка заданий
function createTasks(parts, how) {
    var tests = [];
    parts.forEach(function(part) {
        var keys = data.db[part].keys;
        for (var i=0; i<3; i++) {
            var indexes = randomArray(how[i], keys[i].length);
            for (var j=0; j<indexes.length; j++)
                tests.push({
                    part: part,
                    level: i,
                    num: indexes[j]
                });
        }
    });
    return tests;
}