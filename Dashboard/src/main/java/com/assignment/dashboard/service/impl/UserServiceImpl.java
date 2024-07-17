package com.assignment.dashboard.service.impl;

import com.assignment.dashboard.dto.UserDto;
import com.assignment.dashboard.entity.User;
import com.assignment.dashboard.mapper.UserMapper;
import com.assignment.dashboard.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import  com.assignment.dashboard.repository.*;

import java.util.List;
import java.util.stream.Collectors;

import static java.lang.System.out;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private userRepository userRepository;

    @Autowired
    private UserMapper userMapper;


    @Override
    public UserDto getUserById(Long id) {
        User user = userRepository.findById(id).orElse(null);
        return userMapper.userToUserDto(user);
    }

    @Override
    public UserDto saveUser(UserDto userDto) {
        User user = userMapper.userDtoToUser(userDto);
        out.println("USER DTO TO USER _____"+userDto);
        User savedUser = userRepository.save(user);
        return userMapper.userToUserDto(savedUser);
    }

    @Override
    public List<UserDto> getAllUsers() {
        return userRepository.findAll().stream()
                .map(userMapper::userToUserDto)
                .collect(Collectors.toList());
    }
}
