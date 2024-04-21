const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const port = 3001; // 确保端口不与其他服务冲突

app.get('/search/school/:schoolName', (req, res) => {
    const { schoolName } = req.params;
    res.json({
        status: 200,
        data: {
            SchoolId: 1,
            SchoolName: schoolName,  // 动态返回请求中的 schoolName
            Location: 'Random City',
            AdmissionRate: 80,
            GPA: 3.5,
            GRE: 300
        }
    });
});

app.get('/search/program/:programName', (req, res) => {
    const { programName } = req.params;
    res.json({
        status: 200,
        data: [{SchoolName:"UIUC", Cost:2000}, {SchoolName:"UM", Cost:5000}, {SchoolName:"UCB", Cost:15000}]
    });
});

app.post('/rank', (req, res) => {
    res.json({
        rank: 5
    });
});


app.post('/rec', (req, res) => {
    res.json({
        data: [{
            SchoolId: 1,
            SchoolName: "UIUC",  // 动态返回请求中的 schoolName
            Location: 'Random City',
            AdmissionRate: 80,
            GPA: 3.5,
            GRE: 300
        }]
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});