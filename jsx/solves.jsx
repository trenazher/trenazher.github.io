    rightAnswers: function(){
        var header = this.props.header;
        var name = this.props.name;
        var length = this.props.data.questionsCount;
        var index = this.props.index;
        var trueAnswers = this.props.data.trueAnswers;

        var elems = [];
        for (var i=0; i<length; i++) {
            elems.push(
                <div className="panel panel-default">
                    <div className="panel-heading">Воспрос {i+1}</div>
                    <div className="panel-body">
                        <img src={"data/"+index+"/demotest/"+(i+1)+"/question.png"} /><br/>
                        <u><strong>Ответ:</strong></u>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={"data/"+index+"/demotest/"+(i+1)+"/answer"+(trueAnswers[i]+1)+".png"} />
                    </div>
                </div>
            );
        };
        
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">{header}"{name}"</div>
                <div className="panel-body">
                    <h4>Верные ответы теста</h4>
                    {elems}
                </div>
                <div className="panel-footer"><div>
                    <button onClick={this.changeCurrent.bind(this,-1)} className="btn btn-default">Просмотреть результаты</button>
                    <button onClick={this.props.end} className="btn btn-primary pull-right">Вернуться</button>
                </div></div>
            </div>
        );
    },