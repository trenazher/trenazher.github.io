//компонент тестирования
//принимает объект тестирования data, а также событие окончания теста с полученным баллом endTest
//генерирует html без контейнера

var Test = React.createClass({

    propTypes: {
        data: React.PropTypes.object,
        tasks: React.PropTypes.array,
        goParts: React.PropTypes.func
    },

    getInitialState: function() {
        var length = this.props.tasks.length;
        var answers = [];
        var shuffles = [];
        for (var i = 0; i < length; i++) {
            answers.push(-1);
            shuffles.push([0,1,2,3,4].shuffle());
        }
        return {
            answers: answers,   //пользовательские ответы
            current: 0,         //текущий вид, -1 результат тестирования, -2 верные ответы, 0,1,2,3.. - вопросы
            endWarning: false,  //нажата кнопка завершения теста
            shuffles: shuffles  //перемешанный порядок ответов
        };
    },

    changeCurrent: function(current){
        this.setState({
            current: current
        });
    },

    render: function() {
        var current = this.state.current;
        var mainHtml = null;
        if (current >= 0)
            mainHtml = this.testing();
        else if (current == -1)
            mainHtml = this.result();
        else if (current == -2)
            mainHtml = this.rightAnswers();
        return mainHtml;
    },

    changeAnswer: function(question, answer){
        var newAnswers = this.state.answers.slice();
        newAnswers[question] = answer;
        this.setState({
            answers: newAnswers
        });
    },

    endTest: function(state){
        this.setState({endWarning: state});
    },

    testing: function(){
        var index = this.props.index;
        var current = this.state.current;
        var length = this.props.data.questionsCount;
        var currShuffle = this.state.shuffles[current];
        var answers = this.state.answers;
        var currAnswer = answers[current];
        var header = this.props.header;
        var name = this.props.name;
        var endWarning = this.state.endWarning;

        var countOfAnswered = 0;
        for (var i = 0; i < answers.length; i++)
            if (answers[i]!=-1) ++countOfAnswered;
        var allAnswered = countOfAnswered == length;

        var radios = [];
        for (var i = 0; i < 5; i++)
            radios.push(
                <div className="radio">
                    <label>
                        <input onChange={this.changeAnswer.bind(this,current,i)} type="radio" value={""+i} checked={i==currAnswer} name={"answers"+current} />
                        <img src={"data/"+index+"/demotest/"+(current+1)+"/answer"+(i+1)+".png"} />
                    </label>
                </div>
            );
        var shuffledRadios = [];
        for (var i=0; i<5; i++)
            shuffledRadios.push(radios[currShuffle[i]]);

        var pagination = [];
        for (var i = 0; i < length; i++) {
            var currClass = "";
            if (answers[i] != -1) currClass = "success";
            if (current == i) currClass = "active";
            pagination.push(
                <li className={currClass}>
                    <a onClick={this.changeCurrent.bind(this,i)} href="#">{i+1}</a>
                </li>
            );
        }

        var button = null;
        if (current < length-1) {
            if (currAnswer == -1)
                button = <button onClick={this.changeCurrent.bind(this,current+1)} className="btn btn-default">Пропустить</button>;
            else
                button = <button onClick={this.changeCurrent.bind(this,current+1)} className="btn btn-primary">Далее</button>;
        }

        var modal = null;
        if (endWarning)
            modal = (
                <div className="modal show" role="dialog">
                    <div className="modal-backdrop fade in" style={{height: document.body.scrollHeight+"px"}}></div>
                    <div className="modal-dialog modal-sm">
                        <div className="modal-content">
                            <div className="modal-header">Завершить тест?</div>
                            <div className="modal-body">
                                <button onClick={this.changeCurrent.bind(this,-1)} className="btn btn-primary">Да</button>
                                <button onClick={this.endTest.bind(this,false)} className="btn btn-default">Отменить</button>
                            </div>
                        </div>
                    </div>
                </div>
            );

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">{header}"{name}"</div>
                <div className="panel-body" style={{height: '450px'}}>
                    <h4>Вопрос {current+1} из {length}</h4>
                    <img src={"data/"+index+"/demotest/"+(current+1)+"/question.png"} />
                    {shuffledRadios}
                </div>
                <div className="panel-footer">
                    <div>
                        {button}
                        <button onClick={this.endTest.bind(this,true)} className="btn btn-danger pull-right">Завершить</button>
                    </div>
                    <ul className="pagination pagination-sm">
                        <li className={current==0 ? "disabled" : ""}>
                            <a onClick={this.changeCurrent.bind(this,current-1)} href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                        {pagination}
                        <li className={current==length-1 ? "disabled" : ""}>
                            <a onClick={this.changeCurrent.bind(this,current+1)} href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                    </ul>
                    <p>Отвечено на {countOfAnswered} вопросов из {length}</p>
                </div>
                {modal}
            </div>
        );
    }
});