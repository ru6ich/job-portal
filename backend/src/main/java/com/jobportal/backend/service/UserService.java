package com.jobportal.backend.service;

import com.jobportal.backend.dto.LoginDTO;
import com.jobportal.backend.dto.UserDTO;
import com.jobportal.backend.exception.JobPortalException;

public interface UserService {
    UserDTO registerUser(UserDTO userDTO) throws JobPortalException;

    UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;
}
