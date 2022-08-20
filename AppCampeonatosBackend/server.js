const { app } = require('./app');

//utils
const { sequelize } = require('./util/database');

sequelize
    .authenticate()
    .then(() => console.log('Database connected...'))
    .catch(err => console.log(err));


//TODO: init models


sequelize
    .sync()
    .then(() => console.log('Database synced'))
    .catch((err) => console.log(err));
    



const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});