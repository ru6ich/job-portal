package com.jobportal.backend.service;

import com.jobportal.backend.dto.ProfileDTO;
import com.jobportal.backend.exception.JobPortalException;

public interface ProfileService {
    Long createProfile(String email) throws JobPortalException;
    ProfileDTO getProfile(Long id) throws JobPortalException;
    ProfileDTO updateProfile(ProfileDTO profileDTO) throws JobPortalException;

}
