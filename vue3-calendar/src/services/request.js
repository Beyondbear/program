import { axiosGet } from '@/libs/http.js'

// 获取当天的数据
const getDayData = date => {
    return new Promise((resolve,reject) => {
        axiosGet({
            url:'/api/calendar/day',
            data:{
                'date':date
            },
            success:function(data){
                resolve(data)
            },
            error:function(err){
                reject(err)
            }
        })
    })
}

// 获取近期假期
const getMonthData = yearMonth => {
    return new Promise((resolve,reject) => {
        axiosGet({
            url:'/api/calendar/month',
            data:{
                'year-month':yearMonth
            },
            success:function(data){
                resolve(data)
            },
            error:function(err){
                reject(err)
            }
        })
    })
}

// 获取当年假期
const getYearData = year => {
    return new Promise((resolve,reject) => {
        axiosGet({
            url:'/api/calendar/year',
            data:{
                'year':year
            },
            success:function(data){
                resolve(data)
            },
            error:function(err){
                reject(err)
            }
        })
    })
}

export {
    getDayData,
    getMonthData,
    getYearData
}