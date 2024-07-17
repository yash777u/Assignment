package com.assignment.dashboard.repository;

import com.assignment.dashboard.entity.Analytics;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface AnalyticsRepository extends JpaRepository<Analytics, Long> {
    Analytics findByUserId(Long userId);
}
