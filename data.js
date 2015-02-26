var data = {

    helloHeader:           'Приветствую, студент!',
    helloText:             'Данное приложение позволит тебе проверить свои знания по математике и подтянуть их в случае необходимости. Желаю удачи!',
    helloButton:           'Начать',

    partslistHeader:       'Выберите нужный раздел',
    partslistOwnTitle:     'Составить вариант',
    partslistOwnDescr:     'Составление собственного варианта из произвольных заданий всех разделов',

    mixHeader:             'Тестирование по разделу ',
    mixText:               'Выберите уровень сложности, либо начните стандартный тест',
    mixLevelA:             'легкий',
    mixLevelB:             'средний',
    mixLevelC:             'сложный',
    mixStart:              'Начать',
    mixStartStandart:      'Начать стандартный тест',

    mixAllHeader:          'Составление пробного варианта',
    mixAllText:            'Отметьте нужные разделы',
    mixAllLevelText:       'Выберите уровень сложности',
    mixAllLevelA:          'легкий',
    mixAllLevelB:          'средний',
    mixAllLevelC:          'сложный',
    mixAllStart:           'Начать',
    mixAllStartStandart:   'Начать стандартный тест',

    testHeader:            'Прохождение теста',
    testQustionWord:       'Вопрос ',
    testOfWord:            ' из ',
    testEndTest:           'Завершить тест?',
    testYes:               'Да',
    testNo:                'Отменить',

    resultHeader:          'Результаты прохождения теста',


    levels: [       //по скольку заданий отбирать для каждого из уровней сложности
        [10,0,0],   //например, если выбран легкий уровень сложности, то случайным образом отбирать для теста 10 заданий Ашек и все
        [5,5,0],    //если средний уровень сложности, то 5 ашек и 5 бшек
        [0,0,5]     //если сложный уровень сложности, то 5 сшек
    ],

    levelStandart: [10, 5, 5],  //по сколько заданий в стандартном тесте

    levelBalls: [1,2,3],        //сколько баллов дается за одно задание








    db: [{
        name:  'Линейная и векторная алгебра',
        descr: 'Раздел 1',
        keys: [
            [1,1,1],
            [1,1,1],
            [1,1,1]
        ]
    },{
        name: 'Аналитическая геометрия',
        descr: 'Раздел 2'
    },{
        name: 'Введение в математический анализ',
        descr: 'Раздел 3',
        keys: [
            [4,2,1,2,2,3,2,2,2,3,4,3],
            [1,4,4,1,4,3,3],
            [5,1,1,4,1,3,2]
        ]
    },{
        name: 'Дифференциальное исчисление функции одной переменной',
        descr: 'Раздел 4'
    },{
        name: 'Дифференциальное исчисление функции нескольких переменных',
        descr: 'Раздел 5'
    },{
        name: 'Интегральное исчисление функции одной переменной',
        descr: 'Раздел 6'
    },{
        name: 'Интегральное исчисление функции нескольких переменных',
        descr: 'Раздел 7'
    },{
        name: 'Элементы теории поля',
        descr: 'Раздел 8'
    },{
        name: 'Дифференциальные уравнения',
        descr: 'Раздел 9'
    },{
        name: 'Ряды',
        descr: 'Раздел 10'
    },{
        name: 'Теория функции комплексной переменной. Операционное исчисление',
        descr: 'Раздел 11'
    },{
        name: 'Элементы дискретной математики',
        descr: 'Раздел 12'
    },{
        name: 'Теория вероятности',
        descr: 'Раздел 13'
    },{
        name: 'Математическая статистика',
        descr: 'Раздел 14'
    }]
};