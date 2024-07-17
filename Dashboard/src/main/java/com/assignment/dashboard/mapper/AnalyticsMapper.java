package com.assignment.dashboard.mapper;

import com.assignment.dashboard.dto.AnalyticsDto;
import com.assignment.dashboard.entity.Analytics;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnalyticsMapper {

    AnalyticsDto analyticsToAnalyticsDto(Analytics analytics);

    Analytics analyticsDtoToAnalytics(AnalyticsDto analyticsDto);
}
