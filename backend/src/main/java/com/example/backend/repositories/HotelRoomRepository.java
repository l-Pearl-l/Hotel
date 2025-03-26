package com.example.backend.repositories;

import com.example.backend.dto.HotelRoomDTO;
import com.example.backend.dto.HotelRoomDateDTO;
import com.example.backend.entities.HotelRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface HotelRoomRepository extends JpaRepository<HotelRoom, String> {

    @Query("SElECT new com.example.backend.dto.HotelRoomDTO(hr.chooseRoom, hr.isBusy) FROM HotelRoom AS hr WHERE hr.chooseRoom != '' and hr.isBusy = '1'")
    List<HotelRoomDTO> findAvailableHotelRoom();

    @Query("SELECT new com.example.backend.dto.HotelRoomDateDTO(hr.chooseRoom, hr.departureDate) FROM HotelRoom AS hr WHERE hr.isBusy = '1'")
    List<HotelRoomDateDTO> findCheckInTime();

}
