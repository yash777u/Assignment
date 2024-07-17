package com.assignment.dashboard.service.impl;

import com.assignment.dashboard.dto.AnalyticsDto;
import com.assignment.dashboard.entity.Analytics;
import com.assignment.dashboard.repository.AnalyticsRepository;
import com.assignment.dashboard.service.AnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.assignment.dashboard.mapper.*;

@Service
public class AnalyticsServiceImpl implements AnalyticsService {

    @Autowired
    private AnalyticsRepository analyticsRepository;

    @Autowired
    private AnalyticsMapper analyticsMapper;

    @Override
    public AnalyticsDto getAnalyticsByUserId(Long userId) {
        Analytics analytics = analyticsRepository.findByUserId(userId);
        return analyticsMapper.analyticsToAnalyticsDto(analytics);
    }

    @Override
    public AnalyticsDto saveAnalytics(AnalyticsDto analyticsDto) {
        Analytics analytics = analyticsMapper.analyticsDtoToAnalytics(analyticsDto);
        Analytics savedAnalytics = analyticsRepository.save(analytics);
        return analyticsMapper.analyticsToAnalyticsDto(savedAnalytics);
    }
}
