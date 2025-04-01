package com.example.backend.store.repositories;

import com.example.backend.store.dto.HotelRoomDTO;
import com.example.backend.store.entities.HotelRoom;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.util.List;

@Repository
public interface HotelRoomRepository extends JpaRepository<HotelRoom, String> {

    @Query("SElECT hr.chooseRoom, hr.departureDate FROM HotelRoom AS hr WHERE hr.isBusy = true")
    List<Object[]> findAvailableHotelRoom();
}
