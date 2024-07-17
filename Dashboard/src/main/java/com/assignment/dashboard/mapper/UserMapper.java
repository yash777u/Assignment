package com.assignment.dashboard.mapper;

import com.assignment.dashboard.dto.UserDto;
import com.assignment.dashboard.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {
    @Mapping(target = "id", ignore = true)
    UserDto userToUserDto(User user);
    User userDtoToUser(UserDto userDto);
}
