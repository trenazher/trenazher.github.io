//главный компонент.
//он генерирует меню навигации и, если выбрано тестирование итд, подставляет компонент тестирования
//принимает свойство data - объект навигации

var Main = React.createClass({

    propTypes: {
        data: React.PropTypes.object        //данные
    },

    getInitialState: function() {
        return {
            act: 'hello',       // 'hello' - страница приветствия, 'parts' - страница разделов, 'mixall' - генератор заданий, 'mix' - страница выбора сложности, 'test' - страница тестирования, 'result' - страница результатов, 'solves' - страница верных ответов
            part: 0,            //  0,1,2,3... - раздел №1, раздел №2,... режим задается в act
            answers: [],        // ответы, данные пользователем на текущий раздел
            tasks: []           // задачи
        };
    },

    //установка раздела и действия
    changeAct: function(act) {
        this.setState({
            act: act
        });
    },

    //установка номера раздела
    setPart: function(part) {
        this.setState({
            part: part
        });
    },

    //Задание ответов
    setAnswers: function(answers) {
        this.setState({
            answers: answers
        });
    },

    //Задание задач
    setTasks: function(tasks) {
        this.setState({
            tasks: tasks
        });
    },

    render: function() {
        var data = this.props.data,
            act = this.state.act,
            part = this.state.part,
            answers = this.state.answers,
            tasks = this.state.tasks,
            changeAct = this.changeAct,
            setPart = this.setPart,
            setTasks = this.setTasks,
            setAnswers = this.setAnswers;

        switch (act) {
            case 'hello':
                html = <Hello data={data} goParts={changeAct.bind(null, 'parts')} />;
                break;
            case 'parts':
                html = <Partslist data={data} setPart={setPart} goMix={changeAct.bind(null, 'mix')} goMixAll={changeAct.bind(null, 'mixall')} />;
                break;
            case 'mixall':
                html = <Mixall data={data} goTest={changeAct.bind(null, 'test')} setTasks={setTasks} goParts={changeAct.bind(null, 'parts')} />;
                break;
            case 'mix':
                html = <Mix data={data} goTest={changeAct.bind(null, 'test')} setTasks={setTasks} part={part} goParts={changeAct.bind(null, 'parts')} />;
                break;
            case 'test':
                html = <Test data={data} tasks={tasks} setAnswers={setAnswers} goResult={changeAct.bind(null, 'result')} />;
                break;
            case 'result':
                html = <Result data={data} tasks={tasks} answers={answers} goSolves={changeAct.bind(null, 'solves')} goParts={changeAct.bind(null, 'parts')} />;
                break;
            case 'solves':
                html = <Solves data={data} tasks={tasks} goResult={changeAct.bind(null, 'result')} goParts={changeAct.bind(null, 'parts')} />;
                break;
        }
        return <div className='container'>{html}</div>;
    }

});