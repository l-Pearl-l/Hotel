package com.example.backend.services;

import com.example.backend.dto.HotelRoomDTO;
import com.example.backend.dto.HotelRoomDateDTO;
import com.example.backend.entities.HotelRoom;
import com.example.backend.repositories.HotelRoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.time.LocalDate;
import java.util.List;


@Service
public class HotelRoomService {


    @Autowired
    private final HotelRoomRepository hotelRoomRepository;


    public HotelRoomService(HotelRoomRepository hotelRoomRepository){
        this.hotelRoomRepository = hotelRoomRepository;
    }

    public void bookHotelRoom(HotelRoom hotelRoom){
        hotelRoom.setIsBusy("1");
        hotelRoomRepository.save(hotelRoom);
    }

    public List<HotelRoomDTO> checkIsBusyHotelRoom(){
        LocalDate timeNow = LocalDate.now();
        HotelRoom room = new HotelRoom();
        for(HotelRoomDateDTO roomDateDTO : hotelRoomRepository.findCheckInTime()){
            if(LocalDate.parse(roomDateDTO.getDepartureDate()).isBefore(timeNow)){
                room.setChooseRoom(roomDateDTO.getChooseRoom());
                hotelRoomRepository.delete(room);
            }
        }
        return hotelRoomRepository.findAvailableHotelRoom();
    }

}
