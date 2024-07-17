package com.assignment.dashboard.service;

import com.assignment.dashboard.dto.PostDto;

import java.util.List;

public interface PostService {
    List<PostDto> getPostsByUserId(Long userId);
    PostDto savePost(PostDto postDto);
}
