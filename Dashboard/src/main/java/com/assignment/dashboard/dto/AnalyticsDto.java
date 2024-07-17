package com.assignment.dashboard.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class AnalyticsDto {
    private Long id;
    private int accountReached;
    private int accountEngaged;
    private int adsRun;
    private int activePromotions;
    private int totalStories;

    // Getters and Setters
}

