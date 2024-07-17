package com.assignment.dashboard.service.impl;

import com.assignment.dashboard.dto.PostDto;
import com.assignment.dashboard.entity.Post;
import com.assignment.dashboard.service.PostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.assignment.dashboard.repository.*;
import com.assignment.dashboard.mapper.*;
import java.util.List;
import java.util.stream.Collectors;

@Service
public class PostServiceImpl implements PostService {

    @Autowired
    private postRepository postRepository;

    @Autowired
    private PostMapper postMapper;

    @Override
    public List<PostDto> getPostsByUserId(Long userId) {
        return postRepository.findByUserId(userId).stream()
                .map(postMapper::postToPostDto)
                .collect(Collectors.toList());
    }

    @Override
    public PostDto savePost(PostDto postDto) {
        Post post = postMapper.postDtoToPost(postDto);
        Post savedPost = postRepository.save(post);
        return postMapper.postToPostDto(savedPost);
    }
}
