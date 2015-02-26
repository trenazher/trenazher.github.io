var Result = React.createClass({
    propTypes: {
        data: React.PropTypes.object,
        tasks: React.PropTypes.array,
        answers: React.PropTypes.array,
        goSolves: React.PropTypes.func,
        goParts: React.PropTypes.func
    },
    render: function() {
        var data = this.props.data,
            tasks = this.props.tasks,
            answers = this.props.answers,
            goSolves = this.props.goSolves,
            goParts = this.props.goParts,
            levelBalls = data.levelBalls,
            length = tasks.length;
        var trueAnswers = tasks.map(function(item) {
            return data.db[item.part].keys[item.level][item.num];
        });

        var rows = [];
        var balls = 0;
        var maxball = 0;
        for (var i=0; i<length; i++) {
            var ball = levelBalls[tasks[i].level];
            maxball += ball;
            if (answers[i]+1==trueAnswers[i]) {
                rows.push(
                    <tr className="success">
                        <td>{i+1}</td>
                        <td><span className="glyphicon glyphicon-ok"></span> Верно</td>
                        <td>{ball}</td>
                    </tr>
                );
                balls += ball;
            } else
                rows.push(
                    <tr className="danger">
                        <td>{i+1}</td>
                        <td><span className="glyphicon glyphicon-remove"></span> Неверно</td>
                        <td>0</td>
                    </tr>
                );
        }


        return (
            <div className="panel panel-primary">
                <div className="panel-heading">{data.resultHeader}</div>
                <div className="panel-body">
                    <table className="table">
                        <tr>
                            <th>Номер вопроса</th>
                            <th>Результат</th>
                            <th>Полученный балл</th>
                        </tr>
                        {rows}
                    </table>
                    <p className="text-right"><strong>Итого {balls} из {maxball}</strong></p>
                </div>
                <div className="panel-footer"><div>
                    <button onClick={goSolves} className="btn btn-default">Просмотреть верные ответы</button>
                    <button onClick={goParts} className="btn btn-primary pull-right">Вернуться</button>
                </div></div>
            </div>
        );
    }
});