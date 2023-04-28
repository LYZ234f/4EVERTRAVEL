import express from "express";
import {  createTour, 
          updateTour, 
          deleteTour, 
          getSingleTour, 
          getAllTour, 
          getTourBySearch, 
          getFeaturedTour, 
          getTourCount} from "../controllers/tourController.js";
import { verifyAdmin } from "../utils/verifyToken.js";

const router = express.Router()

//create new tour
router.post('/',verifyAdmin,createTour)

//update  tour
router.put('/:id',verifyAdmin,updateTour)

//delete  tour
router.delete('/:id',verifyAdmin,deleteTour)

//getSingle  tour
router.get('/:id',getSingleTour)

//getAll  tour
router.get('/',getAllTour)

//get tour by search
router.get('/search/getTourBySearch',getTourBySearch)
router.get('/search/getFeaturedTours',getFeaturedTour)
router.get('/search/getTourCounts',getTourCount)

export default router;