package com.jobportal.backend.service;

import com.jobportal.backend.dto.LoginDTO;
import com.jobportal.backend.dto.ResponseDTO;
import com.jobportal.backend.dto.UserDTO;
import com.jobportal.backend.exception.JobPortalException;

public interface UserService {
    UserDTO registerUser(UserDTO userDTO) throws JobPortalException;

    UserDTO loginUser(LoginDTO loginDTO) throws JobPortalException;

    Boolean sendOtp(String email) throws Exception;

    Boolean verifyOtp(String email, String otp) throws JobPortalException;

    ResponseDTO changePassword(LoginDTO loginDTO) throws JobPortalException;
}
