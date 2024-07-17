package com.assignment.dashboard.controller;

import com.assignment.dashboard.dto.AnalyticsDto;
import com.assignment.dashboard.service.AnalyticsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/analytics")
@CrossOrigin(origins = "*")
public class AnalyticsController {

    @Autowired
    private AnalyticsService analyticsService;

    @GetMapping("/user/{userId}")
    public ResponseEntity<AnalyticsDto> getAnalyticsByUserId(@PathVariable Long userId) {
        AnalyticsDto analytics = analyticsService.getAnalyticsByUserId(userId);
        return ResponseEntity.ok(analytics);
    }

    @PostMapping
    public ResponseEntity<AnalyticsDto> saveAnalytics(@RequestBody AnalyticsDto analyticsDto) {
        AnalyticsDto savedAnalytics = analyticsService.saveAnalytics(analyticsDto);
        return ResponseEntity.ok(savedAnalytics);
    }
}
