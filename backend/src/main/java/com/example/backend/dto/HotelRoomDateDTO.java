package com.example.backend.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class HotelRoomDateDTO {

    @JsonProperty("chooseRoom")
    private String chooseRoom;
    @JsonProperty("departureDate")
    private String departureDate;


    public HotelRoomDateDTO(String chooseRoom, String departureDate){
        this.chooseRoom = chooseRoom;
        this.departureDate = departureDate;
    }

    @Override
    public String toString() {
        return
                "{chooseRoom='" + chooseRoom + '\'' +
                ", departureDate='" + departureDate + '\'' +
                '}';
    }
}
