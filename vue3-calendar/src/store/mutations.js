export default{
    setHeaderTitle(state,routerName){
        switch(routerName){
            case 'day':
                state.headerTitle="当天信息"
                break
            case 'month':
                state.headerTitle="近期假期"
                break
            case 'year':
                state.headerTitle="当年假期"
                break
            default:
                state.headerTitle='当天信息'
                break
        }
    },
    setPlaceholder(state,routeName){
        const date =new Date();
        const year=date.getFullYear();
        const month=(date.getMonth()+1).toString().padStart(2,'0');
        const day=date.getDate().toString().padStart(2,'0');
        switch(routeName){
            case 'day':
                state.placeholder=`格式:${year}${month}${day}(${year}年${month}月${day}日)`
                break
            case 'month':
                state.placeholder=`格式:${year}${month}(${year}年${month}月)`
                break
            case 'year':
                state.placeholder=`格式:${year}(${year}年)`
                break
            default:
                state.placeholder=`格式:${year}${month}${day}(${year}年${month}月${day}日)`
                break

        }
    },
    setMaxlength(state,routeName){
        switch(routeName){
            case 'day':
                state.maxlength=8
                break
            case 'month':
                state.maxlength=6
                break
            case 'year':
                state.maxlength=4
                break
            default:
                state.maxlength=8
                break
        }
    },
    setField(state,routerName){
        state.field=routerName;
    }  
}