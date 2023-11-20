"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const port = 3000;
//parsers
app.use(express_1.default.json());
app.use(express_1.default.text());
const userRouter = express_1.default.Router();
const courseRouter = express_1.default.Router();
app.use("/api/v1/users", userRouter);
app.use("/api/v1/courses", courseRouter);
userRouter.get('/create-user', (req, res) => {
    const user = req.body;
    console.log(user);
    res.json({
        success: true,
        message: "User is created successfully",
        data: user
    });
});
courseRouter.get('/create-course', (req, res) => {
    const course = req.body;
    console.log(course);
    res.json({
        success: true,
        message: "User is created successfully",
        data: course
    });
});
const logger = (req, res, next) => {
    console.log(req.url, req.method, req.hostname);
    next();
};
app.get('/:userId/:subId', logger, (req, res) => {
    console.log(req.params);
    res.send('Hello developers!');
});
// app.get('/', logger, (req: Request, res: Response) => {
//   console.log(req.query)
//   res.send('Hello developers!')
// })
app.get('/', logger, (req, res, next) => {
    const something = "something";
    try {
        res.send(something);
    }
    catch (error) {
        console.log(error);
        next(error);
    }
});
app.post('/', logger, (req, res) => {
    console.log(req.body);
    res.json({
        message: "successfully received"
    });
});
app.all("*", (req, res) => {
    res.status(400).json({
        success: false,
        message: "route not found"
    });
});
//global error handler
app.use((error, req, res, next) => {
    if (error) {
        res.status(400).json({
            success: false,
            message: "Something went wrong"
        });
    }
});
exports.default = app;
