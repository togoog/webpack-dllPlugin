import React ,{Component}from 'react'
import {HashRouter as Router, Route, Link,Switch,Redirect} from 'react-router-dom'


const Home = () => {
	return (<div>home</div>)
}
const Home1 = () => {
	return (<div>home1</div>)
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
			      <Route exact path="/" component={Home}/>
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