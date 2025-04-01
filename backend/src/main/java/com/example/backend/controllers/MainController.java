package com.example.backend.controllers;

import com.example.backend.store.dto.HotelRoomDTO;
import com.example.backend.store.entities.HotelRoom;
import com.example.backend.store.entities.Review;
import com.example.backend.store.services.HotelRoomService;
import com.example.backend.store.services.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/hotel")
public class MainController {

    @Autowired
    private final HotelRoomService hotelRoomService;
    @Autowired
    private final ReviewService reviewService;

    public MainController(HotelRoomService hotelRoomService, ReviewService reviewService){
        this.hotelRoomService = hotelRoomService;
        this.reviewService = reviewService;
    }

    @GetMapping("/isBusy")
    public List<HotelRoomDTO> returnIsBusyHotelRoom() {
        return hotelRoomService.checkIsBusyHotelRoom();
    }

    @GetMapping("/reviews")
    public List<Review> getReviews(){
        return reviewService.getReviews();
    }

    @PostMapping("/checkIn")
    public String saveChooseRoom(@RequestBody HotelRoom hotelRoom){
        System.out.println(hotelRoom.toString());
//        hotelRoomService.bookHotelRoom(hotelRoom);
        return "200";
    }

    @PostMapping("/writeReview")
    public String saveReview(@RequestBody Review review){
        reviewService.saveReview(review);
        return "200";
    }
}
