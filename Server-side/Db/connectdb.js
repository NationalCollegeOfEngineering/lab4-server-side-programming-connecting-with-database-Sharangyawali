const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://peace:LZqva2izDa6S6Ykc@cluster0.sqeqcsi.mongodb.net/')
.then(()=>{
console.log('Database successfully connected')
})