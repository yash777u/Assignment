package com.assignment.dashboard.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String name;
    private String category;
    private String bio;
    private String contactOptions;
    private String links;
    private int followers;
    private int following;
    private int totalPosts;

    // Getters and Setters
}
