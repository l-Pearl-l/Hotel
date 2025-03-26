package com.example.backend.controllers;

import com.example.backend.dto.HotelRoomDTO;
import com.example.backend.entities.HotelRoom;
import com.example.backend.services.HotelRoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@CrossOrigin(origins = "http://127.0.0.1:5500")
@RestController
@RequestMapping("/hotel")
public class MainController {

    @Autowired
    private final HotelRoomService hotelRoomService;

    public MainController(HotelRoomService hotelRoomService){
        this.hotelRoomService = hotelRoomService;
    }

    @GetMapping("/isBusy")
    public List<HotelRoomDTO> returnIsBusyHotelRoom() {
        return hotelRoomService.checkIsBusyHotelRoom();
    }

    @PostMapping("/checkIn")
    public String saveChooseRoom(@RequestBody HotelRoom hotelRoom){
        hotelRoomService.bookHotelRoom(hotelRoom);
        return "200";
    }

}
