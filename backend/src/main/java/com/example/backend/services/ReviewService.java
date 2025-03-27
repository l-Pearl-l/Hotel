package com.example.backend.services;


import com.example.backend.entities.Review;
import com.example.backend.repositories.ReviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReviewService {

    @Autowired
    private ReviewRepository reviewRepository;

    public ReviewService(ReviewRepository reviewRepository){
        this.reviewRepository = reviewRepository;
    }

    public void saveReview(Review review){
        reviewRepository.save(review);
    }

    public List<Review> getReviews(){
        return reviewRepository.findAll();
    }

}


