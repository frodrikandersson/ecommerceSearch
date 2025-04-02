import express from "express";
import { createStripeHosted, getStripeSession } from "../controllers/stripeController";
const router = express.Router();
//@ts-ignore
router.post("/create-checkout-session-hosted", createStripeHosted);
//@ts-ignore
router.get("/stripe-session/:sessionId", getStripeSession); 

export default router