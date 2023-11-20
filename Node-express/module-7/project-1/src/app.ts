import express, { NextFunction, Request, Response } from 'express'
const app = express()
const port = 3000

//parsers
app.use(express.json());
app.use(express.text());

const userRouter = express.Router()
const courseRouter = express.Router()

app.use("/api/v1/users", userRouter)
app.use("/api/v1/courses", courseRouter)

userRouter.get('/create-user', (req: Request, res: Response) => {
  const user = req.body;
  console.log(user)

  res.json({
    success: true,
    message: "User is created successfully",
    data: user
  })
})

courseRouter.get('/create-course', (req: Request, res: Response) => {
  const course = req.body;
  console.log(course)

  res.json({
    success: true,
    message: "User is created successfully",
    data: course
  })
})

const logger = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.url, req.method, req.hostname);
  next();
}

app.get('/:userId/:subId', logger, (req: Request, res: Response) => {
  console.log(req.params)
  res.send('Hello developers!')
})

// app.get('/', logger, (req: Request, res: Response) => {
//   console.log(req.query)
//   res.send('Hello developers!')
// })
app.get('/', logger, (req: Request, res: Response, next: NextFunction) => {
  try {
    res.send(something);
  } catch (error) {
    console.log(error);
    next(error)
  }
})

app.post('/', logger, (req: Request, res: Response) => {
  console.log(req.body);
  res.json({
    message: "successfully received"
  })
})

app.all("*", (req: Request, res: Response) => {
  res.status(400).json({
    success: false,
    message: "route not found"
  })
})

//global error handler
app.use((error: any, req: Request, res: Response, next:NextFunction) => {
  if(error){
    res.status(400).json({
      success: false,
      message: "Something went wrong"
    })
  }
})

export default app;