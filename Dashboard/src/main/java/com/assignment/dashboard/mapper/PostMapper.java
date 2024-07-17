package com.assignment.dashboard.mapper;

import com.assignment.dashboard.dto.PostDto;
import com.assignment.dashboard.entity.Post;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface PostMapper {

    PostMapper INSTANCE = Mappers.getMapper(PostMapper.class);

    @Mapping(target = "id", ignore = true) // Ignore mapping for id when mapping from DTO to entity
    Post postDtoToPost(PostDto postDto);

    PostDto postToPostDto(Post post);

    void updatePostFromDto(PostDto postDto, @MappingTarget Post post);
}
