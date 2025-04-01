package com.example.backend.store.services;

import com.example.backend.store.dto.HotelRoomDTO;
import com.example.backend.store.entities.HotelRoom;
import com.example.backend.store.repositories.HotelRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;



@Service
public class HotelRoomService {


    @Autowired
    private final HotelRoomRepository hotelRoomRepository;


    public HotelRoomService(HotelRoomRepository hotelRoomRepository){
        this.hotelRoomRepository = hotelRoomRepository;
    }

    public void bookHotelRoom(HotelRoom hotelRoom){
        hotelRoomRepository.save(hotelRoom);
    }

    public List<HotelRoomDTO> checkIsBusyHotelRoom(){
        List<Object[]> data = hotelRoomRepository.findAvailableHotelRoom();
        List<HotelRoomDTO> rooms = data.stream().map(room -> HotelRoomDTO.builder()
                                                    .chooseRoom((String) room[0])
                                                    .departureDate((String) room[1])
                                                    .build())
                                                    .toList();
        return rooms;
    }

}
