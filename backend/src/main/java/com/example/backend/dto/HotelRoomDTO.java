package com.example.backend.dto;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;

@Getter
public class HotelRoomDTO {

    @JsonProperty("chooseRoom")
    private String chooseRoom;

    @JsonProperty("isBusy")
    private String isBusy;

    public HotelRoomDTO(String chooseRoom, String isBusy){
        this.chooseRoom = chooseRoom;
        this.isBusy = isBusy;
    }

    @Override
    public String toString() {
        return "{" +
                "chooseRoom:'" + chooseRoom + '\'' +
                ", isBusy:'" + isBusy + '\'' +
                '}';
    }
}

