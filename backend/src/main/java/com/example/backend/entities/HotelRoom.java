package com.example.backend.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;

@Data
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "hotelRooms")
public class HotelRoom {

    @Id
    private String chooseRoom;
    private String arrivalDate;
    private String departureDate;
    private String numberOfAdults;
    private String numberOfChildren;
    private String isBusy;

    @Override
    public String toString() {
        return "HotelRoom{" +
                "chooseRoom='" + chooseRoom + '\'' +
                ", arrivalDate='" + arrivalDate + '\'' +
                ", departureDate='" + departureDate + '\'' +
                ", numberOfAdults='" + numberOfAdults + '\'' +
                ", numberOfChildren='" + numberOfChildren + '\'' +
                '}';
    }
}
