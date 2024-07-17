package com.assignment.dashboard.service;

import com.assignment.dashboard.dto.AnalyticsDto;

public interface AnalyticsService {
    AnalyticsDto getAnalyticsByUserId(Long userId);
    AnalyticsDto saveAnalytics(AnalyticsDto analyticsDto);
}
