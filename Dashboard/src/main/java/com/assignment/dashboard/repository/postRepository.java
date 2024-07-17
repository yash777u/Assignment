package com.assignment.dashboard.repository;

import com.assignment.dashboard.entity.Post;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.List;

@EnableJpaRepositories
@Repository
public interface postRepository extends JpaRepository<Post, Long> {
    List<Post> findByUserId(Long userId);
}
