const mongoose = require('mongoose')
var url
if (process.env.NODE_ENV === 'production') {
    url = process.env.urlKey
} else {
    url = require('../keys').clusterUrl
}
mongoose.connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
})