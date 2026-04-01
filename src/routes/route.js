import express from "express";
import { reqOtp } from "../controllers/otpController/reqOtp.js";

const router = express.Router();


router.get("/test", (req,res)=>{
    res.json({routing: "ok"})
})

router.post("/reqotp", reqOtp);

import { verifyOtp } from "../controllers/otpController/reqOtp.js";
import { signup, login } from "../controllers/authController.js";

router.post("/verifyotp", verifyOtp);


router.post("/signup", signup);
router.post("/signin", login);



export default router;