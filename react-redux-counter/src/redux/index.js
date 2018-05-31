/**
 * Created by ZJ on 2018/5/29.
 */
export default function createStore(reducer) {
    let state,listener=[],getState,subscribe,dispatch;
    dispatch=(action)=>{
        state=reducer(state,action);
        listener.forEach(item=>item());
    };
    dispatch({});
    subscribe=(fn)=>{
        listener=[...listener,fn];
        return ()=>{listener.filter(item=>item!==fn)};
    }
    getState=()=>(JSON.parse(JSON.stringify(state)));
    return {subscribe,getState,dispatch};
}