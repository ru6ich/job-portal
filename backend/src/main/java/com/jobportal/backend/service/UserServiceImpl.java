package service;

import dto.UserDTO;
import entity.User;
import exception.JobPortalException;
import repository.UserRepository;
import utility.Utilities;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service(value = "userService")
public class UserServiceImpl implements UserService{

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @Override
    public UserDTO registerUser(UserDTO userDTO) throws JobPortalException {
        userDTO.setId(Utilities.getNextSequence("users"));
        User user = userDTO.toEntity();
        user = userRepository.save(user);
        return user.toDTO();
    }
}
