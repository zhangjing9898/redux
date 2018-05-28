/**
 * Created by ZJ on 2018/5/28.
 */
function createStore(reducer) {
    let state,listener=[],getState,dispatch,subscribe;
    dispatch=(action)=>{
        state=reducer(state,action);
        listener.forEach(item=>item());
    };
    dispatch({});
    subscribe=(fn)=>{
        listener=[...listener,fn];
        return ()=>{
            listener=listener.filter(item=>item!=fn)
        }
    };
    getState=()=>(JSON.parse(JSON.stringify(state)));
    return {dispatch,getState,subscribe}
}