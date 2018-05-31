/**
 * Created by ZJ on 2018/5/29.
 */
import React from 'react';
import ReactDom from 'react-dom';
import createStore from "./redux/index"
//1.定义功能常量
const INCREMENT="increment";
const DECREMENT="decrement";

//2.创建一个reducer，传参数的时候需要传一个初始的状态值
function reducer(state={number:0},action) {
    switch (action.type){
        case INCREMENT:
            return {number:state.number+action.count}
        case DECREMENT:
            return {number:state.number-action.count}
        default:
            return state;
    }
}

//3.创建一个管理状态状态容器
let store=createStore(reducer);

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state={
            number:0
        }
    }
    componentDidMount(){
        //将管理的状态映射到 组件自己的状态
        //使用 订阅
        let fn=()=>{
            this.setState({
                number:store.getState().number
            })
        };
        this.unSubscribe=store.subscribe(fn);
    }
    componentWillUnmount(){
        //组件销毁 取消订阅
        this.unSubscribe();
    }
    render(){
        return (
            <div>
                <button onClick={()=>{store.dispatch({type:INCREMENT,count:3})}}>+</button>
                <span>{this.state.number}</span>
                <button onClick={()=>{store.dispatch({type:DECREMENT,count:1})}}>-</button>
            </div>
        )
    }
}

ReactDom.render(<Counter/>,document.getElementById("root"));