package com.jobportal.backend.repository;

import com.jobportal.backend.entity.Profile;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface ProfileRepository extends MongoRepository<Profile, Long> {

}
