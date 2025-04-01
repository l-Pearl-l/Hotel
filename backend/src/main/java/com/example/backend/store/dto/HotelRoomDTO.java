package com.example.backend.store.dto;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import java.util.List;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@JsonInclude(JsonInclude.Include.NON_NULL)
public class HotelRoomDTO{

    @JsonProperty("choose_room")
    private String chooseRoom;

    @JsonProperty("arrival_date")
    private String arrivalDate;

    @JsonProperty("departure_date")
    private String departureDate;

    @JsonProperty("number_of_adults")
    private int numberOfAdults;

    @JsonProperty("number_of_children")
    private int numberOfChildren;

    @JsonProperty("group_additional_services")
    private List<String> groupAdditionalServices;

    @JsonProperty("price_choose_room")
    private int priceChooseRoom;

    @JsonProperty("price_additional_services")
    private int priceAdditionalServices;

    @JsonProperty("total_price")
    private int totalPrice;

    @JsonProperty("name_guest")
    private String nameGuest;

    @JsonProperty("surname_guest")
    private String surnameGuest;

    @JsonProperty("patronymic_guest")
    private String patronymicGuest;

    @JsonProperty("phone")
    private String phone;

    @JsonProperty("number_bank_card")
    private String numberBankCard;

    @JsonProperty("validity_period")
    private String validityPeriod;

    @JsonProperty("cvv")
    private String cvv;

    @JsonProperty("is_busy")
    private boolean isBusy;

}

