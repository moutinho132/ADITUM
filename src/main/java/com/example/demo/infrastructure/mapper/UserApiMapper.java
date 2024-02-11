package com.example.demo.infrastructure.mapper;

import com.example.demo.domain.models.User;
import com.example.demo.infrastructure.request.UserRequest;
import com.example.demo.infrastructure.response.UserResponse;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserApiMapper {

    UserResponse modelToResponse(final User model);

    User requestToModel(final UserRequest request);

    List<UserResponse> modelToResponseList(final List<User> users);
}
