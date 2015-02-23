    result: function(){
        var header = this.props.header;
        var name = this.props.name;
        var length = this.props.data.questionsCount;
        var answers = this.state.answers;
        var trueAnswers = this.props.data.trueAnswers;

        var rows = [];
        var balls = 0;
        for (var i=0; i<length; i++)
            if (answers[i]==trueAnswers[i]) {
                rows.push(
                    <tr className="success">
                        <td>{i+1}</td>
                        <td><span className="glyphicon glyphicon-ok"></span> Верно</td>
                    </tr>
                );
                ++balls;
            } else
                rows.push(
                    <tr className="danger">
                        <td>{i+1}</td>
                        <td><span className="glyphicon glyphicon-remove"></span> Неверно</td>
                    </tr>
                );

        return (
            <div className="panel panel-primary">
                <div className="panel-heading">{header}"{name}"</div>
                <div className="panel-body">
                    <h4>Результат тестирования</h4>
                    <br/>
                    <table className="table">
                        <tr>
                            <th>Номер вопроса</th>
                            <th>Результат</th>
                        </tr>
                        {rows}
                    </table>
                    <p className="text-right"><strong>Итого {balls} баллов из {length}</strong></p>
                </div>
                <div className="panel-footer"><div>
                    <button onClick={this.changeCurrent.bind(this,-2)} className="btn btn-default">Просмотреть верные ответы</button>
                    <button onClick={this.props.end} className="btn btn-primary pull-right">Вернуться</button>
                </div></div>
            </div>
        );
    },