import React ,{Component}from 'react'
import {HashRouter as Router, Route, Link,Switch,Redirect} from 'react-router-dom'


const Home = () => {
	return (<div>home</div>)
}

class Home1 extends Component{
	constructor(){
		super()
		console.log('constructor')
		this.state = {
			name:'lpc'
		}
	}
	componentWillMount(){
		console.log('componentWillMount')
		// setTimeout(()=>{
			// this.setState({
			// 	name:'yy'
			// })
		// },2000)
	}
	componentDidMount(){
		console.log('componentDidMount')
	}
	componentWillUpdate(){
		console.log('componentWillUpdatet')
	}
	componentDidUpdate(){
		console.log('componentDidUpdate')
	}
	shouldComponentUpdate(){
		return true
	}
	componentWillReceiveProps(newProps){
		console.log({'oldProps':this.props})
		console.log({'newProps':newProps})
		this.setState({
			name:'yy'
	 	})
	}
	render(){
		console.log('render')
		return(
			<div>
				{this.state.name}
				{this.props.age}
			</div>
		)
	}
}

class HomeBig extends Component{
	constructor(){
		super()
		this.state= {
			age:25
		}
	}
	componentWillMount(){
		setTimeout(()=>{
			this.setState({
				age:15
			})
		},2000)
	}
	render(){
		return(
			<div>
				{this.state.age}
				<Home1 age={this.state.age} />
			</div>
		)
	}
}

const Home2 = () => {
	return (<div>home2</div>)
}
class Page1 extends Component{
	constructor(props){
		super()
		console.log(props.match.params.id)
		console.log(props.match.params.name)
	}
	render(){
		return(
			<div>
				this is page1
				<Link to="/page1/page2">Page2</Link>
				<Route path="/page1/page2" component={Home2}/>
			</div>
		)
	}
}

const Page2 = () => {
	return (<div>Page2</div>)
}

class App extends Component{
	render(){
		return (
			<Router>
			    <div>
			      <ul>
			        <li><Link to="/">Home</Link></li>
			        <li><Link to="/page1">Page1</Link></li>
			        <li><Link to="/page2">Page2</Link></li>
			      </ul>

			      <hr/>
					<Switch>
			      <Route exact path="/" component={HomeBig}/>
			      <Route path="/page1" component={Page1}/>
			      <Route path="/page2" component={Page2}/>
 				<Redirect to="/" />
			      </Switch>
			    </div>
			  </Router>
		)
	}
}



module.exports = App