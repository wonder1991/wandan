const date = new Date()
const years = []
const months = []
const days  = []

for(let i=1990;i<date.getFullYear();i++){
    years.push(i);
}

for(let i=1;i<=12;i++){
    months.push(i);
}

for(let i=1;i<=31;i++){
    days.push(i);
}

Page({
    data:{
        array:['中国','aaa','bbb'],
        index:0,
        time:"11:00",
        dates:"2017-01-13",
        years:years,
        year:date.getFullYear(),
        months:months,
        month:2,
        days:days,
        day:2,
        value:[1999,1,1]
    },
    bindPickerChange:function(e){
        this.setData({
            index:e.detail.value
        })
    },
    bindTimeChange:function(e){
        this.setDate({
            time:e.detail.value
        })
    },
    bindDateChange:function(e){
        this.setData({
            date:e.detail.value
        })
    },
    bindChangeView:function(e){
        const val =e.detail.value
        this.setData({
            year:this.data.years[val[0]],
            month:this.data.months[val[1]],
            day:this.data.days[val[2]]
        })
    }

})