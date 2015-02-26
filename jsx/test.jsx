//компонент тестирования
//принимает объект тестирования data, а также событие окончания теста с полученным баллом endTest
//генерирует html без контейнера

var Test = React.createClass({
    propTypes: {
        data: React.PropTypes.object,
        tasks: React.PropTypes.array,
        setAnswers: React.PropTypes.func,
        goResult: React.PropTypes.func
    },

    getInitialState: function() {
        var length = this.props.tasks.length;
        var answers = [];
        var shuffles = [];
        for (var i = 0; i < length; i++) {
            answers.push(-1);
            shuffles.push(shuffle([0,1,2,3,4]));
        }
        return {
            answers: answers,
            current: 0,
            endWarning: false,
            shuffles: shuffles
        };
    },

    changeCurrent: function(current){
        this.setState({
            current: current
        });
    },

    changeAnswer: function(question, answer){
        var newAnswers = this.state.answers.slice();
        newAnswers[question] = answer ;
        this.setState({
            answers: newAnswers
        });
    },

    endTest: function(state){
        this.setState({endWarning: state});
    },

    goResult: function() {
        var goResult = this.props.goResult;
        var setAnswers = this.props.setAnswers;
        var answers = this.state.answers;
        setAnswers(answers);
        goResult();
    },

    render: function(){
        var tasks = this.props.tasks;
        var current = this.state.current;
        var currtask = tasks[current];
        var currpart = currtask.part;
        var currlevel = currtask.level; 
        var levelletter = 'abc'.charAt(currlevel);
        var currnum = currtask.num;
        var length = tasks.length;
        var currShuffle = this.state.shuffles[current];
        var answers = this.state.answers;
        var currAnswer = answers[current];
        var data = this.props.data;
        var endWarning = this.state.endWarning;
        var goResult = this.goResult;

        var countOfAnswered = 0;
        for (var i = 0; i < answers.length; i++)
            if (answers[i]!=-1) ++countOfAnswered;
        var allAnswered = countOfAnswered == length;

        var radios = [];
        for (var i = 0; i < 5; i++)
            radios.push(
                <div className='radio'>
                    <label>
                        <input onChange={this.changeAnswer.bind(this,current,i)} type='radio' value={''+i} checked={i==currAnswer} name={'answers'+current} />
                        <img src={'data/'+(currpart+1)+'/'+levelletter+(currnum+1)+'.'+(i+1)+'.png'} />
                    </label>
                </div>
            );
        var shuffledRadios = [];
        for (var i=0; i<5; i++)
            shuffledRadios.push(radios[currShuffle[i]]);

        var pagination = [];
        for (var i = 0; i < length; i++) {
            var currClass = '';
            if (answers[i] != -1) currClass = 'success';
            if (current == i) currClass = 'active';
            pagination.push(
                <li className={currClass}>
                    <a onClick={this.changeCurrent.bind(this,i)} href='#'>{i+1}</a>
                </li>
            );
        }

        var button = null;
        if (current < length-1) {
            if (currAnswer == -1)
                button = <button onClick={this.changeCurrent.bind(this,current+1)} className='btn btn-default'>Пропустить</button>;
            else
                button = <button onClick={this.changeCurrent.bind(this,current+1)} className='btn btn-primary'>Далее</button>;
        }

        var modal = null;
        if (endWarning)
            modal = (
                <div className='modal show' role='dialog'>
                    <div className='modal-backdrop fade in' style={{height: document.body.scrollHeight+'px'}}></div>
                    <div className='modal-dialog modal-sm'>
                        <div className='modal-content'>
                            <div className='modal-header'>{data.testEndTest}</div>
                            <div className='modal-body'>
                                <button onClick={goResult} className='btn btn-primary'>{data.testYes}</button>
                                <button onClick={this.endTest.bind(this,false)} className='btn btn-default'>{data.testNo}</button>
                            </div>
                        </div>
                    </div>
                </div>
            );

        return (
            <div className='panel panel-primary'>
                <div className='panel-heading'>{data.testHeader}</div>
                <div className='panel-body' style={{minHeight: '450px'}}>
                    <h4>{data.testQustionWord}{current+1}{data.testOfWord}{length}</h4>
                    <img src={'data/'+(currpart+1)+'/'+levelletter+(currnum+1)+'.png'} />
                    {shuffledRadios}
                </div>
                <div className='panel-footer'>
                    <div>
                        {button}
                        <button onClick={this.endTest.bind(this,true)} className='btn btn-danger pull-right'>Завершить</button>
                    </div>
                    <ul className='pagination pagination-sm'>
                        <li className={current==0 ? 'disabled' : ''}>
                            <a onClick={this.changeCurrent.bind(this,current-1)} href='#'>
                                <span aria-hidden='true'>&laquo;</span>
                            </a>
                        </li>
                        {pagination}
                        <li className={current==length-1 ? 'disabled' : ''}>
                            <a onClick={this.changeCurrent.bind(this,current+1)} href='#'>
                                <span aria-hidden='true'>&raquo;</span>
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