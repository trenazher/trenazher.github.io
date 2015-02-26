
var Solves = React.createClass({
    propTypes: {
         data: React.PropTypes.object,
         tasks: React.PropTypes.array,
         goResult: React.PropTypes.func,
         goParts: React.PropTypes.func
    },
    render: function(){
        var goResult = this.props.goResult;
        var goParts = this.props.goParts;
        var tasks = this.props.tasks;
        var trueAnswers = tasks.map(function(item) {
            return data.db[item.part].keys[item.level][item.num];
        });

        var elems = [];
        for (var i=0; i<tasks.length; i++) {
            var currtask = tasks[i];
            var currpart = currtask.part;
            var currlevel = currtask.level; 
            var levelletter = 'abc'.charAt(currlevel);
            var currnum = currtask.num;
            elems.push(
                <div className="panel panel-default">
                    <div className="panel-heading">Воспрос {i+1}</div>
                    <div className="panel-body">
                        <img src={'data/'+(currpart+1)+'/'+levelletter+(currnum+1)+'.png'} /><br/>
                        <u><strong>Ответ:</strong></u>&nbsp;&nbsp;&nbsp;&nbsp;
                        <img src={'data/'+(currpart+1)+'/'+levelletter+(currnum+1)+'.'+trueAnswers[i]+'.png'} />
                    </div>
                </div>
            );
        };
        
        return (
            <div className="panel panel-primary">
                <div className="panel-heading">Верные ответы теста</div>
                <div className="panel-body">
                    {elems}
                </div>
                <div className="panel-footer"><div>
                    <button onClick={goResult} className="btn btn-default">Просмотреть результаты</button>
                    <button onClick={goParts} className="btn btn-primary pull-right">Вернуться</button>
                </div></div>
            </div>
        );
    }
});