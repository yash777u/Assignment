package com.assignment.dashboard.repository;

import com.assignment.dashboard.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

@EnableJpaRepositories
@Repository
public interface userRepository extends JpaRepository<User, Long> {
}
