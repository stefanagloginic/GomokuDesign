const Scoreboard = React.createClass({
	render(){
		return(
			<div>
				<h2 className="title">Scoreboard</h2>
				<div className="scoreboard">
					<div className="innerboard">
						<div className="win">
							<p>Win: </p> 
						</div>
						<div className="lose">
							<p>Lose: </p>
						</div>
					</div>
				</div>
			</div>
			);
	}
});

const Cell = React.createClass({
	getInitialState: function(){

	},

	render(){
		
	}
});

const Board = React.createClass({
	createBoard: function(){
		var board = [];
		var dict = {5:"cell_5", 6: "cell_6", 10:"cell_10", 11:"cell_11"};
		for(var i = 0; i < this.props.size; i++){
			var array_of_td = [];
			for(var j = 0; j < this.props.size; j++){
				array_of_td.push(<td className={"cell " + dict[this.props.size]}></td>);
			}
			board.push(<tr> { array_of_td } </tr>);
		}

		return board;
	},

	render(){
		return(
			<div className="table_wrapper">
				 <table className="row">
			        <tbody>{this.createBoard()}</tbody>
			    </table>
			</div>
			);
	}
});

const Options = React.createClass({
	getInitialState: function(){
		return{selectSize: 5};
	},

	handleSizeChange: function(event){
		this.setState({selectSize: event.target.value});
	},

	render(){
		return(
			<div className="wrapper">
				<Scoreboard />
				<div className="row">
					<Board size={ this.state.selectSize }/>		
					<div className="options">
						<p className="board_size_p">Board Size </p>
						<select className="board_size_option" value={this.state.selectSize} onChange={this.handleSizeChange}>
							<option className="size_5 size" value={5}>5 x 5</option>
							<option className="size_6 size" value={6}>6 x 6</option>
							<option className="size_10 size" value={10}>10 x 10</option>
							<option className="size_11 size" value={11}>11 x 11</option>
						</select>
						<p className="player">Player</p>
						<div className="icons row">
							<div className="font_icon o_icon">
								<i className="fa fa-circle-o fa-2x"></i>
							</div>
							<div className="font_icon x_icon">
								<i className="fa fa-times fa-2x"></i>
							</div>
						</div>
					</div>
				</div>
			</div>			
		);
	}
});

ReactDOM.render(<Options />, document.getElementById('main'));