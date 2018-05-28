/**
 * Created by ZJ on 2018/5/28.
 */
//1.定义功能类型的常量
const INCREMENT="increment";
const DECREMENT="decrement";
//2.定义初始状态，创建reducer函数，将初始状态传给参数state的默认值。
let initState={
    number:0
}

function reducer(state=initState,action) {
    switch (action.type){
        case INCREMENT:
            return {number:state.number+action.num};
            break;
        case DECREMENT:
            return {number:state.number-action.num};
            break;
    }
    return state;
}

//3.创建状态容器,将reducer传进去
let store=createStore(reducer)

//4.默认渲染一次 在react里面 默认自己渲染 有render()
function render() {
    let number=document.getElementById("number");
    number.innerHTML=store.getState().number;
}
render();

//5.派发功能的动作  修改状态
let add=document.getElementById("add");
let minus=document.getElementById("minus");

add.addEventListener("click",function () {
    store.dispatch({type:INCREMENT,num:3})
});
minus.addEventListener("click",function () {
    store.dispatch({type:DECREMENT,num:1})
});

//6.订阅事件
store.subscribe(render);

