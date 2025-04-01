package com.example.backend.store.services;


import com.example.backend.store.entities.Review;
import com.example.backend.store.repositories.ReviewRepository;
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


