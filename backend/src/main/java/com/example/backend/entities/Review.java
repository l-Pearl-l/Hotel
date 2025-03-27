package com.example.backend.entities;

import jakarta.persistence.*;
import lombok.*;

@Setter
@Getter
@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "reviews")
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;

    @Column(name = "review", columnDefinition = "TEXT")
    private String review;

    @Column(name = "date")
    private String date;

    @Column(name = "numberOfStars")
    private String numberOfStars;
}
