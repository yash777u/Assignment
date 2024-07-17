package com.assignment.dashboard.service;

import com.assignment.dashboard.dto.UserDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.assignment.dashboard.repository.userRepository;
import com.assignment.dashboard.entity.User;

import java.util.List;

@Service
public interface UserService {

    UserDto getUserById(Long id);
    UserDto saveUser(UserDto userDto);
    List<UserDto> getAllUsers();
}
