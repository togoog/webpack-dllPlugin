import React , {Component} from 'react'
import { render } from 'react-dom'
import { createStore , combineReducers , applyMiddleware } from 'redux'
import { connect , Provider} from 'react-redux'
import thunk from 'redux-thunk'
const ajaxIsSuccess = (state = {status:'',list : []},action) => {
    switch(action.type){
        case 'start':
            return Object.assgin({},state,{status:'start'});
            break;
        case 'success':
            state.list.push(action.text)
            return Object.assign({},{list:state.list},{status:'finish'});
            break;
        case 'success':
            state.list.push(action.text)
            return Object.assign({},{status:'fail'});
            break;
        default:
            return state;
            break;
    }
}

const Ajax = ({url,method}) => {
    return new Promise((resolve , reject)=>{
        let xhr = new XMLHttpRequest()
        xhr.open(method,url)
        xhr.send(null)
        xhr.onreadystatechange = function(){
            if( xhr.status===(200 || 304)){
                if(xhr.readyState === 4){
                    var res = JSON.parse(xhr.responseText)
                    resolve(res)
                }
            }else{
                reject(err)
            }
        }
    })
}

let middleWare = applyMiddleware(thunk)

let store = middleWare(createStore)(combineReducers({
    ajaxIsSuccess
}))


class GetInfo extends Component{
    constructor(props){
        super(props)
        const { value , getInfo } = this.props
        setTimeout(()=>{
            // getInfo()
        },1500)
    }
    render(){
        const { value , getInfo } = this.props
        let Message
        console.log(this.props)
        if(value.status=='finish'){
            Message = (
                <div>数据加载完成</div>
            )
        }else if(value.status=='fail'){
            Message = <div>数据加失败</div>
        }else{
            Message = <div>数据加在中</div>
        }
        return (
            <div>
                <div onClick={getInfo}>click</div>
                {value.list.map((value,index)=>{
                    return (<div key={index}>{value.title}</div>)
                })}
                {Message}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        value:state.ajaxIsSuccess
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getInfo:()=>{
            store.dispatch(getAjax(Ajax));
        }
    }
}

function getAjax(Ajax){
    return (dispatch, getState)=>{
        let info = Ajax({url:'http://localhost:8888/newList',method:'get'}).then((info)=>{
            dispatch({
                type:'success',
                text:info
            })
        }).catch((err)=>{
            dispatch({
                type:'err',
                text:err
            })
        })
    }

}


const App = connect(
    mapStateToProps,
    mapDispatchToProps
)(GetInfo)



render(
<Provider store = {store}>
    <App />
</Provider>,
document.getElementById('root')
)

