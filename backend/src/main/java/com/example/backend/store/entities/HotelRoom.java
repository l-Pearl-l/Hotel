package com.example.backend.store.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.*;
import java.util.List;

@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "test_hotel_rooms")
public class HotelRoom {

    @Id
    private String chooseRoom;
    private String arrivalDate;
    private String departureDate;
    private String numberOfAdults;
    private String numberOfChildren;
    private List<String> groupAdditionalServices;
    private String priceChooseRoom;
    private String priceAdditionalServices;
    private String nameGuest;
    private String surnameGuest;
    private String patronymicGuest;
    private String phone;
    private String numberBankCard;
    private String validityPeriod;
    private String cvv;
    private String totalPrice;
    private String isBusy;

    @Override
    public String toString() {
        return "HotelRoom{" +
                "chooseRoom='" + chooseRoom + '\'' +
                ", arrivalDate='" + arrivalDate + '\'' +
                ", departureDate='" + departureDate + '\'' +
                ", numberOfAdults=" + numberOfAdults +
                ", numberOfChildren=" + numberOfChildren +
                ", groupAdditionalServices=" + groupAdditionalServices +
                ", priceChooseRoom=" + priceChooseRoom +
                ", priceAdditionalServices=" + priceAdditionalServices +
                ", nameGuest='" + nameGuest + '\'' +
                ", surnameGuest='" + surnameGuest + '\'' +
                ", patronymicGuest='" + patronymicGuest + '\'' +
                ", phone='" + phone + '\'' +
                ", numberBankCard='" + numberBankCard + '\'' +
                ", validityPeriod='" + validityPeriod + '\'' +
                ", cvv='" + cvv + '\'' +
                ", totalPrice=" + totalPrice +
                ", isBusy=" + isBusy +
                '}';
    }
}
