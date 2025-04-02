package com.example.backend.store.services;

import com.example.backend.store.dto.HotelRoomDTO;
import com.example.backend.store.entities.HotelRoom;
import com.example.backend.store.repositories.HotelRoomRepository;
import org.mindrot.jbcrypt.BCrypt;
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
        hotelRoom.setCvv(BCrypt.hashpw(hotelRoom.getCvv(), BCrypt.gensalt()));
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

    public void deleteRoomFreeExpired(){
        List<Object[]> data = hotelRoomRepository.findAvailableHotelRoom();
        List<HotelRoomDTO> rooms = data.stream().map(room -> HotelRoomDTO.builder()
                                                                                 .chooseRoom((String) room[0])
                                                                                 .departureDate((String) room[1])
                                                                                 .build()).toList();
        LocalDate dateNow = LocalDate.now();
        for(HotelRoomDTO room : rooms) {
            LocalDate dateDeparture = LocalDate.parse(room.getDepartureDate());
            if (dateNow.isAfter(dateDeparture)) {
                HotelRoom hotelRoom = new HotelRoom();
                hotelRoom.setChooseRoom(room.getChooseRoom());
                hotelRoomRepository.delete(hotelRoom);
            }
        }
    }
}
